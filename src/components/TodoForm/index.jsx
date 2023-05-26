import styles from './TodoForm.module.scss'
import { motion } from 'framer-motion';
import { useRef } from 'react';
import axios from 'axios';

const TodoForm = () => {

    const inputRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        if (inputRef.current.value === '') alert('Please enter a task')

        axios.post('https://oan6uah62f.execute-api.eu-central-1.amazonaws.com/v1/item', {
            name: inputRef.current.value
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })

        inputRef.current.value = ''
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