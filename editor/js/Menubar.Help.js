/**
 * @author mrdoob / http://mrdoob.com/
 */

Menubar.Help = function ( editor ) {

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( '删除' );
    title.onClick( function () {

    	var object = editor.selected;

    	if ( confirm( 'Delete ' + object.name + '?' ) === false ) return;

    	var parent = object.parent;
    	if ( parent === undefined ) return; // avoid deleting the camera or scene

    	editor.execute( new RemoveObjectCommand( object ) );

    } );
	container.add( title );


    // // Delete
    //
    // var option = new UI.Row();
    // option.setClass( 'option' );
    // option.setTextContent( 'Delete (Del)' );
    // option.onClick( function () {
    //
    // 	var object = editor.selected;
    //
    // 	if ( confirm( 'Delete ' + object.name + '?' ) === false ) return;
    //
    // 	var parent = object.parent;
    // 	if ( parent === undefined ) return; // avoid deleting the camera or scene
    //
    // 	editor.execute( new RemoveObjectCommand( object ) );
    //
    // } );
    // options.add( option );



	// var options = new UI.Panel();
	// options.setClass( 'options' );
	// container.add( options );
    //
	// // Source code
    //
	// var option = new UI.Row();
	// option.setClass( 'option' );
	// option.setTextContent( 'Source code' );
	// option.onClick( function () {
    //
	// 	window.open( 'https://github.com/mrdoob/three.js/tree/master/editor', '_blank' )
    //
	// } );
	// options.add( option );
    //
	// // About
    //
	// var option = new UI.Row();
	// option.setClass( 'option' );
	// option.setTextContent( 'About' );
	// option.onClick( function () {
    //
	// 	window.open( 'http://threejs.org', '_blank' );
    //
	// } );
	// options.add( option );

	return container;

};
