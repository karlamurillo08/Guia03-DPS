"use client"
import React, { useState } from 'react'
import Todo from './Todo'
import styles from "../page.module.css"

const Form = () => {
    const [todo, setTodo] = useState({ nombre: '', marca: '', cantidad: '', precio: '' })
    const [todos, setTodos] = useState([])

    const handleChange = e => setTodo({ ...todo, [e.target.name]: e.target.value })
    const handleClick = e => {
        if (Object.values(todo).some(value => value.trim() === '')) {
            alert('Todos los campos deben estar llenos')
            return
        }
        setTodos([...todos, todo])
        setTodo({ nombre: '', marca: '', cantidad: '', precio: '' }) // Clear form fields
    }

    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }

    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Nombre del Producto</label><br/>
                <input className={styles.form_input} type="text" name='nombre' value={todo.nombre} onChange={handleChange} /><br/>
                <label>Marca</label><br/>
                <input className={styles.form_input} type="text" name='marca' value={todo.marca} onChange={handleChange} /><br/>
                <label>Cantidad</label><br/>
                <input className={styles.form_input} type="text" name='cantidad' value={todo.cantidad} onChange={handleChange} /><br/>
                <label>Precio</label><br/>
                <input className={styles.form_input} type="text" name='precio' value={todo.precio} onChange={handleChange} /><br/>
                <button className={styles.form_button} onClick={handleClick}>Agregar</button>
            </form>
            {
                todos.map((value, index) => (
                    <Todo key={index} index={index} todo={value} deleteTodo={deleteTodo} />
                ))
            }
        </>
    )
}

export default Form
