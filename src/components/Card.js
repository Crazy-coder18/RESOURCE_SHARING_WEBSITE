import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'; // Import the CSS file

export default function Card(props) {
  const cardData = {
    title: props.name,
    description: props.desc,
    itemc: props.itemc,
    email: props.email,
    person: props.person,
    contact: props.contact,
    address: props.address,
    image: props.image
  };

  return (
    <div className="card-container">
      <div className="card">
        <img 
          className="card-img-top card-img-custom" 
          src={props.image} 
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{cardData.title}</h5>
          <p className="card-text">{cardData.description}</p>
          <Link
            to="/cardinfo"
            state={{ cardData }}
            className="btn btn-primary"
          >
            CONTACT(SHARE)
          </Link>
        </div>
      </div>
    </div>
  );
}

