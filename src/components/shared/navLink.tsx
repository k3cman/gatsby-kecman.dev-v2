import React from "react"
import { Link } from "gatsby";


export const NavLink = (props:{ link:string, children: any}) => (
        <div className="nav-link">
            <Link to={props.link}>{props.children}</Link>
        </div>
)