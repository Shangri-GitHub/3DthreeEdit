/**
 * @author mrdoob / http://mrdoob.com/
 */

Menubar.Redo = function (editor) {

    var container = new UI.Panel();
    container.setClass('menu');

    var title = new UI.Panel();
    var icon = new UI.Icon();
    icon.setClass('fa fa-repeat');
    title.setClass('title');
    title.setTextContent('前进');
    title.onClick(function () {
        editor.redo();
    });
    container.add(icon, title);

    return container;

};
