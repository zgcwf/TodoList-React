import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
    //键盘事件的回调
    handleKeyUp = (event) => {
        // console.log(event);
        //解构赋值获取keyCode,target
        const { keyCode, target } = event
        //判断是否是回车按键,是回车按键才会进行后续步骤传值
        if (keyCode !== 13) return
        //添加的todo名字不能为空
        if (target.value.trim() === '') {
            alert('输入不能为空')
            return
        }
        //准备好一个todo对象
        const todoObj = { id: nanoid(), name: target.value, done: false }
        //子组件给父组件传值，通过回调函数的形式，将todoObj传递给App
        this.props.addTodo(todoObj)
        //清空输入
        target.value = ''
    }
    render() {
        return (
            <div>
                <div className="todo-header">
                    <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
                </div>
            </div>
        )
    }
}
