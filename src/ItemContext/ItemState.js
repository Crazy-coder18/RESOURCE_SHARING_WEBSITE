import React, { useState } from 'react';
import ItemContext from './Itemcontext';

export default function ItemState(props) {
    const allitems=[];
    const host="https://localhost:5000"
    const [items, setitems] = useState(allitems);
    const getuseritems = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/item/fetchuseritems`, {
                method: "GET",
                headers: {
                    'Content-type': "application/json",
                    "auth-token":localStorage.getItem("token")
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
            setitems(json);
        } catch (error) {
            console.error('Error fetching user items:', error);
        }
    };
    const deluseritems = async (id) => {
        const response = await fetch(`http://localhost:5000/api/item/deleteitem/${id}`, { 
            method: "DELETE",
            headers: {
                'Content-type': "application/json",
                "auth-token":localStorage.getItem("token")
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
