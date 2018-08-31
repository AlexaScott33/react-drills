import React from 'react';

import './contact.css';

// The Contact component goes here.  It should be the default export.
export default function Contact(props) {
    console.log(props);
    return(
        <section id={`contact-${props.index}`} className="contact">
            <img className="contact-photo" src={props.photo} alt={`${props.name}'s avatar`}></img>
            <h2 className="contact-name">{props.name}</h2>
            <address className="contact-address">{props.address}</address>
        </section>
    );
}