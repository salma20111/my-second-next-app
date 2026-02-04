import Link from "next/link"
import  classes from "./Button.module.css"



export default function Button({children , onClick , danger , outline , href, className , disabled}) {
const classN =  `${className} ${classes["buttton"]} ${danger ? classes["danger"] : " "}  ${outline ? classes['outline'] : ' '}`
  return  href ? (
    <Link className={classN} href={href}>{children}</Link>
  )
  
  :
  (<button className={classN} onClick={onClick} disabled={disabled}>
            {children}
        </button>)
} 

