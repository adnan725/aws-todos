import styles from './TodoList.module.scss'
import TodoForm from "../TodoForm"
import TodoItem from "../TodoItem"	
import Sidebar from '../Sidebar'
import { useState } from 'react'

const TodoList = () => {

    const MOCK_LIST = [
        {
            id: 1,
            name: "Buy milk",
        }, 
        {
            id: 2,
            name: "Buy eggs",
        }, 
        {
            id: 3,
            name: "Cook Food",
        }
    ]

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
            MOCK_LIST.length === 0 ? <p className={styles.addToList}>Add to you list</p> : MOCK_LIST.map((item, index) => <TodoItem key={index} list= {item} />)
        }
      </div>
    </>
}

export default TodoList