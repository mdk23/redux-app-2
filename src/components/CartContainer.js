import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { clearCart } from '../reducers/cart';
import { openModal } from '../reducers/modal';
import CartItem from './CartItem'


function CartContainer() {

    const dispatch=useDispatch();

    const {cartItems,amount,total} =useSelector(store=>store.cart);
    if(amount<1){
        return(
            <section className='cart'>
                <header>
                    <h2>Your Bag</h2>
                    <h4 className='empty-cart'>Is currently Empty </h4>
                </header>
            </section>
        )
    }

    return (
        <section className='cart'>
                <header>
                    <h2>Your Bag</h2>
                </header>
                <div>
                {
                    cartItems.map((item)=>{
                         return <CartItem key={item.id} {...item}/>;
                    })
                }
            </div>
            <footer> 
                <hr/>
                <div className='cart-total'>
                    <h4>Total <span>${total.toFixed(2)}</span> </h4>
                </div>
                <button className='btn clear-btn' onClick={()=>dispatch(openModal())}>Clear Cart</button>
            </footer>
        </section>
  )
}

export default CartContainer