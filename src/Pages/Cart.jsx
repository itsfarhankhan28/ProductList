import { useSelector,useDispatch} from "react-redux"
import { totalprice,removecart } from "../Utils/Reducers/Cart"
import { useEffect } from "react"

const Cart = () => {

    const cartdata = useSelector((store)=>store.cart.cart)
    console.log(cartdata)

    const totalPrice = useSelector((store)=>store.cart.totalPrice)
    console.log(totalPrice)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(totalprice())
    },[dispatch])

    const RemoveOnClick = (index)=>{
        console.log(index)
        dispatch(removecart(index))
    }

  return (
    <div className="h-screen w-full px-28 py-10 flex flex-col gap-5">
        <h1 className="font-semibold text-3xl">Cart:-</h1>
        {cartdata.length == 0 ? <h1>Cart is empty</h1> : 
            <div className="flex flex-col gap-5">
                {cartdata.map((data,index)=>{
                    return (
                        <>
                        <div className="flex justify-between">
                            <div
                            key={index}>
                                <h1 className="font-semibold text-xl">{data.name}</h1>
                                <h1 className="font-semibold text-lg">Price:- <span className="font-normal text-md">{data.price}</span></h1>
                                <h1 className="font-semibold text-lg">Quantity:- <span className="font-normal text-md">{data.quantity}</span></h1>
                            </div>
                            <div>
                                <button 
                                onClick={()=>RemoveOnClick(index)}
                                className="border border-black px-10 py-3 rounded-xl">
                                    Remove
                                </button>
                            </div>
                        </div>
                        </>
                    )
                })}
            </div>
        }
        <div className="border border-black w-full"></div>
        <h1 className="font-semibold text-lg">Total Price:- {totalPrice}</h1>
    </div>
  )
}

export default Cart
