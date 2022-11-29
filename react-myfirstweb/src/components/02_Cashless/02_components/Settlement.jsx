import React from 'react'
import styled from "styled-components";
import  i1 from "../images/img02_01.jpg";
import  i2 from "../images/img02_02.jpg";
import  i3 from "../images/img02_03.jpg";
import  i4 from "../images/img02_04.png";
import  i5 from "../images/img02_05.png";
import  i6 from "../images/img02_06.png";

const Settlement = () => {
  return (
    <>
      <Sfeatures>
        <h1>様々な運用方法にも対応</h1>
        <Scontainer>

          <div>
            <h4>クレジットカード</h4>
            <img src={i1} />
            <img src={i4} />
          </div>

          <div>
            <h4>電子マネー</h4>
            <img src={i2} />
            <img src={i5} />
          </div>

          <div>
            <h4>QRコード</h4>
            <img src={i3} />
            <img src={i6} />
          </div>


        </Scontainer>
      </Sfeatures>
    </>
  )
}

const Sfeatures = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h1 {
    font-size: 50px;
    font-weight: 400;
    margin: 80px auto 160px;
    // background-color: blue;
  }
`

const Scontainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100vw;
  height: 700px;
  // background-color: #c6c6c6;

  & div{
    width: 30vw;
    height: ;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 40px;
    justify-content: flex-start;
    // background-color: #c6c6c6;
  }
  & img {
    margin: 20px;
    border-radius: 30px;
    display: block;
    width: 500px; 
  }
  & img + img {
    border-radius: 0px;
  }
  & h4 {
    border-radius: 10px;
    // padding: 20px 70px;
    // background-color: #dddddd;
    font-size: 30px;
  }
`

export default Settlement