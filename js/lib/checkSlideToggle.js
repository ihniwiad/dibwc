// check slide toggle

/*

*/

( function( $, Utils ) {

    $.fn.checkSlideToggle = function( options ) {

        var defaults = {
            effectIn: 'slideDown',
            effectOut: 'slideUp',
            effectDuration: 400,
            triggerSelector: 'input[type="checkbox"]',
            openedClass: Utils.classes.open,
            animatingClass: Utils.classes.animating,
            animatingInClass: Utils.classes.animatingIn,
            animatingOutClass: Utils.classes.animatingOut
        };

        options = $.extend( {}, defaults, options );

        var $elems = $( this );

        $elems.each( function() {

            var $elem = $( this );
            var $elemTrigger = $elem.find( options.triggerSelector );
            var $elemBody = $elem.find( $( $elemTrigger.attr( 'aria-controls' ) ) );

            // initial set closed
            if ( ! $elemTrigger.is( ':checked' ) ) {
                $elem.removeClass( options.openedClass );
                $elemTrigger.ariaExpanded( false );
                $elemBody.hide();
            }
            else {
                $elem.addClass( options.openedClass );
                $elemTrigger.ariaExpanded( true );
                $elemBody.show();
            }

            // bind click event
            $elemTrigger.on( 'change', function() {

                if ( ! $elemTrigger.ariaExpanded() ) {
                    $elem
                        .addClass( options.animatingClass )
                        .addClass( options.animatingInClass );
                    $elemTrigger.ariaExpanded( true );
                    $elemBody
                    .stop()[ options.effectIn ]( options.effectDuration, function() {
                        $elem
                            .addClass( options.openedClass )
                            .removeClass( options.animatingClass )
                            .removeClass( options.animatingInClass );
                    } );
                }
                else {
                    $elem
                        .addClass( options.animatingClass )
                        .addClass( options.animatingOutClass )
                        .removeClass( options.openedClass );
                    $elemTrigger.ariaExpanded( false );
                    $elemBody.stop()[ options.effectOut ]( options.effectDuration, function() {
                        $elem
                            .removeClass( options.animatingClass )
                            .removeClass( options.animatingOutClass );
                    } );
                }

            } );

        } );

    };

} )( jQuery, MY_UTILS );