const AddItems = ({submitHandler, updateNameHandler, updateQuantityHandler, addHandler}) => {
    return (
        <form onSubmit={submitHandler}>
        <label htmlFor="nameInput">Item Name</label>
        <input type="text" id="nameInput" placeholder="Type items here..." onChange={updateNameHandler}/>
        <br></br>
        <label htmlFor="quantityInput">Item Quantity</label>
        <input type="number" id="quantityInput" placeholder="Type quantity here..." min="0" onChange={updateQuantityHandler}/>
        <br></br>
        <button type="submit" onClick={addHandler}>Add Item!</button>
        </form>
    )
};
export default AddItems;