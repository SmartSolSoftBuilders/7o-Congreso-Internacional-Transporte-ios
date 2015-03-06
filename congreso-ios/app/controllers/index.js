function onMenuButtonClick(e){
    $.index.toggleLeftView();
}

function onDrawerOpen(e) {
    Ti.API.info($.index.isLeftDrawerOpen);
}

function onDrawerClose(e) {
    Ti.API.info($.index.isLeftDrawerOpen);
}

// function onDrawerSlide(e) { //not supported yet.
    // slide offset: e.offset 
    // console.log(e);
// }

$.menuC.on('menuclick',function(e){
    $.index.toggleLeftView({animated:false}); //animated option only work on ios
    if(e.itemId == 'registro'){
        $.index.openWindow(Alloy.createController('registro').getView());
       }
    if(e.itemId == 'sede'){
        $.index.openWindow(Alloy.createController('sede').getView());
       }
    if(e.itemId == 'agenda'){
        $.index.openWindow(Alloy.createController('agenda').getView());
       }
    if(e.itemId == 'ponentes'){
        $.index.openWindow(Alloy.createController('ponentes').getView());
       }
    if(e.itemId == 'multimedia'){
        $.index.openWindow(Alloy.createController('multimedia').getView());
       }
    if(e.itemId == 'patrocinadores'){
        $.index.openWindow(Alloy.createController('patrocinadores').getView());
      }
});

$.index.open();
