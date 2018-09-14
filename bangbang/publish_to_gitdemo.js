let fromprefix='../';
let toprefix='../../staticmpa_demo/';
module.exports={
    describe:"把这里的demo部分移动到git库staticmpa_deom中",
    script:[
        {from:fromprefix+'config/demo.config.js',fromResolve:true,to:toprefix+'config/demo.config.js',toResolve:true},
        {from:fromprefix+'demo',fromResolve:true,to:toprefix+'demo',toResolve:true},
        {from:fromprefix+'bangbang/merge.demo.bangbang.js',fromResolve:true,to:toprefix+'bangbang/merge.demo.bangbang.js',toResolve:true},
        {from:fromprefix+'bangbang/package.forToGitDemo.json',fromResolve:true,to:toprefix+'bangbang/package.json',toResolve:true},
        {from:fromprefix+'.gitignore',fromResolve:true,to:toprefix+'.gitignore',toResolve:true},
        {from:fromprefix+'package.json',fromResolve:true,to:toprefix+'package.json',toResolve:true},
        {from:fromprefix+'LICENSE',fromResolve:true,to:toprefix+'LICENSE',toResolve:true},
        //{from:fromprefix+'',fromResolve:true,to:toprefix+'',toResolve:true},
        //说明文档
        {from:fromprefix+'README.demo.md',fromResolve:true,to:toprefix+'README.md',toResolve:true},

    ]
}







