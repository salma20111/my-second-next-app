"use client";
import classes from "./page.module.css"

import { useState } from "react";

export default function BlogPage() {
    const [counter, setCounter] =  useState(0) ;
    const [showList , setShowList] =  useState(true)

    const increaseCounter = () => {
        
                 if (counter >= 10) return;
         setCounter(counter + 1)
    }

     const decreaseCounter = () => {
        if (counter <= 0)  return;

         setCounter(counter - 1)

    }

    const toggleMenu = () => setShowList(!showList)

    const resetCounter = () => {

         setCounter(0)

    }
    return (
        <section>
            <h2>blog page</h2>
            <div>
                <p>{counter}</p>
                <button onClick={increaseCounter}>+</button>
                <button onClick={decreaseCounter}>-</button>
                <button onClick={resetCounter}>Reset</button>
            </div>

            <br/>
             <hr/>
              <br/>

            <div>
                <button onClick={toggleMenu}>  {showList ? "hide" : "show"}   menu </button>
                 
                    <ul className={`${classes['list']} ${!showList ? classes['hide-list'] : ''}`}>
                      <li>item 2</li>
                      <li>item 3</li>
                     <li>item 4</li>
                </ul>
            </div>
           
        </section>
    )
}