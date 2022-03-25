import React, { useState } from "react";
import ToDoLists from "./ToDoLists";
import "./index.css";


const App = () => {

    const [inputList, setInputList] = useState("")
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        // setItems((oldItems) => {
        //     return [...oldItems, inputList];
        // });
        setItems([...items, inputList])
        setInputList("")
    };

    const deleteItems = (id) => {
        console.log("delete");

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>Todo List</h1>
                    <br />
                    <input type="text" placeholder="Add a item" value={inputList} onChange={itemEvent} />
                    <button className="btn" onClick={listOfItems}> + </button>


                    <ol>
                        {items.map((itemVal, index) => {
                            return <ToDoLists key={index} id={index} text={itemVal} onSelect={deleteItems} />
                        })}

                    </ol>
                </div>
            </div>
        </>
    );
};

export default App;
