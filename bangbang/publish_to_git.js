let fromprefix='../npm/staticmpa/';
let toprefix='../../staticmpa_dist/';
module.exports={
    describe:"把npm/staticmpa移动到git库staticmpa_dist",
    script:[
        {from:fromprefix+'pubassets',fromResolve:true,to:toprefix+'pubassets',toResolve:true},
        {from:fromprefix+'run',fromResolve:true,to:toprefix+'run',toResolve:true},
        {from:fromprefix+'App.js',fromResolve:true,to:toprefix+'App.js',toResolve:true},
        {from:fromprefix+'beautifier.js',fromResolve:true,to:toprefix+'beautifier.js',toResolve:true},
        {from:fromprefix+'build.js',fromResolve:true,to:toprefix+'build.js',toResolve:true},
        {from:fromprefix+'CommandLine.js',fromResolve:true,to:toprefix+'CommandLine.js',toResolve:true},
        {from:fromprefix+'FSTools.js',fromResolve:true,to:toprefix+'FSTools.js',toResolve:true},
        {from:fromprefix+'index.js',fromResolve:true,to:toprefix+'index.js',toResolve:true},
        {from:fromprefix+'package.json',fromResolve:true,to:toprefix+'package.json',toResolve:true},
        {from:fromprefix+'watchJsCss.js',fromResolve:true,to:toprefix+'watchJsCss.js',toResolve:true},
        //{from:fromprefix+'',fromResolve:true,to:toprefix+'',toResolve:true},
        //说明文档
        {from:'../README.md',fromResolve:true,to:toprefix+'README.md',toResolve:true}

    ]
}







