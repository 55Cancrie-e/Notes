import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItems';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

 function NoteList(props, onTogle){
    return (
        <ul style={styles.ul}>
           { props.todos.map((todo, index )=> {
               return <NoteItem todo={todo} key={todo.id} index={index} onChange={props.onTogle}/>
           })}

        </ul>
    )
}

NoteList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onTogle: PropTypes.func.isRequired
}




export default NoteList;