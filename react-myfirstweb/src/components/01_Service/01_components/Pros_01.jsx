import React from 'react'
import styled from "styled-components";
import  pros_01 from "../images/pros01_01.jpg";
import  pros_02 from "../images/pros01_02.jpg";
import  pros_03 from "../images/pros01_03.jpg";
import  pros_04 from "../images/pros01_04.jpg";
import  pros_05 from "../images/pros01_05.jpg";
import  pros_06 from "../images/pros01_06.jpg";
import  pros_07 from "../images/pros01_07.jpg";



const Pros_01 = () => {
  return (
    <>
      <Sfeatures>
        <h1>小さくて賢い、一体型ハードウェア</h1>
        <p>シンプルな機器構成により、安定性とスピーディな会計処理を実現しました。</p>
        <Scontainer>
          <SitemLeft>
           <img src={pros_01} />
          </SitemLeft>

          <SitemRight>
           <img src={pros_02} />
           <img src={pros_03} />
           <img src={pros_04} />
           <img src={pros_05} />
           <img src={pros_06} />
           <img src={pros_07} />
          </SitemRight>
      </Scontainer>

        <a href="#">ハードウェア一覧を見る</a>
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
    margin: 50px auto 0px;
    // background-color: blue;
  }
  & p{
    margin-bottom: 30px;
  }
  & a{
    display: block;
    padding: 10px 80px;
    border-radius: 10px;
    border: 2px solid green;
    text-align: center;
    text-decoration:none;
    color: black;
    background-color: white;
`

const Scontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 500px;
  // background-color: #c6c6c6;
  }
`

const SitemLeft = styled.div`
  width: auto;
  // background-color: black;
  & img {
    padding: 20px 10px 20px 40px;
    display: block;
    height: 400px;
    margin: auto;
    border-radius: 50px;
  }
`

const SitemRight = styled.div`
  width: 615px;
  // background-color: red;
  display: flex;
  flex-wrap: wrap;
  & img {
    padding: 20px 10px 10px 10px;
    display: block;
    height: 185px;
    border-radius: 30px;
  }
`


export default Pros_01