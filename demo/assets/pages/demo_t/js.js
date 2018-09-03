var pageName='demo_t';
define('main',[
    'bootstrap',
    'layer',
    'css!public.min',
    'css!pages/'+pageName+'/css.min',
    'component/test/js.min',
    'component/DebugInfoPad/js.min',
    'css!component/DebugInfoPad/index.min'
], function(a1,a2,a3,a4,Test,DebugInfoPad) {
    //页面运行代码放入到这里--------------------
    console.log(`页面:${pageName}启动了..`);
    new Test().hi({msg:'asdfasdf123123123'})
    let padDebug=new DebugInfoPad({});
    padDebug.log('这里调试面板... start')

});


require(['main']);