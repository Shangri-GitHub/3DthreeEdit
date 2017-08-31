/**
 * @author mrdoob / http://mrdoob.com/
 */

Menubar.View = function ( editor ) {

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( '保存' );
	title.onClick(function(){
		// alert(1)
        // editor.signals.sceneGraphChanged.dispatch();
        editor.signals.sceneGraphChanged.dispatch();
        console.log(editor.signals.sceneGraphChanged.dispatch)
	})
	container.add( title );

	// var options = new UI.Panel();
	// options.setClass( 'options' );
	// container.add( options );

	// VR mode

	// var option = new UI.Row();
	// option.setClass( 'option' );
	// option.setTextContent( 'VR mode' );
	// option.onClick( function () {
    //
	// 	if ( WEBVR.isAvailable() === true ) {
    //
	// 		editor.signals.enterVR.dispatch();
    //
	// 	} else {
    //
	// 		alert( 'WebVR not available' );
    //
	// 	}
    //
	// } );
	// options.add( option );

	return container;

};
