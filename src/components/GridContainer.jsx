import React, { useState } from "react"

const GridContainer = (props) => {
    //declare new state variable
    const [color, setColor] = useState("white")

    //calculate total number of grid-item needed
    const count = props.row * props.column
    //storing grid-item
    let items = []
    //store css value for grid-template-columns
    let column = ""

    /**
     * update state variable "color"
     * @param {Event} e
     */
    const selectColor = (e) => {
        setColor(e.target.value)
    }

    /**
     * change color of the event target
     * @param {Event} e
     */
    const fillOne = (e) => {
        e.target.style.background = color
    }

    /**
     * fill all uncolored grid-item with color
     */
    const fillUncolored = () => {
        document.querySelectorAll(".grid-item").forEach(item => {
            if (item.style.background === "white") {
                item.style.background = color
            }
        })
    }

    /**
     * fill all grid-item with color
     */
    const fillAll = () => {
        if (color !== "white") {
            document.querySelectorAll(".grid-item").forEach(item => {
                item.style.background = color
            })
        }
    }

    /**
     * clear all grid-item
     */
    const clearAll = () => {
        document.querySelectorAll(".grid-item").forEach(item => {
            item.style.background = "white"
        })
    }

    /**
     * add event listener when mousedown on grid-item
     * @param {Event} e
     */
    const mouseDown = (e) => {
        fillOne(e)
        //change color of grid-item when mouseover
        document.querySelectorAll(".grid-item").forEach(item => {
            item.addEventListener("mouseover", fillOne)
        })
    }

    /**
     * remove event listener when mouseup anywhere in page
     */
    document.addEventListener("mouseup", () => {
        //remove mouseover event on grid-item
        document.querySelectorAll(".grid-item").forEach(item => {
            item.removeEventListener("mouseover", fillOne)
        });
    });

    //generate grid-item
    for (let i = 0; i < count; i++) {
        items.push(<div className="grid-item" onClick={fillOne} onMouseDown={mouseDown} style={{background: "white"}} key={i}></div>)
    }
    
    //generate css value for grid-template-columns based on column
    for (let i = 0; i < props.column; i++) {
        column += "auto "
    }

    return (
        <div>
            {/* select color */}
            <select id="color" onChange={selectColor} name="color">
                <option value="white">-Select Color-</option>
                <option value="lightcoral">LightCoral</option>
                <option value="lemonchiffon">LemonChiffon</option>
                <option value="lightblue">LightBlue</option>
                <option value="lightgreen">LightGreen</option>
            </select>
            <button onClick={fillUncolored}>Fill Uncolored</button>
            <button onClick={fillAll}>Fill All</button>
            <button onClick={clearAll}>Clear All</button>
            {/* display grid */}
            <div className="grid-container" style={{gridTemplateColumns: column}}>
                {items}
            </div>
        </div>
       
    )
}

export default GridContainer
