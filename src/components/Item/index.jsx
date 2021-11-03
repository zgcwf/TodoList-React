import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state = { mouse: false } //标识鼠标移入、移出，给其添加样式
    //鼠标移入、移出的回调,{高阶函数（柯里化），返回一个函数}
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })

        }
    }
    render() {
        const { mouse } = this.state
        const { name, done } = this.props
        return (
            <div style={{ backgroundColor: mouse ? '#ddd' : 'white' }}>
                <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input type="checkbox" defaultChecked={done} />
                        <span>{name}</span>
                    </label>
                    <button className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
                </li>

            </div>
        )
    }
}