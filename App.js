import React, { useEffect } from 'react'; 
import NoteList from './Note/noteList';
import Context from './context';
import Loader from './Loader';
import Modal from './Modal/Modal';

let AddNotes = React.lazy(() => new Promise(resolve => {
    setTimeout(() => {
        resolve(import('./Note/AddNotes'))
    }, 2000)
}))

function App() {

    let [todos, setTodos] = React.useState([])
    let [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
          .then(response => response.json())
           .then(todos => {
               setTimeout(() => {
                setTodos(todos)
                setLoading(false)
               }, 2000)
           })
    }, [])
    function togleTodo(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        })
        )
    }

    function removeNote(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    function addNotes(title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false
        }]))
    }

    return (
        <Context.Provider value={{ removeNote }}>
    <div className="wrapper">
        <h1>Notes</h1>
        <Modal></Modal>
        <React.Suspense fallback={<p>Loading........</p>}>
            <AddNotes onCreate={addNotes}/>
        </React.Suspense>

        {loading && <Loader/>}
        {todos.length ? <NoteList todos={todos} onTogle={togleTodo}/> : loading ? null : <p>No notes!</p>}
        
    </div>
    </Context.Provider>
    )
    
    
}

export default App;