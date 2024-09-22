import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import ItemContext from '../ItemContext/Itemcontext'
import Myitemcard from './Myitemcard'

export default function Myitems(props) {
    const context=useContext(ItemContext);
    const {items,getuseritems}=context;
    useEffect(() => {
      getuseritems();
    }, [])
    console.log(items);
    
    console.log(items);
    
  return (
    <>
    <Navbar/>
    <div className="container my-3 ">
      <h1 style={{textAlign:"center"}}>WELCOME TO EDUCATION</h1>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
      
    {(items.length===0) && <h6>NO ITEMS TO DISPLAY </h6>}
      {items.map((element, index) => (
        <div className="col-md-4" key={index}>
          <Myitemcard
            id={element._id}
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
