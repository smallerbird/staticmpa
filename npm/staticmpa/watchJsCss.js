let {minifyJsCurrentPath,minifyCssCurrentPath,convertLess}=require('./beautifier');
const fs=require('fs');
const Path=require('path');
var chokidar = require('chokidar');
function startWatch(watchPath,isless,jsjs){
    console.log('startWatch:isless:'+isless+',jsjs:'+jsjs)
    var watcher = chokidar.watch(watchPath, {
        ignored: /(^|[\/\\])\../,
        persistent: true
    });
    watcher.on('change', path =>{
        console.log('改变:'+path)
        if (jsjs) minifyJsCurrentPath(path)
        if (isless) convertLess(path);
        //minifyCssCurrentPath(path)
    })
}
module.exports=startWatch;
