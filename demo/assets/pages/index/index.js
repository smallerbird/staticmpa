define('main',[
    'bootstrap',
    'layer',
    'css!public.min',
    'css!pages/index/index.min'
], function() {
    //code that requires the stylesheet: styles/main.css
    $('.tip').click(()=>{
        layer.alert('hello');
    })
});
require(['main']);