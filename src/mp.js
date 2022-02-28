import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import MoralisDappContext from "./context";

function MoralisDappProvider({ children }) {
    const { web3, Moralis, user } = useMoralis();
  
    return (
      <MoralisDappContext.Provider value={{ walletAddress }}>
        {children}
      </MoralisDappContext.Provider>
    );
  }
  
  function useMoralisDapp() {
    const context = React.useContext(MoralisDappContext);
    if (context === undefined) {
      throw new Error("useMoralisDapp must be used within a MoralisDappProvider");
    }
    return context;
  }
  
  export { MoralisDappProvider, useMoralisDapp };