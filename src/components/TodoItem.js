import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    render() {
        return (
            <div style={itemStyle}>
               <h3>{ this.props.todo.title }</h3> 
            </div>
        )
    }
}
//Proptypes - this should be the name of the class ie TodoItem
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const itemStyle = {
    backgroundColor: '#f4f4f4'
}



export default TodoItem
