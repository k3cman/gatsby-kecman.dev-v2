import React from "react"
import { PageProps, Link } from "gatsby";


export const NavLink: React.FC<PageProps<{link: string}>> = ({link, children}) => (
        <div className="nav-link">
            <Link to={link}>{children}</Link>
        </div>
)