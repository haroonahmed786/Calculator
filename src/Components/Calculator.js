import { useState } from "react";


export const Calculator = () => {

  const [val, setVal] = useState('');

  const backspace = () => {
    try {
      setVal(val.slice(0, -1))
    } catch (error) {
      setVal("")
    }
  }
  const calculate = () => {
    try {
      setVal(eval(val));
    } catch (error) {
setVal("Error")
    }
  }
  return (
    <div className=" bg-slate-100 flex justify-center ">
      <div className=' grid grid-cols rounded-md  bg-white border w-96 border-slate-200 mt-28 mb-28 flex-cols justify-center items-center'>
        <div className=" col-md-4">
          <input type="text" className="bg-slate-200 font-bold text-xl border-none h-20 w-96 form-control form-control-lg text-end bg-light mb-4 fs-4 text-primary-shadow " value={val} onChange={((e) =>setVal(e.target.value))} />
          <div className="grid grid-cols-4 place-content-evenly mt-8 gap-4 bg-slate-300">
            <div className="  col-3">
              <button className="btn btn-light bg-white text-xl font-bold rounded-md shadow hover:shadow-lg p-8 ml-2 h-20 fs-4" value="1" onClick={(e) => setVal(val + e.target.value)}>1</button>
            </div>
            <div className="col-3">
              <button className="btn btn-light bg-white text-xl font-bold shadow hover:shadow-lg rounded-md  p-8 h-20 fs-4" value="2" onClick={(e) => setVal(val + e.target.value)}>2</button>
            </div>
            <div className="col-3">
              <button className="btn btn-light  bg-white text-xl font-bold shadow hover:shadow-lg rounded-md  p-8 h-20 fs-4" value="3" onClick={(e) => setVal(val + e.target.value)}>3</button>
            </div>
            <div className="col-3">
              <button className="btn btn-light  text-xl font-bold shadow hover:shadow-lg rounded-md  p-4 h-20 bg-orange-300 fs-4" value="C/CE" onClick={() => backspace()}>C/CE</button>
            </div>
          </div>
          <div className="grid grid-cols-4 place-content-evenly bg-slate-300 mt-8 gap-4">
            <div className="  col-3">
              <button className="btn btn-light bg-white text-xl font-bold shadow hover:shadow-lg rounded-md ml-2  p-8 h-20 fs-4" value="4" onClick={(e) => setVal(val + e.target.value)}>4</button>
            </div>
            <div className="col-3">
              <button className="btn btn-light bg-white text-xl font-bold shadow hover:shadow-lg p-8 h-20  rounded-md  fs-4" value="5" onClick={(e) => setVal(val + e.target.value)}>5</button>
            </div>
            <div className="col-3">
              <button className="btn btn-light text-xl bg-white font-bold shadow hover:shadow-lg p-8 rounded-md  h-20 fs-4" value="6" onClick={(e) => setVal(val + e.target.value)}>6</button>
            </div>
            <div className="col-3">
              <button className="btn btn-light text-xl  font-bold shadow hover:shadow-lg p-8 rounded-md  h-20 bg-orange-300 fs-4" value="+" onClick={(e) => setVal(val + e.target.value)}>+</button>
            </div>
          </div>
          <div className="grid grid-cols-4 place-content-evenly mt-8 h-20 bg-slate-300 gap-4">
            <div className="  col-3">
              <button className="btn btn-light text-xl bg-white font-bold shadow hover:shadow-lg p-8 rounded-md ml-2  h-20 fs-4" value="7" onClick={(e) => setVal(val + e.target.value)}>7</button>
            </div>
            <div className="col-3">
              <button className="btn btn-light text-xl bg-white font-bold shadow hover:shadow-lg p-8 rounded-md  h-20 fs-4" value="8" onClick={(e) => setVal(val + e.target.value)}>8</button>
            </div>
            <div className="col-3">
              <button className="btn btn-light text-xl  font-bold bg-white shadow hover:shadow-lg p-8 rounded-md  h-20 fs-4" value="9" onClick={(e) => setVal(val + e.target.value)}>9</button>
            </div>
            <div className="col-3">
              <button className="btn btn-light shadow hover:shadow-lg text-xl  font-bold shadow p-8 rounded-md  h-20 bg-orange-300 fs-4" value="*" onClick={(e) => setVal(val + e.target.value)}>X</button>
            </div>
          </div>
          <div className="grid grid-cols-4 place-content-evenly mt-8 bg-slate-300 gap-4">
            <div className="  col-3">
              <button className="btn btn-light text-xl font-bold bg-white shadow hover:shadow-lg p-8 rounded-md ml-2 h-20 fs-4" value="-" onClick={(e) => setVal(val + e.target.value)}>-</button>
            </div>
            <div className="col-3">
              <button className="btn btn-light text-xl font-bold bg-white shadow hover:shadow-lg p-8 rounded-md  h-20 fs-4" value="0" onClick={(e) => setVal(val + e.target.value)}>0</button>
            </div>
            <div className="col-3">
              <button className="btn btn-light text-xl font-bold  shadow hover:shadow-lg p-8 rounded-md  h-20 bg-green-300 ml-1 fs-4" value="=" onClick={() => calculate()}>=</button>
            </div>
            <div className="col-3">
              <button className="btn btn-light  text-xl font-bold  shadow hover:shadow-lg p-8 rounded-md  h-20 bg-orange-300 ml-1 fs-4" value="/" onClick={(e) => setVal(val + e.target.value)}>/</button>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};