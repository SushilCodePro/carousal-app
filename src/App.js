import { items } from "./index";
import { useEffect, useState } from "react";

function App() {
  const [currInd, setCurrInd] = useState(0);
  const [intervalID, setIntervalID]=useState(null);
  const preHandle = () => {
    if (currInd <= 0) {
      return;
    }
    setCurrInd(currInd - 1);
  }

  const nextHandle = () => {

    if (currInd >= items.length - 1) {
      return;
    }
    setCurrInd(currInd + 1);
  }
  const resetHandle = () => {
    if(intervalID){
      clearInterval(intervalID);
    }
    
  }
  useEffect(()=>{
      const interval=setInterval(()=>{
        setCurrInd((pre)=>(pre+1 )% items.length);
      },1000);
      setIntervalID(interval);
      return ()=>clearInterval(interval);
  },[]);
  return (
    <div className="container mx-auto flex justify-center items-center px-4">
      <button
        onClick={preHandle}
        type="button"
        className="text-white bg-cyan-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >Pre
      </button>
      <div className="flex flex-col items-center mx-4">
        <div className=''>
          <img src={items[currInd].picUrl} alt={`${items[currInd].name}`} />
        </div>
        <div className="text-center">
          {items[currInd].name}
        </div>
        <button
        onClick={resetHandle}
        type="button"
        className="text-white bg-cyan-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >Stop
      </button>
      </div>
      <button
        onClick={nextHandle}
        type="button"
        className="text-white bg-cyan-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >Next
      </button>
    </div>
  );
}

export default App;
