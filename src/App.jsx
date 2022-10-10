import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
	//初始化状态
	state = {todos: [
		{id: '001', name:'吃饭', done: true},
		{id: '002', name:'睡觉', done: true},
		{id: '003', name:'打代码', done: false},
		{id: '004', name:'逛街', done: true},
	]}

	//用于添加todo，接收todo对象为参数
	addTodo = (todoObj) =>{
		//获取原todos
		const {todos} = this.state
		//追加一个todo
		const newTodos = [todoObj, ...todos]
		this.setState({todos:newTodos})
	}

	//用于更新todo对象
	updateTodo = (id, done) => {
		//获取状态中的todos
		const {todos} = this.state
		const newTodos = todos.map((todoObj) => {
			if(todoObj.id === id) return {...todoObj, done}
			else return todoObj
		})
		this.setState({todos:newTodos})
	}

	//用于删除todo对象
	deleteTodo = (id) => {
		const {todos} = this.state
		//删除指定id的todo对象
		const newTodos = todos.filter((todoObj) => {
			return todoObj.id !== id
		})
		//更新状态
		this.setState({todos: newTodos})
	}

	//用于全选
	checkAllTodo = (done) => {
		//获取原来的todos
		const {todos} = this.state
		const newTodos = todos.map((todoObj) => {
			return {...todoObj, done}
		})
		this.setState({todos: newTodos})
	}

	//清除所有已经完成的
	clearAllDone = () => {
		//获取原来的todos
		const {todos} = this.state
		const newTodos = todos.filter((todoObj) => {
			return todoObj.done === false
		})
		this.setState({todos: newTodos})
	}

	render(){
		const {todos} = this.state
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo} />
					<List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
					<Footer todos={todos} checkAllTodo = {this.checkAllTodo} clearAllDone = {this.clearAllDone} />
				</div>
			</div>
		)
	}

}
