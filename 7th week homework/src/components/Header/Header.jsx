import React, { useState } from 'react';
import toDoLogo from '../../assets/head.png';
import styles from './header.module.css';
import {CiCirclePlus} from 'react-icons/ci';

export function Header({onAddTask}) {

  const [title, setTitle]=useState('');

  function handleSubmit(event){
    event.preventDefault();

    onAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
    
  }

  return (
    <header className={styles.header}>
       <img className={styles.img} src={toDoLogo} height={240}/> 

       <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder='Add a new task' type='text' value={title} onChange={onChangeTitle}/>
        <button>
          Add
        <CiCirclePlus size={20}/>
        </button>
       </form>
    </header>
  )
}

export default Header