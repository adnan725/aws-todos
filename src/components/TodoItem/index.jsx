import styles from './TodoItem.module.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../store';

const TodoItem = (item) => {

    const { name, id } = item.item
    const dispatch = useDispatch()

    const [isChecked, setIsChecked] = useState(false)

    const markHandler = () => {
        setIsChecked(!isChecked)
    }

    const deleteItemHandler = (id) => {
        dispatch(deleteTodo(id))
    }

    return <>
      <motion.div className={styles.mainWrapper}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: item.id * 0.2 }}
      >
        <div className={styles.content}>
            <p onClick={markHandler} className={`${isChecked ? styles.line : ''}`}>{name}</p>
        </div>
        {/* <button className={`${styles.btn} ${styles.btnEdit}`}>Edit</button> */}
        <button onClick={() => deleteItemHandler(id)} className={`${styles.btn} ${styles.btnDelete}`}>Delete</button>
      </motion.div>
    </>
}

export default TodoItem;