import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'

export default class Item extends Component {
    state = { mouse: false } //标识鼠标移入、移出，给其添加样式

    //鼠标移入、移出的回调,{高阶函数（柯里化），返回一个函数}
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })

        }
    }
    //勾选、取消勾选某一个todo的回调
    handleCheck = (id) => {
        return (e) => {
            // console.log(e.target.checked);
            this.props.updateTodo(id, e.target.checked)
        }
    }
    render() {
        const { mouse } = this.state
        const { id, name, done } = this.props
        return (
            <div style={{ backgroundColor: mouse ? '#ddd' : 'white' }}>
                <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)} />
                        <span>{name}</span>
                    </label>
                    <button className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
                </li>

            </div>
        )
    }
}