import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import Card from './Card'
import Navbar from './Navbar'
import ItemContext from '../ItemContext/Itemcontext'

export default function Myitems(props) {
    const context=useContext(ItemContext);
    const {items,getitems}=context;
    useEffect(() => {
      getitems();
    }, [])
    
    console.log(items);
    
  return (
    <>
    <Navbar/>
    <div className="container my-3 ">
      <h1 style={{textAlign:"center"}}>WELCOME TO EDUCATION</h1>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
      {items.map((element, index) => (
        <div className="col-md-4" key={index}>
          <Card 
            name={element.name} 
            itemc={element.itemcategory} 
            image={element.imageitem} 
            desc={element.description}  
            email={element.email} 
            person={element.personname} 
            contact={element.contact} 
            address={element.address}
          />
        </div>
      ))}
    </div>
    </div>
    </>
  )
}
