/**
 * @author mrdoob / http://mrdoob.com/
 */

Menubar.Play = function ( editor ) {

	var signals = editor.signals;

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var isPlaying = false;

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( '清除历史记录' );
	title.onClick( function () {
        if ( confirm( 'The Undo/Redo History will be cleared. Are you sure?' ) ) {

            		editor.history.clear();

            	}

		// if ( isPlaying === false ) {
        //
		// 	isPlaying = true;
		// 	title.setTextContent( 'Stop' );
		// 	signals.startPlayer.dispatch();
        //
		// } else {
        //
		// 	isPlaying = false;
		// 	title.setTextContent( 'Play' );
		// 	signals.stopPlayer.dispatch();
        //
		// }

	} );
	container.add( title );

	return container;

};
