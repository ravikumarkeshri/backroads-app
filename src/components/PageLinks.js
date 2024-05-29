import React from 'react'
import { navLinks } from "../data"
const PageLinks = ({ parentClass, itemClass }) => {
    return (

        <ul className={parentClass} >
            {
                navLinks.map((link) => (
                    <li key={link.id}>
                        <a href={link.href} rel='noreferrer' className={itemClass}>{link.text}</a>
                    </li>
                ))
            }

        </ul>
    )
}

export default PageLinks