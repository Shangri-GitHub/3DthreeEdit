/**
 * @author mrdoob / http://mrdoob.com/
 */

Menubar.Save = function (editor) {

    var container = new UI.Panel();
    container.setClass('menu');

    var title = new UI.Panel();
    title.setClass('title');
    title.setTextContent('保存');

    title.onClick(function () {

        editor.signals.sceneGraphChanged.dispatch();
    });
    var icon = new UI.Icon();
    icon.setClass('fa fa-file-text-o');
    container.add(icon, title);

    return container;

};
