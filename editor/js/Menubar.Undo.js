/**
 * @author mrdoob / http://mrdoob.com/
 */

Menubar.Undo = function (editor) {

    var container = new UI.Panel();
    container.setClass('menu');

    var title = new UI.Panel();
    title.setClass('title');
    title.setTextContent( '后退' );
    title.onClick(function () {
        editor.undo();
    });
    var icon = new UI.Icon();
    icon.setClass('fa fa-undo');
    container.add(icon, title);

    // title.setClass( 'inactive' );


    editor.signals.historyChanged.add( function () {

        var history = editor.history;

        title.setClass( 'title' );

        if ( history.undos.length == 0 ) {

            title.setClass( 'title inactive' );

        }

    } );


    return container;

};
