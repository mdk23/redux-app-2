import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../reducers/cart'
import { closeModal } from '../reducers/modal'

function Modal() {
    const dispatch=useDispatch();
  return (
    <div className='modal-container'>
        <div className='modal'>
            <h4>Remove all items from your Shopping Cart? </h4>
            <div className='btn-container'>
                <button type='button' className='btn confirm-btn' onClick={()=>{
                    dispatch(clearCart());
                    dispatch(closeModal());
                }}>Confirm</button>
                
                <button type='button' className='btn clear-btn' onClick={()=>dispatch(closeModal())}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Modal
