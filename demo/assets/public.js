require.config({
    baseUrl: '/assets/',
    paths: {
        jquery: "lib/general/jquery/jquery-1.9.1.min",
        bootstrap:'lib/general/bootstrap/js/bootstrap.min',
        layer:'lib/general/layer/layer',
        component:'component',
        'component/test':'component/test/js.min'
    },
    map: {
        '*': {
            'css':'lib/general/css.min'
        }
    },
    shim: {
        jquery: {
            exports: '$'
        },
        bootstrap:{
            deps: ['jquery','css!lib/general/bootstrap/css/bootstrap.min']
        },
        layer:{
            deps: ['jquery','css!lib/general/layer/theme/default/layer']
        }
    }
});