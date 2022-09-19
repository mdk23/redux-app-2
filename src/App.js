
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { useEffect } from "react";
import { calculateTotals,getCartItems } from "./reducers/cart";
import { useDispatch, useSelector } from "react-redux";



function App() {
  const {cartItems, isLoading}=useSelector(store=>store.cart);
  const {isOpen}=useSelector(store=>store.modal);
  
  const dispatch=useDispatch();

  //console.log(useSelector(store=>store));

  useEffect(()=>{ 
    dispatch(calculateTotals()); 
  },[cartItems]);

  useEffect(()=>{
    dispatch(getCartItems());
  },[]);

  if(isLoading){
    return(
      <div className="loading">
         <h1>Loading...</h1>
      </div>
    )
  }

  /* Mostra o Modal caso seja true :{ isOpen && <Modal/> }  */ 
  return (
    <main>
      { isOpen && <Modal/> } 
        <Navbar/>
        <CartContainer/>
    </main>
  );
}

export default App;
