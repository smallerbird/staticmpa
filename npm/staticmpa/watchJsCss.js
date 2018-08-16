let {minifyJsCurrentPath,minifyCssCurrentPath,convertLess}=require('./beautifier');
const fs=require('fs');
const Path=require('path');
var chokidar = require('chokidar');
function startWatch(watchPath){
    var watcher = chokidar.watch(watchPath, {
        ignored: /(^|[\/\\])\../,
        persistent: true
    });
    watcher.on('change', path =>{
        console.log('改变:'+path)
        minifyJsCurrentPath(path)
        convertLess(path);
        //minifyCssCurrentPath(path)
    })
}
module.exports=startWatch;
