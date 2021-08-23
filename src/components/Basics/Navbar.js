import React from 'react'

const Navbar = ({menuFilter, menuList}) => {
    return (
        <>
       <nav className="navbar">
        <div className="btn-group">
            {
                menuList.map((el) => {
                    return(
                        <button className="btn-group__item" onClick={() => menuFilter(el)}>{el}</button>
                    )
                })
            }
        </div>
      </nav> 
        </>
    )
}

export default Navbar
