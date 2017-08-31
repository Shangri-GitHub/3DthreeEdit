/**
 * @author mrdoob / http://mrdoob.com/
 */

Menubar.Examples = function ( editor ) {

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( '复制' );
    title.onClick( function () {

        var object = editor.selected;

        if ( object.parent === null ) return; // avoid cloning the camera or scene

        object = object.clone();

        editor.execute( new AddObjectCommand( object ) );

    } );
	container.add( title );

    // // Clone
    //
    // var option = new UI.Row();
    // option.setClass( 'option' );
    // option.setTextContent( 'Clone' );
    // options.onClick( function () {
    //
    // 	var object = editor.selected;
    //
    // 	if ( object.parent === null ) return; // avoid cloning the camera or scene
    //
    // 	object = object.clone();
    //
    // 	editor.execute( new AddObjectCommand( object ) );
    //
    // } );
    // options.add( option );

	// var options = new UI.Panel();
	// options.setClass( 'options' );
	// container.add( options );
    //
	// // Examples
    //
	// var items = [
	// 	{ title: 'Arkanoid', file: 'arkanoid.app.json' },
	// 	{ title: 'Camera', file: 'camera.app.json' },
	// 	{ title: 'Particles', file: 'particles.app.json' },
	// 	{ title: 'Pong', file: 'pong.app.json' },
	// 	{ title: 'Shaders', file: 'shaders.app.json' }
	// ];
    //
	// var loader = new THREE.FileLoader();
    //
	// for ( var i = 0; i < items.length; i ++ ) {
    //
	// 	( function ( i ) {
    //
	// 		var item = items[ i ];
    //
	// 		var option = new UI.Row();
	// 		option.setClass( 'option' );
	// 		option.setTextContent( item.title );
	// 		option.onClick( function () {
    //
	// 			if ( confirm( 'Any unsaved data will be lost. Are you sure?' ) ) {
    //
	// 				loader.load( 'examples/' + item.file, function ( text ) {
    //
	// 					editor.clear();
	// 					editor.fromJSON( JSON.parse( text ) );
    //
	// 				} );
    //
	// 			}
    //
	// 		} );
	// 		options.add( option );
    //
	// 	} )( i )
    //
	// }

	return container;

};
