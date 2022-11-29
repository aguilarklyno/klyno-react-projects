import React from 'react'
import styled from "styled-components";

import  image_01 from "../../Images/home_01.jpg";

const Home = () => {
  return (
    <div>
      <Scenter>
        <a href="#">資料をダウンロード</a>
      </Scenter>

      <Simg_01 src={image_01} />    

      <Scenter>
        <h1>CASHIER POSの特徴</h1>
      </Scenter> 
    
    </div>
  )
}

const Sspace = styled.div`
  height: 90px;
  width: 100vw;
  // background-color: blue;
`
const Stitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  // background-color: red;

  & h2 span {
    color: gray;
  }

  & h1 {
    font-size: 45px;
  }
`
const Simg_01 = styled.img`
  width: 100vw;
  // height: auto;
  // margin-bottom: 50px;
`

const Scenter = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 40px auto 80px;
  // background: red;

  & a{
    display: block;
    padding: 10px 80px;
    border-radius: 10px;
    background-color: #fff;
    border: 2px solid green;
    text-align: center;
    text-decoration:none;
    color: black;
  }
`



export default Home