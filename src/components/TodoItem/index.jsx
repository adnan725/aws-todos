import styles from './TodoItem.module.scss'
import { useState } from 'react'

const TodoItem = (props) => {
    const item = props.list
    const { id, name } = item

    const [isChecked, setIsChecked] = useState(false)

    const markHandler = () => {
        setIsChecked(!isChecked)
    }

    return <>
      <div className={styles.mainWrapper}>
        <div className={styles.content}>
            <p onClick={markHandler} className={`${isChecked ? styles.line : ''}`} >{name}</p>
        </div>
        {/* <button className={`${styles.btn} ${styles.btnEdit}`}>Edit</button> */}
        <button className={`${styles.btn} ${styles.btnDelete}`}>Delete</button>
      </div>
    </>
}

export default TodoItem;