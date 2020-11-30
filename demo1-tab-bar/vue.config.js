const path = require('path');//引入path模块

module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                components: path.resolve(__dirname,'src/components'),
                assets: path.resolve(__dirname,'src/assets')
            }
        }
    }
}
