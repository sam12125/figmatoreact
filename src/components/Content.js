import React from "react";
import BSCDAO from "../assets/BSCDAO(1).png";
import World from "../assets/World.png";
import Community from "../assets/community.png";
import Calculate from "../assets/calcu.png";
import Presale from "../assets/presale.png";
import Bloomberg1 from "../assets/bloomberg1.png";
import Bloomberg2 from "../assets/bloomberg2.png";
import Major from "../assets/major1.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import liquidity1 from "../assets/liquidity1.png";
import liquidity2 from "../assets/liquidity2.png";
import tv from "../assets/tv.png";
import earth from "../assets/earth.png";
import mission from "../assets/mission.png";
import investing from "../assets/investing.png";
import welcome from "../assets/welcome.png";
import sun from "../assets/sun.png";
import bscdao1 from "../assets/bscdao1.png";
import bscdao2 from "../assets/bscdao2.png";
import defi from "../assets/defi.png";
import high from "../assets/high.png";
import interfi from "../assets/interfi.png";
import coinbit from "../assets/coinbit.png";
import coinmarket from "../assets/coinmarket.png";
import pancake from "../assets/pancake.png";
import BSCDAO1 from "../assets/BSCDAO.png";
import Vector from "../assets/Vector.png";
import social from "../assets/social.png";
import Disclamair from "../assets/Disclamair.png";

function Content() {
  return (
    <div style={{ backgroundColor: "rgb(43,43,43)" }}>
      <div style={{ backgroundColor: "rgb(43,43,43)", display: "flex" }}>
        <div style={{ marginLeft: "44px", width: "60%" }}>
          <img
            src={BSCDAO}
            style={{ width: "315px", height: "90px", marginTop: "80px" }}
          />{" "}
          <br></br>
          <img
            src={World}
            style={{ width: "700px", height: "100px", marginTop: "15px" }}
          />
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <div
              style={{
                backgroundColor: "rgb(106,36,121)",
                width: "110px",
                border: "1px solid white",
                borderRadius: "4px",
                height: "35px",
                position: "relative",
              }}
            >
              <div
                style={{
                  margin: "0",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  marginLeft: "30px",
                }}
              >
                <p style={{ color: "white" }}>Presale</p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "rgb(106,36,121)",
                width: "130px",
                border: "1px solid white",
                borderRadius: "4px",
                height: "35px",
                position: "relative",
              }}
            >
              <div
                style={{
                  margin: "0",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  marginLeft: "25px",
                }}
              >
                <p style={{ color: "white" }}>Whitepaper</p>
              </div>
            </div>
          </div>
          <b>
            <p style={{ color: "white", fontSize: "20px", marginTop: "50px" }}>
              Join our community
            </p>
          </b>
          <img
            src={Community}
            style={{ marginTop: "-15px", marginLeft: "-5px" }}
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <img
            src={Calculate}
            style={{ marginLeft: "120px", height: "320px", width: "250px" }}
          />
          <img
            src={Presale}
            style={{ marginLeft: "220px", marginTop: "-6px" }}
          />
        </div>
      </div>
      <div
        style={{
          margin: "auto",
          textAlign: "center",
          backgroundColor: "rgb(43,43,43)",
          marginTop: "6%",
        }}
      >
        <button
          style={{
            width: "90%",
            borderRadius: "20px",
            backgroundColor: "rgb(13,20,26)",
            fontSize: "25px",
            border: "2.5px solid rgb(244,36,249)",
            color: "white",
            height: "40px",
          }}
        >
          Featured in
        </button>
        <div style={{ display: "flex", width: "100%", marginTop: "1%" }}>
          <img src={Bloomberg1} style={{ marginTop: "20px", width: "75%" }} />
          <img src={Bloomberg2} style={{ marginTop: "20px", width: "25%" }} />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "30px",
          gap: "10px",
          marginLeft: "10px",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            width: "25%",
            height: "190px",
            color: "white",
            borderRadius: "8px",
            backgroundColor: "rgb(54,67,76)",
          }}
        >
          <b>
            <p
              style={{
                textAlign: "center",
                marginTop: "0px",
                fontSize: "20px",
              }}
            >
              Bloomberg
            </p>
          </b>
          <p style={{ marginTop: "-10px", padding: "6px" }}>
            “BSCDAO is a platform that helps you convert tokens, be a liquidity
            provider and earn yield In High APY.”
          </p>
          <div style={{ textAlign: "center" }}>
            <button
              style={{
                backgroundColor: "rgb(54,67,76)",
                borderRadius: "5px",
                color: "white",
                border: "1px solid white",
                textAlign: "center",
              }}
            >
              Bloomberg
            </button>
          </div>
          <p style={{ marginTop: "8px", textAlign: "center" }}>
            <u>Learn more</u>
          </p>
        </div>
        <div
          style={{
            width: "25%",
            height: "190px",
            color: "white",
            borderRadius: "8px",
            backgroundColor: "rgb(54,67,76)",
          }}
        >
          <b>
            <p
              style={{
                textAlign: "center",
                marginTop: "0px",
                fontSize: "20px",
              }}
            >
              Yahoo
            </p>
          </b>
          <p style={{ marginTop: "-10px", padding: "6px" }}>
            “By providing liquidity, also known as staking, you earn yield by
            collecting fees and getting minted Bscdao as a reward.”
          </p>
          <div style={{ textAlign: "center" }}>
            <button
              style={{
                backgroundColor: "rgb(54,67,76)",
                borderRadius: "5px",
                color: "white",
                border: "1px solid white",
                textAlign: "center",
              }}
            >
              Yahoo
            </button>
          </div>
          <p style={{ marginTop: "8px", textAlign: "center" }}>
            <u>Learn more</u>
          </p>
        </div>
        <div
          style={{
            width: "25%",
            height: "190px",
            color: "white",
            borderRadius: "8px",
            backgroundColor: "rgb(54,67,76)",
          }}
        >
          <b>
            <p
              style={{
                textAlign: "center",
                marginTop: "0px",
                fontSize: "20px",
              }}
            >
              Benzinga
            </p>
          </b>
          <p style={{ marginTop: "-10px", padding: "6px" }}>
            “Bsc Dao Protocol Finance makes it easy to buy/sell crypto, invest
            and earn revenue directly on the blockchain.”
          </p>
          <div style={{ textAlign: "center" }}>
            <button
              style={{
                backgroundColor: "rgb(54,67,76)",
                borderRadius: "5px",
                color: "white",
                border: "1px solid white",
                textAlign: "center",
              }}
            >
              Benzinga
            </button>
          </div>
          <p style={{ marginTop: "8px", textAlign: "center" }}>
            <u>Learn more</u>
          </p>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "30px",
          backgroundColor: "rgb(244,36,249)",
          marginTop: "3%",
        }}
      >
        <div style={{ backgroundColor: "black", width: "10%", margin: "auto" }}>
          <p
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "25px",
              marginTop: "0px",
            }}
          >
            ABOUT
          </p>
        </div>
      </div>
      <div style={{ display: "flex", gap: "100px", marginLeft: "8%" }}>
        <div style={{ marginLeft: "10px", marginTop: "30px" }}>
          <img src={Major} style={{ width: "100%" }} />
        </div>
        <div>
          <div>
            <img src={p1} style={{ width: "80%", marginTop: "80px" }} />
            <img src={p2} style={{ width: "80%", marginTop: "20px" }} />
          </div>
          <div>
            <img src={p3} style={{ width: "80%", marginTop: "50px" }} />
            <img src={p4} style={{ width: "80%", marginTop: "20px" }} />
          </div>
        </div>
      </div>

      <div style={{ display: "flex", marginTop: "50px" }}>
        <img src={liquidity1} style={{ width: "100%" }} />
        <img src={liquidity2} style={{ width: "100%" }} />
      </div>
      <div
        style={{
          width: "100%",
          height: "30px",
          backgroundColor: "rgb(244,36,249)",
          marginTop: "3%",
        }}
      >
        <div style={{ backgroundColor: "black", width: "20%", margin: "auto" }}>
          <p
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "25px",
              marginTop: "0px",
            }}
          >
            How it works
          </p>
        </div>
      </div>
      <div style={{ marginLeft: "20%", marginTop: "50px" }}>
        <img src={tv} style={{ width: "70%" }} />
      </div>
      <div style={{ textAlign: "center", marginTop: "6%" }}>
        <button
          style={{
            width: "90%",
            borderRadius: "20px",
            backgroundColor: "rgb(13,20,26)",
            fontSize: "25px",
            border: "2.5px solid rgb(244,36,249)",
            color: "white",
            height: "40px",
          }}
        >
          THE MOST POWERFUL YIELD GENERATION Protocol in DEFi
        </button>
      </div>
      <div style={{ display: "flex", gap: "60px" }}>
        <div>
          <img
            src={mission}
            style={{ marginTop: "30%", width: "80%", marginLeft: "20%" }}
          />
        </div>
        <div>
          <img src={earth} style={{ width: "80%", marginLeft: "5%" }} />
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "2%" }}>
        <button
          style={{
            width: "90%",
            borderRadius: "20px",
            backgroundColor: "rgb(13,20,26)",
            fontSize: "25px",
            border: "2.5px solid rgb(244,36,249)",
            color: "white",
            height: "40px",
          }}
        >
          ZK ROLL UP Infrastructure
        </button>
      </div>

      <div style={{ textAlign: "center", marginTop: "4%" }}>
        <img src={investing} style={{ width: "80%" }} />
        <img src={welcome} style={{ width: "30%" }} />
      </div>

      <div style={{ display: "flex", marginLeft: "5%", marginTop: "4%" }}>
        <div>
          <img src={sun} style={{ width: "80%" }} />
        </div>
        <div>
          <div>
            <img src={bscdao1} style={{ width: "80%", marginTop: "12%" }} />
          </div>
          <div>
            <img src={bscdao2} style={{ width: "80%", marginTop: "40px" }} />
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "2%" }}>
        <button
          style={{
            width: "90%",
            borderRadius: "20px",
            backgroundColor: "rgb(13,20,26)",
            fontSize: "25px",
            border: "2.5px solid rgb(244,36,249)",
            color: "white",
            height: "40px",
          }}
        >
          Feature
        </button>
      </div>

      <div style={{ textAlign: "center", marginTop: "4%" }}>
        <img src={defi} style={{ width: "40%" }} />
        <img src={high} style={{ width: "80%", marginTop: "1%" }} />
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "30px",
          gap: "10px",
          marginLeft: "10px",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            width: "25%",
            height: "140px",
            color: "white",
            borderRadius: "8px",
            backgroundColor: "rgb(54,67,76)",
          }}
        >
          <b>
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontSize: "20px",
              }}
            >
              GENERATE LIQUIDITY
            </p>
          </b>
          <p
            style={{ marginTop: "-10px", padding: "6px", textAlign: "center" }}
          >
            DAO’s and their token holders deposit only their token into a Token
            DEFI to create market liquidity with protection against impermanent
            loss.
          </p>
        </div>
        <div
          style={{
            width: "25%",
            height: "140px",
            color: "white",
            borderRadius: "8px",
            backgroundColor: "rgb(54,67,76)",
          }}
        >
          <b>
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontSize: "20px",
              }}
            >
              CONTROL LIQUIDITY
            </p>
          </b>
          <p
            style={{ marginTop: "-10px", padding: "6px", textAlign: "center" }}
          >
            Tokens in Token Reactors are paired with assets from Pair DEFI (e.g.
            ETH) and deployed to DEXs based on the votes of Liquidity Directors.
          </p>
        </div>
        <div
          style={{
            width: "25%",
            height: "140px",
            color: "white",
            borderRadius: "8px",
            backgroundColor: "rgb(54,67,76)",
          }}
        >
          <b>
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontSize: "20px",
              }}
            >
              EARN YIELD
            </p>
          </b>
          <p
            style={{ marginTop: "-10px", padding: "6px", textAlign: "center" }}
          >
            Liquidity Providers and Liquidity Directors earn rewards for
            depositing assets into DEFI or voting TOKE to direct liquidity.
          </p>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "2%" }}>
        <button
          style={{
            width: "90%",
            borderRadius: "20px",
            backgroundColor: "rgb(13,20,26)",
            fontSize: "25px",
            border: "2.5px solid rgb(244,36,249)",
            color: "white",
            height: "40px",
          }}
        >
          Powered by
        </button>
      </div>

      <div
        style={{
          textAlign: "center",
          display: "flex",
          gap: "50px",
          justifyContent: "center",
        }}
      >
        <img src={coinbit} />
        <img src={pancake} />
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          gap: "50px",
          justifyContent: "center",
        }}
      >
        <img src={coinmarket} />
        <img src={interfi} />
      </div>

      <div
        style={{
          width: "100%",
          height: "30px",
          backgroundColor: "rgb(244,36,249)",
          marginTop: "3%",
        }}
      >
        <div style={{ backgroundColor: "black", width: "30%", margin: "auto" }}>
          <p
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "25px",
              marginTop: "0px",
            }}
          >
            Partners and Integrations
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "30px",
          gap: "10px",
          marginLeft: "10px",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            width: "25%",
            height: "170px",
            color: "white",
            borderRadius: "8px",
            backgroundColor: "rgb(54,67,76)",
          }}
        >
          <b>
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontSize: "20px",
              }}
            >
              Guided by
            </p>
          </b>
          <p
            style={{ marginTop: "-10px", padding: "6px", textAlign: "center" }}
          >
            Our cloud and infra security is powerfully guided by pingsafe. it
            maintauns a watch 24x7 and detects even the most minute
            vulnerabilities in time to prevent harm to our security keys and
            systems.
          </p>
        </div>
        <div
          style={{
            width: "25%",
            height: "170px",
            color: "white",
            borderRadius: "8px",
            backgroundColor: "rgb(54,67,76)",
          }}
        >
          <b>
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontSize: "20px",
              }}
            >
              Secured by
            </p>
          </b>
          <p
            style={{ marginTop: "-10px", padding: "6px", textAlign: "center" }}
          >
            We use the most secure and reliable infrastructureprovided by AWS.
            All of Flint’s data exchange happens through SSL using TLS 1.2 and
            your sensitive data is securely stored with AES-256 encryption.
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "rgb(120,46,233)",
          width: "100%",
          borderRadius: "10px",
          marginTop: "3%",
          display: "flex",
          gap: "10%",
        }}
      >
        <div style={{ width: "40%", textAlign: "center" }}>
          <img src={Vector} style={{ marginTop: "4%" }} />
          <br></br>
          <img src={BSCDAO1} style={{ marginTop: "2%" }} />
          <br></br>
          <img src={social} style={{ marginTop: "3%" }} />
        </div>
        <div>
          <div
            style={{
              color: "white",
              display: "flex",
              gap: "40px",
              fontSize: "16px",
              marginTop: "4%",
            }}
          >
            <p>Whitepaper</p>
            <p>BSCDAO PROTOCOL</p>
            <p>PRESALE</p>
          </div>
          <div
            style={{
              color: "white",
              display: "flex",
              gap: "40px",
              fontSize: "16px",
            }}
          >
            <p>About us</p>
            <p>DAAP</p>
            <p>WHITEPAPER</p>
          </div>
          <div
            style={{
              color: "white",
              display: "flex",
              gap: "40px",
              fontSize: "16px",
            }}
          >
            <p>Contact us</p>
            <p>PRODUCTS</p>
            <p>TOKENOMICS</p>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "2%" }}>
        <img src={Disclamair} style={{ width: "80%", marginBottom: "2%" }} />
      </div>
    </div>
  );
}

export default Content;
