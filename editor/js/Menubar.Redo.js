/**
 * @author mrdoob / http://mrdoob.com/
 */

Menubar.Redo = function (editor) {

    var container = new UI.Panel();
    container.setClass('menu');

    var redo = new UI.Panel();
    var icon = new UI.Icon();
    icon.setClass('fa fa-repeat');
    redo.setClass('title');
    redo.setTextContent('前进');
    redo.onClick(function () {
        editor.redo();
    });
    container.add(icon, redo);


    editor.signals.historyChanged.add( function () {

        var history = editor.history;

        redo.setClass( 'title' );

        if ( history.redos.length == 0 ) {

            redo.setClass( 'title inactive' );

        }

    } );

    return container;

};
