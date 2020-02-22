const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode : 'development', // 실서비스는 production
    devtool : 'eval',   // 실서비스는 hidden-source-map
    resolve : {
        extensions : ['.js','.jsx']
    },
    entry : {
        app : ['./client'],
    },
    module : {
        rules : [{
            test: /\.jsx?/,
            loader : 'babel-loader',
            options: {
                // presets - 플러그인의 집합 
                // babel-loader
                // preset-env - 특정 브라우저에서 사용가능하게끔 변환
                // react      - jsx사용 가능하게끔 변환
                presets : [
                    ['@babel/preset-env',{
                        targets : {
                            browsers : ['> 1% in KR','last 2 chrome versions'],
                        },
                        debug : true,
                    }], 
                    '@babel/preset-react'
                ],  
                plugins : ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },
    plugins : [
        new webpack.LoaderOptionsPlugin({debug : true}),
    ],
    output : {
        path : path.join(__dirname,'dist'),
        filename : 'app.js'
    },
}