const Path=require('path');
const process = require('child_process');
let sitename='demo';
let rootPath=Path.resolve(__dirname,'../'+sitename+'/')
let buildPath=Path.resolve(__dirname,'../build/'+sitename)
module.exports={
    build:{
        buildPath,
        //复制的目录
        copyPaths:[
            {from:'./assets',to:'./assets/'},
            {from:'../node_modules/staticmpa/pubassets/dist',to:'./assets/lib/general/'},
        ],
        //压缩最小化
        beautifierPath:[
            './assets'
        ],
        beautifierIgnore:[
            /\/demo\/assets\/lib\/test\//
        ],
        /**
         *  文件改为回调
         * @param path 改变的文件的完整路径
         * @param isJS 是否是js
         * @param isLess 是否是less
         * @param transformJS 编译transformJS的方法
         * @param convertLess 编译less的方法
         */
        beautifierChangeCallback:function ({path,isJS,isLess,transformJS,convertLess,config}) {
            //console.log('beautifierChangeCallback:'+path)
            let newPath = path.split(Path.sep).join('/');
            //console.log('Path.sep:'+Path.sep,'path:'+path,'newPath:'+newPath);
            //Path.delimiter
            //如果这个文件发生修改，打印出node的版本号
            if (newPath.indexOf('demo/assets/component/test/js.js')!=-1){
                process.exec('node --version',function (error, stdout, stderr) {
                    if (error !== null) {
                        console.log('exec error: ' + error);
                    }
                    console.log(stdout);
                });
            }

            //
            //demo/assets/component/test/js.js
        },
        //需要生成的html的目录
        ejsPaths:[
            {from:'./',to:''},
            {from:'./pages',to:'pages'},
        ]
    },
    dev:{
        rootPath:rootPath,
        hostname:'127.0.0.1',
        port:3001,

    }
}