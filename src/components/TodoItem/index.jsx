import styles from './TodoItem.module.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'

const TodoItem = (props) => {
    const item = props.list
    const { id, name } = item

    const [isChecked, setIsChecked] = useState(false)

    const markHandler = () => {
        setIsChecked(!isChecked)
    }

    const deleteItemHandler = (id) => {
        console.log(id)
    }

    return <>
      <motion.div className={styles.mainWrapper}
        key={item.id}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: id * 0.2 }}
      >
        <div className={styles.content}>
            <p onClick={markHandler} className={`${isChecked ? styles.line : ''}`} >{name}</p>
        </div>
        {/* <button className={`${styles.btn} ${styles.btnEdit}`}>Edit</button> */}
        <button onClick={() => deleteItemHandler(id)} className={`${styles.btn} ${styles.btnDelete}`}>Delete</button>
      </motion.div>
    </>
}

export default TodoItem;