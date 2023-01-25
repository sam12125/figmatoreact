import React from "react";
import Vector from '../assets/Vector.png';
import BSCDAO from '../assets/BSCDAO.png';

function Navbar() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "space-between",
          color:"white",
          fontSize:"12px",
        }}
      >
        <p style={{marginLeft:"10px"}}>Presale Phase 1 start soon on 30th of October 2022.</p>
        <p>Presale Phase 1 start soon on 30th of October 2022.</p>
        <p style={{marginRight:"10px"}}>Presale Phase 1 start soon on 30th of October 2022.</p>
      </div>

      <div style={{backgroundColor:"rgb(43,43,43)",display:"flex",padding:"4px",justifyContent:"space-evenly"}}>
        <div style={{display:"flex",gap:"10px"}}>
        <img src={Vector} style={{width:"60px",height:"48px",color:"white"}}/>
<img src={BSCDAO} style={{width:"90px",height:"23px",marginTop:"14px"}}/>
        </div>
<p style={{color:"rgb(189,189,189)"}}>ABOUT</p>
<p style={{color:"rgb(189,189,189)"}}>PRODUCTS</p>
<p style={{color:"rgb(189,189,189)"}}>TOKENOMICS</p>
<p style={{color:"rgb(189,189,189)"}}>ROADMAPS</p>
<p style={{color:"rgb(189,189,189)"}}>WHITEPAPER</p>
<p style={{color:"rgb(189,189,189)"}}>SOCIAL</p>
<p style={{color:"rgb(189,189,189)"}}>HOW TO BUY</p>
<div style={{display:"flex",gap:"10px"}}>
<div style={{backgroundColor:"rgb(106,36,121)",width:"90px",border:"1px solid white",borderRadius:"4px",height:"30px",position:"relative",marginTop:"12px"}}>
                <div style={{margin:"0",position:"absolute",top:"50%",transform:"translateY(-50%)",marginLeft:"25px"}}>
                <p style={{color:"white"}}>DAAP</p>
                </div>
            </div>
            <div style={{backgroundColor:"rgb(106,36,121)",width:"154px",border:"1px solid white",borderRadius:"4px",height:"30px",position:"relative",marginTop:"12px"}}>
                <div style={{margin:"0",position:"absolute",top:"50%",transform:"translateY(-50%)",marginLeft:"25px"}}>
                <p style={{color:"white"}}>Connect wallet</p>
                </div>
            </div>
</div>
      </div>

    </div>
  );
}

export default Navbar;
