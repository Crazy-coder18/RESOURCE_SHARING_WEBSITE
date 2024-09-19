import React, { useState } from 'react';
import ItemContext from './Itemcontext';

export default function ItemState(props) {
    const allitems=[];
    const host="https://localhost:5000"
    const [items, setitems] = useState(allitems);
    const getitems=async ()=>{
        const response=await fetch(`http://localhost:5000/api/item/fetchitems`,{
            method:"GET",
            headers:{
                'Content-type':"application/json",
            }
        })
        const json=await response.json();
        setitems(json);
    }
    return (
        <ItemContext.Provider value={{ items,getitems}}>
            {props.children}
        </ItemContext.Provider>
    );
}
