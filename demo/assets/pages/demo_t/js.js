var pageName='demo_t';
define('main',[
    'bootstrap',
    'layer',
    'css!public.min',
    'css!pages/'+pageName+'/css.min',
    'component/test'
], function(a1,a2,a3,a4,Test) {
    //页面运行代码放入到这里--------------------
    console.log(`页面:${pageName}启动了..`);
    new Test().hi({msg:'asdfasdf'})

});


require(['main']);