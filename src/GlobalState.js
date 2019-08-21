import React, {useState} from 'react'
import ShopContext from './ShopContext'

const GlobalState = (props) => {
    const items = [
        {name: 'Clothes', isStocked:true, range:'1500', id:'clothes'}
    ,   {name: 'Grocceries', isStocked:false, range:'20',id:'grocceries'}
    ,   {name: 'Electronics', isStocked:true, range:'500',id:'electronics'}
    ,   {name: 'Gifts', isStocked:true, range:'200',id:'gifts'}
    ]
    
    const [cartItems, setCartItems] = useState([])
    const [view, setView] = useState('list')
    return (
        <ShopContext.Provider value={{
            view: view
        ,   items:  items
        ,   cartItems: cartItems
        ,   setCartItems: setCartItems
        ,   setView: setView
        }}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default GlobalState;