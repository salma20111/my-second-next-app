import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./navLink.module.css"

export default function Navlink({href, text, hideNavList}) {
    const Pathname= usePathname();
    console.log(Pathname , href);
    
    const isActive = href==="/"?  Pathname===href:Pathname.startsWith(href) ;
    console.log(isActive);
    
    return(
        <li onClick={hideNavList} className={`${isActive ? classes["active"] : ""}`}>
            <Link href={href}>{text}</Link>
        </li>
    )
}