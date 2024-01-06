import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect,useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { addToCart } from "../Utils/Reducers/Cart"
import { Link } from "react-router-dom"
import { increase,decrease } from "../Utils/Reducers/Quantity"

const Details = () => {

    const [productdetails,setProductdetails] = useState()
    const [imageindex,setImageindex] = useState(0)

    const {id}= useParams()

    const dispatch = useDispatch()

    const quantity = useSelector((store)=>store.quantity.quantity)

    const getDetails = async()=>{
        const response = await axios.get(`https://quick-click-o1yf.vercel.app/api/products/get/${id}`)
        const data = response.data
        setProductdetails(data)
    }

    useEffect(()=>{
        getDetails()
    },[])

    const HandleOnClick = (productid,name,price,quantity)=>{
        const payload = {
            productid:productid,
            name:name,
            price:price,
            quantity:quantity
        }
        dispatch(addToCart(payload))
    }

    const Increase = ()=>{
        dispatch(increase())
    }

    const Decrease = ()=>{
        dispatch(decrease())
    }

  return (
    <div className="h-screen w-full p-10 flex gap-10">
      <div className="w-[50%] flex flex-col gap-y-10">
        <div>
            <img src={productdetails?.image[imageindex]} alt="" />
        </div>
        <div className="flex gap-5">
            {productdetails?.image.map((image,index)=>{
                return (
                    <div 
                    key={index}
                    className="cursor-pointer"
                    onClick={()=>setImageindex(index)}
                    >
                        <img className="w-[150px]" src={image} alt="" />
                    </div>
                )
            })}
        </div>
      </div>
      <div className="w-[50%] flex flex-col gap-3">
        <h1 className="font-semibold text-3xl">{productdetails?.name}</h1>
        <h1 className="font-semibold text-xl">Company:- <span className="font-normal text-lg">{productdetails?.company}</span></h1>
        <h1 className="font-semibold text-xl">Description:- <span className="font-normal text-lg">{productdetails?.description}</span></h1>
        <h1 className="font-semibold text-xl flex gap-5">
            Available in:- 
            <span className="flex gap-3">
                {productdetails?.colors.map((color,index)=>{
                    return (
                        <div 
                        key={index} 
                        className={`border border-black w-[100px]`}>
                            <div className={`bg-[${color}]`}>{color}</div>
                        </div>
                    )
                })}
            </span>
        </h1>
        <h1 className='font-semibold text-lg'>In Stock: {productdetails?.stock == 0 
            ?  <span className='font-normal text-md'>Not Available</span>
            : <span className='font-normal text-md'>Available</span>
        }</h1>
        <div className="flex gap-5">
            <h1>Quantity:-  </h1>
            <div className="flex gap-3">
                <button onClick={()=>Decrease()}>-</button>
                <h1>{quantity}</h1>
                <button onClick={()=>Increase()}>+</button>
            </div>
        </div>
        <div className="flex gap-3">
            <button 
            onClick={()=>HandleOnClick(productdetails._id,productdetails?.name,productdetails?.price,quantity)}
            className="w-[150px] py-3 rounded-xl border border-black font-semibold">
                Add To Cart
            </button>
            <Link to='/cart'>
                <button className="w-[150px] py-3 rounded-xl border border-black font-semibold">
                    Check Out Cart
                </button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Details
