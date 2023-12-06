import React from "react";

const CandyContext=React.createContext({
    candies:[],
    addCandy:(item)=>{},
})
export default CandyContext;