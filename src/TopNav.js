import React, { useContext } from 'react'
import ShopContext from './ShopContext'

const TopNav = (props) => {
    const { view, setView, cartItems } = useContext(ShopContext)
    const updateView = (type) => {
        setView(type)
    }

    return (
        <ul className="topNav">
            <li onClick={ () =>  updateView('list') } className={ view === 'list'? 'selected': '' }>List</li>
            <li onClick={ () =>  updateView('cart') } className={ view === 'cart'? 'selected': '' }>Cart ({ cartItems.length })</li>
        </ul>
    )
}

export default TopNav;