import React, { useContext, useState } from "react";
import CandyContext from "./candy-context";

const CandyProvider = (props) => {
  const [candyState, setCandyState] = useState([]);
  const addCandyHandler=(item)=>{
    setCandyState(oldState=>[{...item},...oldState])
  }
  return (
    <CandyContext.Provider
      value={{
        candies: candyState,
        addCandy: addCandyHandler,
      }}
    >
      {props.children}
    </CandyContext.Provider>
  );
};

export const useCandy=()=>useContext(CandyContext);

export default CandyProvider;
