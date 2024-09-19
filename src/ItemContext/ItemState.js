import React, { useState } from 'react';
import ItemContext from './Itemcontext';

export default function ItemState(props) {
    const s1 = {
        name: "hello",
        age: "this"
    };

    const [state, setState] = useState(s1);

    const update = () => {
        setState({
            name: "ash",
            age: "hello"
        });
    };

    return (
        <ItemContext.Provider value={{ state, update }}>
            {props.children}
        </ItemContext.Provider>
    );
}
