import styles from './TodoList.module.scss'
import TodoForm from "../TodoForm"
import TodoItem from "../TodoItem"	
import Sidebar from '../Sidebar'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

const TodoList = () => {

    const todos = useSelector(state => state.todos);
    const [list, setList] = useState([])

    useEffect(() => {
        setList(todos)
    }, [todos])

    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return <>
      <div className={styles.listWrapper}>
      {isOpen && <Sidebar />}
        <h2>My Todos</h2>
        <div className={styles.toggleSide} onClick={toggleSidebar}>
            {`${isOpen? 'Close Menu →' : 'Open Menu →'}`}
        </div>
        <TodoForm />
        {
            list === null ? <p className={styles.addToList}>Add to you list</p> 
            :
            list.map((item) => <TodoItem key={item.id} item= {item} />)
        }
      </div>
    </>
}

export default TodoList