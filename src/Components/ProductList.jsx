/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch,useSelector } from "react-redux"
import { getItems } from "../Utils/Reducers/productSlice"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const ProductList = () => {

    const productData = useSelector((store)=>store.product.filteredproducts)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getItems())
    },[])

  return (
    <div className="overflow-y-scroll p-5 h-[530px] flex flex-col gap-5">
      {productData.map((product)=>{
        return (
            <>
            <Link 
            key={product.productId}
            to={`/product/${product.productId}?category=${product.category}`}>
              <div
              className="p-1 rounded-2xl cursor-pointer flex shadow-xl">
              <img 
              className="w-[40%]"
              src={`${product.images}`} alt="images" />
              <div className="w-[60%] flex flex-col gap-3 justify-center">
                <h1 className="font-semibold text-xl">{product.name}</h1>
                <h1 className="text-lg font-semibold">Company:- <span className="font-normal text-md">{product.brand}</span></h1>
                <h1 className="text-lg font-semibold">Price:- <span className="font-normal text-md">{product.price}</span></h1>
                <h1 className="text-lg font-semibold">Description:- <span className="font-normal text-md">{product.description}</span></h1>
              </div>
              </div>
            </Link>
            </>
        )
      })}
    </div>
  )
}

export default ProductList
