"use client";
import Button from "@/Componunst/UiElements/Button";
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

               <section className={classes['actions']}>
                 <Button onClick={increaseCounter} disabled={counter >= 10}>+</Button>
                <Button onClick={decreaseCounter} outline disabled={counter <= 0}>-</Button>
                <Button onClick={resetCounter} danger disabled={counter === 0}>Reset</Button>
               </section>
            </div>

            <br/>
             <hr/>
              <br/>

            <div>
                <Button onClick={toggleMenu} danger={showList}>  {showList ? "hide" : "show"}   menu </Button>
                 
                    <ul className={`${classes['list']} ${!showList ? classes['hide-list'] : ''}`}>
                      <li>item 2</li>
                      <li>item 3</li>
                     <li>item 4</li>
                </ul>
            </div>
           
        </section>
    )
}