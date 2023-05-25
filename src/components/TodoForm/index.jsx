import styles from './TodoForm.module.scss'
import { useRef } from 'react';
import axios from 'axios';

const TodoForm = () => {

    const inputRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        if (inputRef.current.value === '') alert('Please enter a task')

        axios.post('https://emtvxslrb7.execute-api.eu-central-1.amazonaws.com/v1', {
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
      <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.innerWrapper}>
            <input ref={inputRef} type="text" id='item' />
            <button className={styles.btn}>Add</button>
          </div>
      </form>
    </>
}

export default TodoForm;