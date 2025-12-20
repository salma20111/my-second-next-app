import Link from "next/link";

export default function Navlink({href, text, hideNavList}) {
    return(
        <li onClick={hideNavList}>
            <Link href={href}>{text}</Link>
        </li>
    )
}