import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWindowClose} from '@fortawesome/free-regular-svg-icons'
import styles from './Keyboard.module.css'
const Keyboard = () => {

    const handleKeyboard = (letter:string) => {
        window.dispatchEvent(new KeyboardEvent('keydown', {
          'key': letter
      }));
    
      } 


  return (
    <div className={styles.container}>
      <div className={styles.keyboard}>
        <div className={styles.row}>
            <button onClick={()=>{handleKeyboard("q")}} className={styles.btn}>q</button>
            <button  onClick={()=>{handleKeyboard("w")}} className={styles.btn}>w</button>
            <button onClick={()=>{handleKeyboard("e")}}  className={styles.btn}>e</button>
            <button onClick={()=>{handleKeyboard("r")}}  className={styles.btn}>r</button>
            <button  onClick={()=>{handleKeyboard("t")}} className={styles.btn}>t</button>
            <button  onClick={()=>{handleKeyboard("y")}} className={styles.btn}>y</button>
            <button  onClick={()=>{handleKeyboard("u")}} className={styles.btn}>u</button>
            <button  onClick={()=>{handleKeyboard("i")}} className={styles.btn}>i</button>
            <button  onClick={()=>{handleKeyboard("o")}} className={styles.btn}>o</button>
            <button  onClick={()=>{handleKeyboard("p")}} className={styles.btn}>p</button>

        </div>
        <div className={styles.row}>
          <button onClick={()=>{handleKeyboard("a")}}  className={styles.btn}>a</button>
          <button  onClick={()=>{handleKeyboard("s")}} className={styles.btn}>s</button>
          <button  onClick={()=>{handleKeyboard("d")}} className={styles.btn}>d</button>
          <button  onClick={()=>{handleKeyboard("f")}} className={styles.btn}>f</button>
          <button  onClick={()=>{handleKeyboard("g")}} className={styles.btn}>g</button>
          <button  onClick={()=>{handleKeyboard("h")}} className={styles.btn}>h</button>
          <button  onClick={()=>{handleKeyboard("j")}} className={styles.btn}>j</button>
          <button  onClick={()=>{handleKeyboard("k")}} className={styles.btn}>k</button>
          <button onClick={()=>{handleKeyboard("l")}} className={styles.btn}>l</button>
        </div>
        <div className={styles.row}>
          <button onClick={()=>{handleKeyboard("Enter")}}  className={styles.enter}>Enter</button>
          <button  onClick={()=>{handleKeyboard("z")}} className={styles.btn}>z</button>
          <button  onClick={()=>{handleKeyboard("x")}} className={styles.btn}>x</button>
          <button  onClick={()=>{handleKeyboard("c")}} className={styles.btn}>c</button>
          <button  onClick={()=>{handleKeyboard("v")}} className={styles.btn}>v</button>
          <button  onClick={()=>{handleKeyboard("b")}} className={styles.btn}>b</button>
          <button  onClick={()=>{handleKeyboard("n")}} className={styles.btn}>n</button>
          <button  onClick={()=>{handleKeyboard("m")}} className={styles.btn}>m</button>
          <button  onClick={()=>{handleKeyboard("Backspace")}} className={styles.delete}> <FontAwesomeIcon icon={faWindowClose}></FontAwesomeIcon> </button>
        </div>
      </div>
    </div>
  )
}

export default Keyboard