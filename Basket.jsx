import { useState } from "react";
import AddItems from "./AddItems";
import BasketItems from "./BasketItems";

const Basket = () => {

    const [contents, setContents] = useState([]);
    
    const [itemName, setItemName] = useState('');
    
    const [itemQuantity, setItemQuantity] = useState(0);

    const submitHandler = (event) => {
        event.preventDefault();
    }

    const handleUpdate = ({target}) => {
        setItemName(target.value);
    };

    const  handleQuantityUpdate = ({target}) => {
        setItemQuantity(target.value);
    }

    const handleAdd = () => {
        setContents(contents => [...contents, {name: itemName, quantity: itemQuantity}])
    }

    const handleDelete = (id) => {
        const tempContents = [...contents];
        console.log(id);
        tempContents.splice(id, 1);
        setContents(tempContents)
    }

    return (
        <>
        <h2>Add items basket:</h2>
        <AddItems submitHandler={submitHandler} addHandler={handleAdd} 
            updateNameHandler={handleUpdate} updateQuantityHandler={handleQuantityUpdate}/>
        <hr></hr>
        <h3>Your basket: </h3>
        <BasketItems allItems={contents} deleteHandler={handleDelete}/>
        </>
    )

};

export default Basket;