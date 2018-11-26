const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
module.exports = function override(config, env) {
     config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
     config = rewireLess.withLoaderOptions({
        modifyVars: {
            "@primary-color": "#ccc000"
        },
        })(config, env);
    return config;
};