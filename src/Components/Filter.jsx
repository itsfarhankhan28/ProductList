import { useState } from "react"
import { useDispatch } from "react-redux"
import { filterproduct,Slideproduct } from "../Utils/Reducers/productSlice"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Filter = () => {

  const [btnVal,setBtnVal] = useState()
  // const [filterVal, setFilterVal] = useState()

  const dispatch = useDispatch()

  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 1000,
      label: '$1000',
    },
    {
      value: 2000,
      label: '$2000',
    },
  ];
  
  function valuetext(value) {
    // setFilterVal(value)
    dispatch(Slideproduct(value))
    // console.log(value)
    return `${value}°C`;
  }

  return (
    <div className="rounded-2xl h-full p-3 shadow-xl flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-xl">Category:-</h1>
        <div className="flex gap-5 flex-wrap">
        <button
          value={"All"}
          onClick={(e)=>{
            setBtnVal(e.target.value)
            dispatch(filterproduct(btnVal))
          }}
          className="px-4 py-2 bg-none border border-black rounded-xl">
            All
          </button>
          <button
          value={"Laptops"}
          onClick={(e)=>{
            setBtnVal(e.target.value)
            dispatch(filterproduct(btnVal))
          }}
          className="px-4 py-2 bg-none border border-black rounded-xl">
            Laptops
          </button>
          <button 
          value={"Smartphones"}
          onClick={(e)=>{
            setBtnVal(e.target.value)
            dispatch(filterproduct(btnVal))
          }}
          className="px-4 py-2 bg-none border border-black rounded-xl">
            Smartphones
          </button>
          <button 
          value={"Television"}
          onClick={(e)=>{
            setBtnVal(e.target.value)
            dispatch(filterproduct(btnVal))
          }}
          className="px-4 py-2 bg-none border border-black rounded-xl">
            Television
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-xl">Filter By Price:- </h1>
        <Box sx={{ width: 200 }}>
          <Slider
            aria-label="Always visible"
            defaultValue={2000}
            getAriaValueText={valuetext}
            step={10}
            marks={marks}
            min={0}
            max={2000}
          />
        </Box>
      </div>
    </div>
  )
}

export default Filter
