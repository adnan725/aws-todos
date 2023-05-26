import styles from './TodoForm.module.scss'
import { motion } from 'framer-motion';
import { useRef } from 'react';
import axios from 'axios';

const TodoForm = () => {

    const inputRef = useRef()

    const submitHandler = async (e) => {
        e.preventDefault()
        if (inputRef.current.value === '') alert('Please enter a task')

        const endpoint = 'https://oan6uah62f.execute-api.eu-central-1.amazonaws.com/v1/item'
        const data = inputRef.current.value;
        const headers = {
            'Content-Type': 'application/json',
          };

        const responce = await axios.post(endpoint, data, { headers })
        const result = await responce.json()
        console.log(result)

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