import React, { useState } from 'react';
import ItemContext from './Itemcontext';

export default function ItemState(props) {
    const allitems=[];
    const host="https://localhost:5000"
    const [items, setitems] = useState(allitems);
    const getuseritems=async ()=>{
        const response=await fetch(`http://localhost:5000/api/item/fetchuseritems`,{
            method:"GET",
            headers:{
                'Content-type':"application/json",
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZlOTdiOTk4ZmNhMGQzY2MwMmI5ZjAwIn0sImlhdCI6MTcyNjU3NzU2MX0.KTEpqBMiZGyZRtH_mSYUxrtV04mB0xLw_vsWSyOg1Rw"
            }
        })
        const json=await response.json();
        setitems(json);
    };
    const deluseritems = async (id) => {
        const response = await fetch(`http://localhost:5000/api/item/deleteitem/${id}`, { 
            method: "DELETE",
            headers: {
                'Content-type': "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZlOTdiOTk4ZmNhMGQzY2MwMmI5ZjAwIn0sImlhdCI6MTcyNjU3NzU2MX0.KTEpqBMiZGyZRtH_mSYUxrtV04mB0xLw_vsWSyOg1Rw"
            }
        });
        const json = await response.json();
    if (json.success) { 
        setitems(prevItems => prevItems.filter(item => item.id !== id)); 
    }
    };
    
    const getitems= async ()=>{
        const response=await fetch(`http://localhost:5000/api/item/fetchitems`,{
            method:"GET",
            headers:{
                'Content-type':"application/json",
            }
        })
    }
    return (
        <ItemContext.Provider value={{ items,getitems,getuseritems,deluseritems}}>
            {props.children}
        </ItemContext.Provider>
    );
}
