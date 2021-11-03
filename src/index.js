//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
//引入App
import App from './App'
//  <React.StrictMode>用于校验一些错误，如：字符串形式的ref(将要被弃用，不再推荐写)
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

