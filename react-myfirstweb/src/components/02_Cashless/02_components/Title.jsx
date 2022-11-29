import React from 'react'
import styled from "styled-components";
import  title_01 from "../images/title02.jpg";

const Title = () => {
  return (
    <>
      <Sspace></Sspace>
      <Stitle>
        <h2>PAYMENT</h2>
        <h1>豊富なキャッシュレス決済。</h1>
        <h4>店舗やイベントでの対面決済も、モバイルオーダーなどのオンライン決済も、<br/>シームレスなキャッシュレス環境をご提供いたします。</h4>
      </Stitle>

      <Scenter>
        <a href="#">資料をダウンロード</a>
      </Scenter>

      <Simg_01 src={title_01} />    
    </>
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
  text-align: center;

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

export default Title