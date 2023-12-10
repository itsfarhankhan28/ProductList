/* eslint-disable react/prop-types */

const Smartphones = (props) => {
  return (
    <div className="w-[900px] h-[500px] rounded-2xl flex shadow-xl">
        <div className="w-[40%] h-full flex justify-center items-center">
            <img className="w-[500px]" src={props.images} alt="image" />
        </div>
        <div className="w-[60%] h-full flex flex-col justify-center gap-3">
            <h1 className="font-semibold text-2xl">{props.name}</h1>
            <h1 className="text-xl font-semibold">Company:- <span className="text-lg font-normal">{props.company}</span></h1>
            <h1 className="text-xl font-semibold">Description:- <span className="text-lg font-normal">{props.description}</span></h1>
            <h1 className="text-xl font-semibold">Price:- <span className="text-lg font-normal">{props.price}</span></h1>
            <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-2xl">Specifications:-</h1>
                <div className="flex gap-x-5 gap-y-2 flex-wrap">
                    <h1 className="text-lg font-semibold">Battery:- <span className="font-normal">{props.battery}</span></h1>
                    <h1 className="text-lg font-semibold">Processor:- <span className="font-normal">{props.processor}</span></h1>
                    <h1 className="text-lg font-semibold">Storage:- <span className="font-normal">{props.storage}</span></h1>
                    <h1 className="text-lg font-semibold">Display:- <span className="font-normal">{props.display}</span></h1>
                    <h1 className="text-lg font-semibold">Camera:- <span className="font-normal">{props.camera}</span></h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Smartphones
