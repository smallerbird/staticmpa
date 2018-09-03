let {minifyJsCurrentPath,minifyCssCurrentPath,transformJS,convertLess}=require('./beautifier');
const fs=require('fs');
const Path=require('path');
var chokidar = require('chokidar');
function startWatch(watchPath,isless,jsjs,watchJsCss){
    console.log('startWatch:isless:'+isless+',jsjs:'+jsjs)
    var watcher = chokidar.watch(watchPath, {
        ignored: /(^|[\/\\])\../,
        persistent: true
    });
    watcher.on('change', path =>{
        if (typeof watchJsCss.beautifierIgnore!='undefined'){
            let arrI=watchJsCss.beautifierIgnore;
            for (let i=0;i<arrI.length;i++){
                if (arrI[i].test(path)){
                    console.log('忽略改变处理:'+path)
                    return false;
                }
            }
        }
        console.log('改变:'+path)
        if (jsjs){
            transformJS(path);
        }
        if (isless){
            convertLess(path);
        }
        //minifyCssCurrentPath(path)
    })
}
module.exports=startWatch;
