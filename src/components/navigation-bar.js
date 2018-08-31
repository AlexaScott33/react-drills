import React from 'react';

import './navigation-bar.css';

export default function NavigationBar(props) {
    console.log(props);
    const displayLinks = props.links.map((link, index) => (
        <li key={index}>
            <a href={link.href} target="_blank">{link.text}</a>
        </li>
    ));
    return(
        <div className="navigation-bar">
            <h1>{props.title}</h1>
                <nav className="navigation-bar-nav">
                    <ul>
                        {displayLinks}
                    </ul>
                </nav>
        </div>
    );
}


