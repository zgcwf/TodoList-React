
import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import './App.css'
export default class App extends Component {
    //状态在哪里，操作状态的方法就在哪里

    //初始化状态
    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '打代码', done: false },
            { id: '004', name: '逛街', done: true }
        ]
    }
    //addTodo用于添加一个todo，接收的参数是todo对象

    addTodo = (todoObj) => {
        //获取原todos
        const { todos } = this.state
        //追加一个todo
        const newTodos = [todoObj, ...todos]
        //更新状态
        this.setState({ todos: newTodos })
    }
    // updateTodo用于更新一个todo对象是否完成
    updateTodo = (id, done) => {
        //获取原todos
        const { todos } = this.state
        //匹配处理数据
        const newTodos = todos.map(todoObj => {
            if (todoObj.id === id) {
                // 找到对应的数据，并且更改done值
                return { ...todoObj, done: done }
            } else {
                return todoObj
            }
        })
        this.setState({ todos: newTodos })
    }
    //deleteTodo用于删除一个todo对象
    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter(todoObj => {
            return todoObj.id !== id
        })
        this.setState({ todos: newTodos })
    }
    //checkAllTodo用于全选框（全选或者全不选）
    checkAllTodo = (done) => {
        const { todos } = this.state
        const newTodos = todos.map(todoObj => {
            return { ...todoObj, done: done }
        })
        this.setState({ todos: newTodos })
    }
    clearAll = () => {
        const { todos } = this.state
        const newTodos = todos.filter(todo => {
            return todo.done === false
        })
        this.setState({ todos: newTodos })
    }
    render() {
        // 解构赋值
        const { todos } = this.state
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo={this.addTodo} />
                        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAll={this.clearAll} />
                    </div>
                </div>
            </div>
        )
    }
}
