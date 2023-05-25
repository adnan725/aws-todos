import styles from './TodoList.module.scss'
import TodoForm from "../TodoForm"
import TodoItem from "../TodoItem"	

const TodoList = () => {

    const MOCK_LIST = [
        {
            name: "Buy milk",
        }, 
        {
            name: "Buy eggs",
        }, 
        {
            name: "Cook Food",
        }
    ]

    return <>
      <div className={styles.listWrapper}>
        <h2>My Todos</h2>
        <TodoForm />
        {
            MOCK_LIST.length === 0 ? <p className={styles.addToList}>Add to you list</p> : MOCK_LIST.map((item, index) => <TodoItem key={index} list= {item} />)
        }
      </div>
    </>
}

export default TodoList