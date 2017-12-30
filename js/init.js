( function( $, Utils ) {

    // toggle (e.g. main navigation)
    Utils.$functionElems.filter( '[data-fn="toggle"]' ).toggle();

    // dropdown multilevel (e.g. main navigation lists)
    Utils.$functionElems.filter( '[data-fn="dropdown-multilevel"]' ).dropdownMultilevel();

    // remote event (e.g. main navigation backdrop)
    Utils.$functionElems.filter( '[data-fn="remote-event"]' ).remoteEvent();

    // animated anchors
    $('a[href^="#"]:not([href="#"])').animatedAnchors( {
        offset: function() {
            return Utils.anchorOffsetTop;
        }
    } );

    // to top button wrapper
    Utils.$functionElems.filter( '[data-fn="to-top-wrapper"]' ).toggleToTopButton();

    // dib election tool
    Utils.$functionElems.filter( '[data-fn="dib-election-tool"]' ).dibElection();

} )( jQuery, MY_UTILS );

