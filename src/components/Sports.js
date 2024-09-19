import React, { useContext } from 'react'
import Card from './Card'
import { useState } from 'react'
import Navbar from './Navbar'

export default function Sports(props) {

  // const context=useContext(Itemstate);
  // const {name}=context
  return (
    <>
    <Navbar/>
    <div className="container my-3 ">
<h1 style={{textAlign:"center"}}>WELCOME TO SPORTS {props.name}</h1>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
      {props.sports.map((element, index) => (
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
