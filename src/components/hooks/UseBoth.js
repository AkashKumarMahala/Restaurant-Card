import React, { useState, useEffect } from 'react'
import './style.css'

const getLocalData = () => {
    const lists = localStorage.getItem("my-list")
    
    if(lists){
        return JSON.parse(lists);
    } else {
        return [];
    }
}

const UseBoth = () => {
    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState(getLocalData())
    const [isEditItem,setIsEditItem] = useState("")
    const [isToggle,setIsToggle] = useState(false)


    const addItems = () => {
        if( !inputData ){
            alert("Add a valid item")
        } else {
            const newInputData = {
                id : new Date().getTime().toString(),
                name : inputData
            };
            setItems([...items, newInputData])
            setInputData("")
            
        }
    }
        const filterItems = (name) => {
            const updatedList = items.filter((ele) => {
                return ele.name !== name
            })
            setItems(updatedList)
        }

        const editItems = (id) => {
          const editedItem =  items.find((element) => {
                return element.id === id
            })
            setInputData(editedItem.name);
            setIsEditItem(id);
            setIsToggle(true)
        }


        const removeAll = () => {
            setItems([])
        }

        useEffect(() => {
            localStorage.setItem("my-list", JSON.stringify(items))
        },[items])

    return (
        <>
          <div className="cntr">
              <div>
                 <i class="fas fa-clipboard-list fa-3x list"></i>
                  <div>
                      <input type="text" placeholder="Add to the list"
                  value={ inputData }
                  onChange={(e) => setInputData(e.target.value) }/>
                  
                  {
                      isToggle ? (<i className="fa fa-plus" onClick={ addItems }></i>)
                       : (<i className="fas fa-edit add" onClick={ addItems }></i>)
                  }
                  </div>
              {
                  items.map((el) => {
                      return(
                          <div className="textbox" key={el.id}>
                           <h3>{el.name}</h3>
                           <div className="cornor">
                            <i className="fas fa-edit edit" onClick={() => editItems(el.id)}></i>
                            <i className="fas fa-trash-alt trash" onClick={() => filterItems(el.name)}></i>    
                           </div>
                        </div>
                      )
                    })
                }
                <button className="remove" onClick={ removeAll }>Remove all</button>
              </div>
          </div>  
        </>
    )
}

export default UseBoth
