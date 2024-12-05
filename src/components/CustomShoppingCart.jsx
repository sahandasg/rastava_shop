import React, {useState} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import {useCartSelector} from "../store/hooks.ts"
import {useCartDispatch} from "../store/hooks.ts";
import {removeFromCart} from "../store/cart-slice.ts";


function CustomShoppingCart(props) {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show)
    }

    const cartQuantity = useCartSelector((state) =>
        state.cart.items.reduce((value, item) =>
                value + item.quantity
            , 0)
    )

    const cartItems = useCartSelector((state) => state.cart.items);
    const totalPrice = cartItems.reduce((value, item) => value + item.price * item.quantity, 0);
    const dispatch = useCartDispatch()

    const handleRemoveCart = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <>
            <div className={"text-content"} onClick={handleClick}>
                {
                    cartQuantity > 0 &&
                    <p className={"flex cursor-pointer items-center justify-center absolute w-4 h-4 p-2 bg-main rounded-full"}>{cartQuantity}</p>
                }
                <ShoppingCartIcon className={"cursor-pointer"} fontSize="large"/>
            </div>
            {
                show && cartQuantity > 0 && <div className={"absolute top-[80px] right-4 p-2 max-w-80 bg-main rounded"}>
                         {
                             cartItems.map((item) => (
                                 <div className={"flex gap-4 text-content justify-between border-[1px] rounded p-2 mt-2"}
                                      key={item.id}>
                                     <img src={item.image} width={50}/>
                                     <div className={"flex flex-col gap-2 overflow-hidden"}>
                                         <p className={"whitespace-nowrap overflow-hidden overflow-ellipsis"}>
                                             {item.title}
                                         </p>
                                         <p>{item.price} $</p>
                                     </div>
                                     <div className={"flex flex-col items-center gap-2"}>
                                         <DeleteIcon className={"cursor-pointer"} onClick={() => handleRemoveCart(item.id)}/>
                                         <p>{item.quantity}</p>
                                     </div>
                                 </div>
                             ))
                         }
                         <p className={"flex justify-center bg-secondary text-content p-2 rounded mt-2"}>{totalPrice} $</p>
                         <button className={"bg-third text-content p-2 rounded w-full mt-2"}
                                 onClick={() => setShow(false)}>Close
                         </button>
                     </div>
            }
        </>
    );
}

export default CustomShoppingCart;