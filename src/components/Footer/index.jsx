import React, { Component } from 'react';
import './index.css'

class Footer extends Component {

	//全选checkbox的回调
	handleCheckAll = (event) =>{
		this.props.checkAllTodo(event.target.checked)
	}

	//清除所有已完成的回调
	handleClearAllDone = () =>{
		this.props.clearAllDone()
	}

	render() {
		const {todos} = this.props
		//计算已完成的数量
		const doneCount = todos.reduce((pre, current)=> {return pre+(current.done ? 1:0)}, 0)
		//计算总数
		const total = todos.length
		return (
				<div className="todo-footer">
					<label>
					<input type="checkbox" checked={doneCount === total && total !== 0 ? true:false} onChange={this.handleCheckAll} />
					</label>
					<span>
					<span>已完成{doneCount}</span> / 全部{total}
					</span>
					<button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
				</div>
		);
	}
}

export default Footer;
