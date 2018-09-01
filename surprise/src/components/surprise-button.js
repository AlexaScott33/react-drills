import React from 'react';

export default function SurpriseButton(props) {
    console.log(props);
    return <button onClick={props.onClick}>Surprise!</button>;
}

