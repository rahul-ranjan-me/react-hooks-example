import React, { useContext } from 'react'
import ShopContext from './ShopContext'

const ShoppingItem = props => {
    const { items, cartItems, setCartItems, view } = useContext(ShopContext)
    const updateCartItems = (type, index) => {
        if (type === 'add') {
            setCartItems(cartItems => [...cartItems, items[index]])
        } else if(type === 'remove') {
            setCartItems(cartItems => cartItems.filter((item, indexed) => indexed !== index))
        }
    }

    const renderTable = (item, index) => {
        return (
            <tr key={`itemIndex-${index}`}>
                <td>{item.name}</td>
                <td>{item.isStocked ? '✔️' : 'X'}</td>
                <td>{item.range}</td>
                <td>
                    {view === 'list' ?
                        <button type="button" onClick={ () =>  updateCartItems('add', index) }>Add to cart</button>:
                        <button type="button" onClick={ () =>  updateCartItems('remove', index) }>Remove from cart</button>
                    }
                </td>
            </tr>
        )
    }

    return(
        <div className="shopping-item">
            <table cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Range</th>
                        <th>Stocked</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        view === 'list' ? 
                        items.map(renderTable) : 
                        cartItems.length < 1 ? 
                            <tr><td colSpan="4">No items found</td></tr> : 
                            cartItems.map(renderTable)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShoppingItem;