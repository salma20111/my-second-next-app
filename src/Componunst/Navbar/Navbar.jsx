'use client';

import Link from "next/link";
import Navlink from "./Navlink";
import classes from "./Navbar.module.css"
import { useState } from "react";

export default function Navbar() {

        const [nav , setNavList] =  useState(false);

        const hideNavList  = ()=> setNavList(false);

        const toggleMenu = () => setNavList(!nav);
    return (
    <nav className={classes["nav-bar"]}>
        <h1>
            <Link href="/">Mo Blog</Link>
        </h1>
        <ul className={`${classes["nav-list"]} ${nav ? classes['nav-list-visible'] : '' }`}>
            <Navlink href="/" text="Home" hideNavList={hideNavList}/>            
            <Navlink href="/blog" text="Blog" hideNavList={hideNavList}/> 
            <Navlink href="/about" text="About" hideNavList={hideNavList}/> 
            <Navlink href="/contacts" text="Contacts" hideNavList={hideNavList}/> 
        </ul>

        <button onClick={toggleMenu} className={classes["menu-button"]} aria-label="menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </nav>
)
   
}