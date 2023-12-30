import React from "react";
import mwallet from "../HealeBlk.png";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";




function Home() {

  const navigate = useNavigate();

  return (
    <>
      <div className="content">
       

        <h2> Heale Wallet</h2>
        <h4 className="h4"> Welcome to your Web3 Wallet</h4>
        <Button
          onClick={() => navigate("/yourwallet")}
          className="frontPageButton"
          type="primary"
        >
          Create A Wallet
        </Button>
        <Button
          onClick={() => navigate("/recover")}
          className="frontPageButton"
          type="default"
        >
          Sign In With Seed Phrase
        </Button>
        <p className="frontPageBottom">
          
          <a href="https://healelabs.com/" target="_blank" rel="noreferrer">
            healelabs.com
          </a>
        </p>
      </div>
    </>
  );
}

export default Home;
