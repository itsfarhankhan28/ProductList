/* eslint-disable react/prop-types */


const Television = (props) => {
    console.log(props.ports[0])
  return (
    <div className="w-[900px] h-[500px] rounded-2xl border border-black flex">
        <div className="w-[40%] flex justify-center items-center">
            <img src={props.images} alt="" />
        </div>
        <div className="w-[60%] flex justify-center flex-col gap-3">
            <h1 className="font-semibold text-2xl">{props.name}</h1>
            <h1 className="font-semibold text-xl">Company:-<span className="font-normal text-lg">{props.company}</span></h1>
            <h1 className="font-semibold text-xl">Description:-<span className="font-normal text-lg">{props.description}</span></h1>
            <h1 className="font-semibold text-xl">Price:-<span className="font-normal text-lg">{props.price}</span></h1>
            <div className="flex flex-2 flex-col">
                <h1 className="font-semibold text-2xl">Specifications:-</h1>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                    <h1 className="font-semibold text-xl">Display:-<span className="font-normal text-lg">{props.display}</span></h1>
                    <h1 className="font-semibold text-xl">Refresh Rate:-<span className="font-normal text-lg">{props.refreshRate}</span></h1>
                    <h1 className="font-semibold text-xl">Resolution:-<span className="font-normal text-lg">{props.resolution}</span></h1>
                    <h1 className="font-semibold text-xl">Ports:-  <span className="font-normal text-lg">{props.ports[0]}</span> <span className="font-normal text-lg">{props.ports[1]}</span></h1>
                    <h1 className="font-semibold text-xl">Smart Features:-  <span className="font-normal text-lg">{props.smartfeatures[0]}</span> <span className="font-normal text-lg">{props.smartfeatures[1]}</span></h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Television
