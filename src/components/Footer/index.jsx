import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    //全选checkbox的回调
    handleCheckAll = (e) => {
        this.props.checkAllTodo(e.target.checked)
    }
    //清除已完成任务的回调
    handleClearAllDone = () => {
        this.props.clearAll()
    }
    render() {
        const { todos } = this.props
        //总数
        const total = todos.length
        //已完成的个数
        const doneCount = todos.reduce((pre, todo) => {
            return pre + (todo.done ? 1 : 0)
        }, 0)
        return (
            <div>
                <div className="todo-footer">
                    <label>
                        <input type="checkbox" onChange={this.handleCheckAll} checked={total === doneCount && total !== 0 ? true : false} />
                    </label>
                    <span>
                        <span>已完成{doneCount}</span> / 全部{total}
                    </span>
                    <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
                </div>
            </div>
        )
    }
}
