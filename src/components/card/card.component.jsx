import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt="user-profile" src={props.user.picture.large} />
        <h2>{props.user.name.first}</h2>
        <p>{props.user.email}</p>
    </div>
);
