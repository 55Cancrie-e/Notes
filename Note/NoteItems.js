import React from 'react';
import PropTypes, { func } from 'prop-types';
import Context from "../context";
import { useContext } from 'react';



const styles = {
    li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem', 
    },
    input: {
     marginRight: '1rem'
    }
}
 function NoteItem({ todo, index, onChange }) {
     const {removeNote} = useContext(Context)
     let classes = []
     if(todo.completed){
         classes.push('done')
     }
    return <li style={styles.li}>
        <span className={classes.join(' ')}>
            <input type="checkbox" checked={todo.completed} style={styles.input} onChange={() => onChange(todo.id)}/>
            <strong>{index + 1}</strong>
            &nbsp;
        {todo.title}
        </span>
        
        <button className='rm' onClick={removeNote.bind(null, todo.id)}>&times;</button>
        </li>
    
}

NoteItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: func.isRequired
}

export default NoteItem;
// () => removeTodo(todo.id)
// removeTodo.bind(null, todo.id)