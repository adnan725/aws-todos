import styles from './TodoForm.module.scss'
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../../store';

const TodoForm = () => {

    const inputRef = useRef()

    const dispatch = useDispatch();

    const submitHandler = async (e) => {

        e.preventDefault()

        const item = {
            name: inputRef.current.value,
            id: Date.now()
        }

        if (item.name === '') {
            alert('Please enter a task')
        } else  {
            dispatch(addTodo(item))

            inputRef.current.value = ''
        }
    }

    return <>
      <form onSubmit={submitHandler} className={styles.form}>
          <motion.div  className={styles.innerWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3}}
          >
            <input ref={inputRef} type="text" id='item' />
            <button className={styles.btn}>Add</button>
          </motion.div>
      </form>
    </>
}

export default TodoForm;