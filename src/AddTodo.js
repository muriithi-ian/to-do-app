import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)

    }

    render() {
        return (
            <div className="">
                <form onSubmit={this.handleSubmit} >
                    <label>Add new Todo:</label>
                    <input type="text" onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTodo