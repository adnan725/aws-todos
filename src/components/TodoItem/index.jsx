import styles from './TodoItem.module.scss'

const TodoItem = (props) => {
    const item = props.list
    const { id, name } = item
    return <>
      <div className={styles.mainWrapper}>
        <div className={styles.content}>
            <p>{name}</p>
        </div>
        {/* <button className={`${styles.btn} ${styles.btnEdit}`}>Edit</button> */}
        <button className={`${styles.btn} ${styles.btnDelete}`}>Delete</button>
      </div>
    </>
}

export default TodoItem;