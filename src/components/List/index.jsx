import React, { Component } from 'react'
import ProTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
    static proTypes = {
        todos: ProTypes.array.isRequired,
        updateTodo: ProTypes.func.isRequired,
        deleteTodo: ProTypes.func.isRequired
    }
    render() {
        const { todos, updateTodo, deleteTodo } = this.props

        return (

            <ul className="todo-main">
                {
                    todos.map(todo => {
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                    })
                }

            </ul>

        )
    }
}