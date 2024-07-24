import React from 'react'
import styles from "../page.module.css"

const Todo = ({ todo, index, deleteTodo }) => {
    return (
        <>
        <div className={styles.list + " " + styles['product-item']}>
                <h3 className={styles['product-title']}>{todo.nombre}</h3>
                <p className={styles['product-attribute']}>Marca: {todo.marca}</p>
                <p className={styles['product-attribute']}>Cantidad: {todo.cantidad}</p>
                <p className={styles['product-attribute']}>Precio: {todo.precio}</p>
                <button className={styles.btn_delete} onClick={() => deleteTodo(index)}>X</button>
            </div>

        </>
    )
}

export default Todo
