/**
 * @author mrdoob / http://mrdoob.com/
 */

Menubar.Clean = function (editor) {

    var container = new UI.Panel();
    container.setClass('menu');

    var title = new UI.Panel();
    title.setClass('title');
    title.setTextContent('清除历史记录');
    title.onClick(function () {
        if (confirm('确定清除历史记录？')) {

            editor.history.clear();

        }
    });
    var icon = new UI.Icon();
    icon.setClass('fa fa-eraser');
    container.add(icon, title);
    container.add(title);

    return container;

};
