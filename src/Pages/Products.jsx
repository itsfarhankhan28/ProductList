import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchproducts } from '../Utils/Reducers/getProductData';
import { Link } from 'react-router-dom';

const Products = () => {

    const productData = useSelector((store)=>store.getproduct.products)
    console.log(productData)

    const disptatch = useDispatch()

    useEffect(()=>{
        disptatch(fetchproducts())
    },[disptatch])

  return (
    <div className='h-[600px] w-full flex flex-wrap overflow-y-scroll gap-y-10 gap-x-5 p-5'>
        {productData.map((product)=>{
            return (
                <>
                <Link to={`/details/${product._id}`}>
                <div className='w-[350px] h-[400px] shadow-xl flex flex-col rounded-2xl cursor-pointer'>
                    <img className='h-[70%] rounded-tr-2xl rounded-tl-2xl' src={product.image[1]} alt="" />
                    <div className='h-[30%] leading-7 p-2'>
                        <h1 className='font-semibold text-xl'>{product.name}</h1>
                        <h1 className='font-semibold text-lg'>Company:- <span className='font-normal text-md'>{product.company}</span></h1>
                        <div className='flex justify-between'>
                            <h1 className='font-semibold text-lg'>Price:- <span className='font-normal text-md'>{product.price}</span></h1>
                            <h1 className='font-semibold text-lg'>In Stock: {product.stock == 0 
                            ?  <span className='font-normal text-md'>Not Available</span>
                            : <span className='font-normal text-md'>Available</span>
                            }</h1>
                        </div>
                    </div>
                </div>
                </Link>
                </>
            )
        })}
    </div>
  )
}

export default Products
