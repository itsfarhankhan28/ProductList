import { useSearchParams, useParams } from "react-router-dom"
import Smartphones from "../Components/SingleProductCard/Smartphones"
import Television from "../Components/SingleProductCard/Television"
import Laptops from "../Components/SingleProductCard/Laptops"
import products from "../Data/constant"

const ProductDetails = () => {
  const productid = useParams()
  // console.log(productid.id)

  const [searchparams] = useSearchParams()
  const productCategory = searchparams.get('category')

  const productData = products[productid.id]
  console.log(productData)

  if(productCategory == 'Smartphones'){
    return (
        <Smartphones 
        company={productData.brand}
        images={productData.images}
        name={productData.name}
        price={productData.price}
        description={productData.description}
        battery={productData.specifications.battery}
        camera={productData.specifications.camera}
        display={productData.specifications.display}
        processor={productData.specifications.processor}
        storage={productData.specifications.storage}
        />
    )
  }else if(productCategory == 'Television'){
    return (
        <Television
        name={productData.name}
        company={productData.brand}
        images={productData.images}
        price={productData.price}
        description={productData.description}
        display={productData.specifications.display}
        refreshRate={productData.specifications.refreshRate}
        resolution={productData.specifications.resolution}
        ports={productData.specifications.ports}
        smartfeatures={productData.specifications.smartFeatures}
        />
    )
  }else{
    return (
        <Laptops
        company={productData.brand}
        images={productData.images}
        name={productData.name}
        price={productData.price}
        description={productData.description}
        display={productData.specifications.display}
        processor={productData.specifications.processor}
        storage={productData.specifications.storage}
        memory={productData.specifications.memory}
        />
    )
  }
}

export default ProductDetails
