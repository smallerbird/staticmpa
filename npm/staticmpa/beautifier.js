let {foreachFile,writeFile}=require('./FSTools')
const Path=require('path');
const fs = require('fs');
const UglifyJS = require('uglify-js');

var uglifycss = require('uglifycss');
const less = require( 'less' )  // 引入 less 模块
let dirPath=Path.resolve(__dirname,'../web/assets')

function convertLess(srcPath,isMinify=true) {
    let isOk=/\.less/.test(srcPath);
    if (!isOk) return;
    let distPath=srcPath.split('.less').join('')+'.css';
    fs.readFile(srcPath, 'utf8', (err,data) => {
        // data.toString()
        if( err ) {
            throw err
        }
        // 这里我们读取到了 less 文件内容
        // console.log( data )
        // 在代码中调用 less
        less.render(data,(err,css)=>{
            if( err ) {
                throw err
            }
            // 在这里我们得到了 less 编译后的 css 内容
            //console.log( distPath,css.css )
            // 下面就是要将 css.css 写入到文件中
            fs.writeFile( distPath, css.css, ( err ) => {
                if ( err ) {
                    throw err
                }
                if(isMinify) minifyJsCurrentPath(distPath);
                // 输出 success 编译写入成功
                //console.log( 'success' )
            })

        })

    })
}

function minifyJs(filePath,toFilePath=null) {
    let isOk=/\.js$/.test(filePath);
    let isOk1=/\.min\.js$/.test(filePath);
    if (!isOk) return false;
    if (isOk1) return false;
    let minCode=UglifyJS.minify(filePath).code;
    writeFile(toFilePath,minCode);
    return;
}
function minifyCss(filePath,toFilePath=null) {
    let isOk=/\.css$/.test(filePath);
    let isOk1=/\.min\.css$/.test(filePath);
    if (!isOk) return false;
    if (isOk1) return false;
    var minCode = uglifycss.processFiles(
        [filePath],
        { maxLineLen: 500, expandVars: true }
    );
    writeFile(toFilePath,minCode);
    return true;
}
function minifyJsCurrentPath(filePath) {
    let isOk=/\.js$/.test(filePath);
    let isOk1=/\.min\.js$/.test(filePath);
    if (!isOk) return false;
    if (isOk1) return false;
    let dp=Path.dirname(filePath)
    let basename=Path.basename(filePath,'.js');
    let partname='.min.js'
    let toFilePath=Path.resolve(dp,'./'+basename+partname)

    let minCode=UglifyJS.minify(filePath).code;
    writeFile(toFilePath,minCode);
    return true;
}
function minifyCssCurrentPath(filePath) {
    let isOk=/\.css$/.test(filePath);
    let isOk1=/\.min\.css$/.test(filePath);
    if (!isOk) return false;
    if (isOk1) return false;

    let dp=Path.dirname(filePath)
    let basename=Path.basename(filePath,'.css');
    let partname='.min.css'
    let toFilePath=Path.resolve(dp,'./'+basename+partname)


    var minCode = uglifycss.processFiles(
        [filePath],
        { maxLineLen: 500, expandVars: true }
    );
    writeFile(toFilePath,minCode);
    return true;
}
function beautifier(dirPath,isReplace=false) {
    foreachFile(dirPath,function(info){
        let {filePath,fileName}=info;
        let dp=Path.dirname(filePath);
        let isMinJS=/\.min\.js$/.test(fileName);
        if (!isMinJS){
            //编译压缩js
            let isJS=/\.js$/.test(fileName);
            if (isJS){
                //console.log('--------',minCode)
                let basename=Path.basename(filePath,'.js');
                let partname=isReplace?'.js':'.min.js'
                let minFile=Path.resolve(dp,'./'+basename+partname)
                //console.log('minFile:'+minFile)
                minifyJs(filePath,minFile);
            }
            //writeFile();
            //console.log(filePath,minCode)
        }
        let isLess=/\.less$/.test(fileName);
        if (isLess){
            //编译压缩less+css
            convertLess(filePath)  //自带压缩css
        }else{
            //编译压缩css
            let isMinMinCss=/\.min\.css$/.test(fileName);
            if (!isMinMinCss){
                let isCss=/\.css$/.test(fileName);
                if (isCss){
                    let basename=Path.basename(filePath,'.css');
                    let partname=isReplace?'.css':'.min.css'
                    let minFile=Path.resolve(dp,'./'+basename+'.min.css')
                    //console.log('minFile:'+minFile)
                    minifyCss(filePath,minFile)
                }
                //writeFile();
                //console.log(filePath,minCode)
            }
        }
        //console.log(fileName+' isJS:'+isJS);
    })
}
module.exports={convertLess,beautifier,minifyJs,minifyCss,minifyJsCurrentPath,minifyCssCurrentPath}