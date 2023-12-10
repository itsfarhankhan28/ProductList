import ProductList from "../Components/ProductList"
import Filter from "../Components/Filter"


const Homepage = () => {
  return (
    <>
    <div className="h-screen mx-10 py-5">
        <div className="w-full flex gap-10">
            <div className="w-[20%]">
                <Filter/>
            </div>
            <div className="w-[80%]">
                <ProductList/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Homepage
