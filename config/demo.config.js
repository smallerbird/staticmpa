const Path=require('path');
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
            /\\demo\\assets\\lib\\test\\/
        ],
        //需要生成的html的目录
        ejsPaths:[
            {from:'./',to:''},
            {from:'./pages',to:'pages'},
        ]
    },
    dev:{
        rootPath:rootPath,
        hostname:'127.0.0.1',
        port:3001
    }
}