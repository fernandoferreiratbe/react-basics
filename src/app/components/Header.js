import React from "react"

// An example of Stateless Components
export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="/">{props.homeLink}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}