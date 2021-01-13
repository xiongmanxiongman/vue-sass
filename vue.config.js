module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-sass/dist/'
        : '/',
    //runtimeCompiler: true,//template模板,导致runtime-only报错解决方法
};
