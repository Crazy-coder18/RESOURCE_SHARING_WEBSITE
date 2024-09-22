import React, { useContext,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import ItemContext from '../ItemContext/Itemcontext';

export default function Myitemcard(props) {
    const context=useContext(ItemContext)
    const {items,getuseritems,deluseritems}=context;
    useEffect(() => {
      getuseritems();
    }, [items])
    console.log(items);
    
  const cardData = {
    id:props.id,
    title: props.name,
    description: props.desc,
    itemc: props.itemc,
    email: props.email,
    person: props.person,
    contact: props.contact,
    address: props.address,
    image: props.image
  };
  console.log(cardData.id);
  
  const handleclick=()=>{
    deluseritems(cardData.id);
  }

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
            className="btn btn-success"
          >
            INFO
          </Link>
          <button className='btn btn-danger' onClick={handleclick}>DELETE</button>
        </div>
      </div>
    </div>
  );
}
