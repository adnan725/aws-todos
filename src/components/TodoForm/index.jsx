import styles from './TodoForm.module.scss'
import { useRef } from 'react';

const TodoForm = () => {

    const inputRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        if (inputRef.current.value === '') return
        
        console.log(inputRef.current.value)

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