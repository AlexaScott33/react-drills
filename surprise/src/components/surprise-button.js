import React from 'react';

export default function SurpriseButton(props) {
    console.log(props.onClick);
    return <button onClick={props.onClick}>Surprise!</button>;
}

