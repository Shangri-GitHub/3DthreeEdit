/**
 * @author mrdoob / http://mrdoob.com/
 */

Menubar.Import = function (editor) {

    var NUMBER_PRECISION = 6;

    function parseNumber(key, value) {

        return typeof value === 'number' ? parseFloat(value.toFixed(NUMBER_PRECISION)) : value;

    }

    var container = new UI.Panel();
    container.setClass('menu');

    var title = new UI.Panel();
    title.setClass('title');
    title.setTextContent('导入');
    title.onClick(function () {

        fileInput.click();

    });

    var icon = new UI.Icon();
    icon.setClass('fa fa-download');
    container.add(icon, title);

    // var options = new UI.Panel();
    // options.setClass( 'options' );
    // container.add( options );


    // Import

    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.addEventListener('change', function (event) {

        editor.loader.loadFile(fileInput.files[0]);

    });

    // var option = new UI.Row();
    // option.setClass( 'option' );
    // option.setTextContent( 'Import' );
    // option.onClick( function () {
    //
    // 	fileInput.click();
    //
    // } );
    // options.add( option );

    //


    // var autosave = new UI.THREE.Boolean( editor.config.getKey( 'autosave' ), 'autosave' );
    // autosave.text.setColor( '#888' );
    // // autosave.setClass( 'option' );
    // autosave.onChange( function () {
    //
    //     var value = this.getValue();
    //
    //     editor.config.setKey( 'autosave', value );
    //
    //     if ( value === true ) {
    //
    //         editor.signals.sceneGraphChanged.dispatch();
    //
    //     }
    //
    // } );
    // container.add( autosave );

    // editor.signals.savingStarted.add( function () {
    //
    //     autosave.text.setTextDecoration( 'underline' );
    //
    // } );
    //
    // editor.signals.savingFinished.add( function () {
    //
    //     autosave.text.setTextDecoration( 'none' );
    //
    // } );

    // var version = new UI.Text( 'r' + THREE.REVISION );
    // version.setClass( 'title' );
    // version.setOpacity( 0.5 );
    // container.add( version );


    var link = document.createElement('a');
    link.style.display = 'none';
    document.body.appendChild(link); // Firefox workaround, see #6594

    // function save( blob, filename ) {
    //
    // 	link.href = URL.createObjectURL( blob );
    // 	link.download = filename || 'data.json';
    // 	link.click();
    //
    // 	// URL.revokeObjectURL( url ); breaks Firefox...
    //
    // }

    // function saveString( text, filename ) {
    //
    // 	save( new Blob( [ text ], { type: 'text/plain' } ), filename );
    //
    // }

    return container;

};
