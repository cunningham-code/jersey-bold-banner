/**
 * Flag Waver
 *
 * Simulate a flag waving in the breeze right in your browser window.
 *
 * /u/krikienoid
 *
 */

//
// Flag Waver UI
//

;( function ( window, document, $, rivets, flagWaver, hashVars, undefined ) {

    //
    // Vars
    //

    // Browser support

    var isHistorySupported = !!( window.history && window.history.pushState );

    // DOM elements

    var $controlImgUpload,
        $setImgUploadMode,
        $inputImgLink,
        $setImgLink,
        $setHoisting,
        $setTopEdge,
        $openImgFile,
        $infoImgFile,
        $windToggle,
        $windToggleRandom,
        $windDirectionControl;

    // Settings

    var flagWaverDefaults = {
            isWindOn : true,
            isWindRandom : true,
            windDirection : 90,

            flag     : {
                imgUploadMode : 'web',
                imgURL        : '',
                imgFilePath   : '',
                hoisting      : 'dexter',
                topEdge       : 'top'
            }
        },
        flagWaverOpts = $.extend( true, {}, flagWaverDefaults );

    var flagWaverControls = {
            toggleWind : function () {
                flagWaverOpts.isWindOn = !flagWaverOpts.isWindOn;
                if ( flagWaverOpts.isWindOn ) {
                    flagWaver.setWind( 200 );
                }
                else {
                    flagWaver.setWind( 0.001 );
                }
            },
            toggleWindRandom : function () {
                flagWaverOpts.isWindRandom = !flagWaverOpts.isWindRandom;
                if ( flagWaverOpts.isWindRandom ) {
                    flagWaver.setWindDirection( false );
                }
                else {
                    flagWaver.setWindDirection( flagWaverOpts.windDirection );
                }
            },
            changeWindDirection : function () {
                flagWaverOpts.isWindRandom = false;
                flagWaver.setWindDirection( flagWaverOpts.windDirection );
            },
            flag : {
                setImgUploadMode : function () {
                    if ( flagWaverOpts.flag.imgUploadMode === 'web' ) {
                        $controlImgUpload
                            .removeClass( 'upload-mode-file' )
                            .addClass( 'upload-mode-web' )
                            .append( $( '.input-img-web' ) );
                    }
                    else if ( flagWaverOpts.flag.imgUploadMode === 'file' ) {
                        $controlImgUpload
                            .removeClass( 'upload-mode-web' )
                            .addClass( 'upload-mode-file' )
                            .append( $( '.input-img-file' ) );
                    }
                },
                setImgURL : function () {
                    flagWaverOpts.flag.imgFilePath = '';
                    if ( flagWaverOpts.flag.imgURL ) {
                        setFlagOpts( { imgSrc : flagWaverOpts.flag.imgURL } );
                        toHash( true );
                    }
                },
                setImgFile : function () {
                    var file       = this.files[ 0 ],
                        reader     = new window.FileReader(),
                        isNewState = false;
                    flagWaverOpts.flag.imgFilePath = this.value;
                    reader.onload = function ( e ) {
                        isNewState = !!( flagWaverOpts.flag.imgURL );
                        flagWaverOpts.flag.imgURL = '';
                        setFlagOpts( { imgSrc : e.target.result } );
                        toHash( isNewState );
                    };
                    reader.readAsDataURL( file );
                },
                setHoisting : function () {
                    setFlagOpts( { hoisting : flagWaverOpts.flag.hoisting } );
                    toHash();
                },
                setTopEdge : function () {
                    setFlagOpts( { topEdge : flagWaverOpts.flag.topEdge } );
                    toHash();
                }
            }
        };

    var flagWaverModel = {
            flagWaverOpts : flagWaverOpts,
            flagWaverControls : flagWaverControls
        };

    //
    // Functions
    //

    function setFlagOpts ( flagData ) { flagWaver.flag.setOpts( flagData ); }

    function fromHash () {
        var hashFrag = window.location.hash.split( '#' )[ 1 ],
            flagOpts = {},
            flagData;
        if ( hashFrag ) {
            if ( window.location.href.search( /\#(\!|\?)/ ) >= 0 ) {
                flagData = hashVars.getData(
                    // Compatibility with old version links
                    window.location.hash.replace( /\#(\!|\?)/, '#?' )
                );
                flagOpts.imgURL   = flagData.src;
                flagOpts.hoisting = flagData.hoisting;
                flagOpts.topEdge  = flagData.topedge;
            }
            else { // Compatibility with old version links
                flagOpts.imgURL = window.unescape( hashFrag );
            }
        }
        $.extend( flagWaverOpts.flag, flagWaverDefaults.flag, flagOpts );
        setFlagOpts( {
            imgSrc : 'img/flag.png',
            topEdge : flagWaverOpts.flag.topEdge,
            hoisting : flagWaverOpts.flag.hoisting
        } );
    }

    function toHash ( isNewState ) {
        hashVars.setData(
            {
                src      : flagWaverOpts.flag.imgURL,
                hoisting : flagWaverOpts.flag.hoisting,
                topedge  : flagWaverOpts.flag.topEdge
            },
            {
                isNewState : isNewState,
                clearHash  : !flagWaverOpts.flag.imgURL
            }
        );
    }

    function updateExpander ( $expander ) {
        var $expandable = $( $expander.data( 'target' ) );
        if ( $expandable.hasClass( 'expanded' ) ) {
            $expander
                .removeClass( 'closed' )
                .addClass( 'open' )
                .val( $expander.data( 'text-expanded' ) )
                .attr( 'aria-expanded', 'true' );
            $expandable.attr( 'aria-hidden', 'false' );
        }
        else {
            $expander
                .removeClass( 'open' )
                .addClass( 'closed' )
                .val( $expander.data( 'text-collapsed' ) )
                .attr( 'aria-expanded', 'false' );
            $expandable.attr( 'aria-hidden', 'true' );
        }
    }

    //
    // Rivets.js configuration
    //

    rivets.configure( {
        prefix             : 'data-rv',
        preloadData        : true,
        rootInterface      : '.',
        templateDelimiters : [ '{', '}' ]
    } );

    rivets.formatters.onoff = function ( value, onText, offText ) {
        return ( value )? onText || 'On' : offText || 'Off';
    };

    rivets.formatters.fileName = function ( value, defaultText ) {
        return ( value )? value.split( '\\' ).pop() : defaultText || '';
    };

    //
    // Create HashVars
    //

    hashVars.create( {
        key : 'src',
        defaultValue : '',
        encode : function ( data ) { return window.encodeURIComponent( data ); }
    } );

    hashVars.create( {
        key : 'hoisting',
        defaultValue : 'dexter',
        decode : function ( value ) {
            if ( value.toLowerCase().match( /^dex(ter)?$/g ) ) {
                return 'dexter';
            }
            else if ( value.toLowerCase().match( /^sin(ister)?$/g ) ) {
                return 'sinister';
            }
        },
        encode : function ( data ) { return 'sin'; }
    } );

    hashVars.create( {
        key : 'topedge',
        defaultValue : 'top',
        decode : function ( value ) {
            if ( value.toLowerCase().match( /^(top|right|bottom|left)$/g ) ) {
                return value;
            }
        }
    } );

    //
    // Init
    //

    $( document ).ready( function () {

        //
        // Get DOM elements
        //

        $controlImgUpload     = $( '#control-img-upload' );
        $setImgUploadMode     = $( '#set-img-upload-mode' );
        $inputImgLink         = $( '#input-img-link' );
        $setImgLink           = $( '#set-img-link' );
        $setHoisting          = $( '#set-hoisting' );
        $setTopEdge           = $( '#set-top-edge' );
        $openImgFile          = $( '#open-img-file' );
        $infoImgFile          = $( '#info-img-file' );
        $windToggle           = $( '#wind-toggle' );
        $windToggleRandom     = $( '#wind-toggle-random' );
        $windDirectionControl = $( '#wind-direction-control' );

        //
        // Init
        //

        // Init flagWaver and append renderer to DOM
        flagWaver.init();
        $( '.js-flag-canvas' ).append( flagWaver.canvas );
        window.dispatchEvent( new window.Event( 'resize' ) );

        // Load settings from hash vars on page load
        fromHash();

        // Make knob from wind direction control
        $windDirectionControl.knob({
            'min'           : 0,
            'max'           : 360,
            'stopper'       : false,
            'width'         : 32,
            'height'        : 32,
            'cursor'        : 12.0,
            'thickness'     : 1.0,
            'bgColor'       : '#999999',
            'fgColor'       : '#ffffff',
            'inline'        : false,
            'change'        : function(v) {
                flagWaverOpts.windDirection = v;
                $windDirectionControl.trigger('change');
            }
        });

        // Hacks for jQuery Knob :(
        $windDirectionControl.parent().addClass('input-control-group dial-group');
        $windDirectionControl.val(flagWaverOpts.windDirection).trigger('change');
        $windDirectionControl.trigger('configure', {
            'displayInput' : false
        });

        //
        // Bind event handlers
        //

        // UI controls

        // Expander control
        $( 'input[type="button"].expander' ).on( 'click', function () {
            var $this = $( this );
            $( $this.data( 'target' ) ).toggleClass( 'expanded' );
            updateExpander( $this );
        } ).each( function () { updateExpander( $( this ) ); } );

        // Select file loading mode
        rivets.bind( $setImgUploadMode, flagWaverModel );
        $setImgUploadMode.trigger( 'change' );

        // Load flag image

        // Load flag image from hash on user entered hash
        if ( isHistorySupported ) { $( window ).on( 'popstate', fromHash ); }

        // Load flag image from url
        rivets.bind( $inputImgLink,         flagWaverModel );
        rivets.bind( $setImgLink,           flagWaverModel );

        // Load flag image from file
        $openImgFile
            .on( 'focus', function () {
                $openImgFile.parent().addClass( 'active' );
            } )
            .on( 'blur', function () {
                $openImgFile.parent().removeClass( 'active' );
            } );

        rivets.bind( $openImgFile,          flagWaverModel );
        rivets.bind( $infoImgFile,          flagWaverModel );

        // Settings
        rivets.bind( $windToggle,           flagWaverModel );
        rivets.bind( $windToggleRandom,     flagWaverModel );
        rivets.bind( $windDirectionControl, flagWaverModel );
        rivets.bind( $setHoisting,          flagWaverModel );
        rivets.bind( $setTopEdge,           flagWaverModel );

    } );

} )( window, document, jQuery, rivets, flagWaver, hashVars );
