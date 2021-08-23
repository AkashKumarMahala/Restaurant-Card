import React, { useState } from 'react'
import './style.css'

const TodoList = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([])
    const [updatedItem, setUpdatedItem] = useState("")
    const [isToggle, setIsToggle] = useState(false)

    const addItem = () => {
        if(!inputData){
            alert("Cannot be left empty")
        } else if(inputData && isToggle){
           setItems(
               items.map((el) => {
                   if(el.id === updatedItem){
                       return { ...el, name: inputData}
                   }  else {
                       return el;
                   }
               })
               )
               setInputData("")
               setIsToggle(false)
        } 
        else {
            const inputObject = {
                id: new Date().getTime().toString(),
                name: inputData
            }
            setItems([...items,inputObject]);
            setInputData("")
            setIsToggle(false)
        }
    }

    const editItem = (ele_id) => {
        const editedItem = items.find((el) => {
            return el.id === ele_id
        })
        setInputData(editedItem.name)
        setIsToggle(true)
        setUpdatedItem(ele_id)
    }


    const filterItem = (element_id) => {
        const updatedList = items.filter((ele) => {
            return element_id !== ele.id
        })
        setItems(updatedList)
    }

    const removeAll = () => {
        setItems([])
    }

    return (
        <>
          <div className="container">
              <div>
                  <h1>Todo List</h1>
                  
                      <input type="text" placeholder="Add to the list"
                      value={ inputData }
                      onChange={(e) => setInputData(e.target.value) }/>
                      {
                          isToggle ? (<button className="addbtn" onClick={ addItem }>Edit</button>) : 
                          (<button className="addbtn" onClick={ addItem }>Add</button>)
                      }
                      
                  

                      {
                        items.map((curEle) => {
                            return(
                            <div className="list" key={curEle.id}>
                            <h4>{ curEle.name }</h4>
                            <div className="right-list">
                                <button className="edt" onClick={() => editItem(curEle.id)}>Edit</button>
                                <button className="dlt" onClick={() => filterItem(curEle.id)}>delete</button>
                            </div>
                        </div>
                              )
                          })
                      }

                  <div>
                      <button className="rmv" onClick={removeAll}>Remove All</button>
                  </div>
              </div>
          </div>  
        </>
    )
}

export default TodoList
