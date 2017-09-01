/**
 * @author mrdoob / http://mrdoob.com/
 */

var Menubar = function ( editor ) {

	var container = new UI.Panel();
	container.setId( 'menubar' );

	container.add( new Menubar.Import( editor ) );
	container.add( new Menubar.Undo( editor ) );
	container.add( new Menubar.Redo( editor ) );
	container.add( new Menubar.Clean( editor ) );

	container.add( new Menubar.Delete( editor ) );
    // container.add( new Menubar.AD( editor ) );
    container.add( new Menubar.Copy( editor ) );
    container.add( new Menubar.Save( editor ) );
    container.add( new Menubar.Example( editor ) );
    container.add( new Menubar.Status( editor ) );


	return container;

};
