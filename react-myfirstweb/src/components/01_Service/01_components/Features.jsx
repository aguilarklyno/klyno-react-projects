import React from 'react'
import styled from "styled-components";
import  feature_01 from "../images/feature_01.png";
import  feature_02 from "../images/feature_02.png";
import  feature_03 from "../images/feature_03.png";
import  feature_04 from "../images/feature_04.png";



const Features = () => {
  return (
    <>
      <Sfeatures>
        <h1>CASHIER POSの特徴</h1>
        <Scontainer>
          <Sitem>
           <img src={feature_01} />
           <h4>選べる料金プラン</h4>
           <p>ハードウェア・初期費用無料のフリープランをご用意。お店の戦略に合わせて料金プランを選択いただけます。</p>
           <a href="#">詳しく見る</a>
          </Sitem>

          <Sitem>
           <img src={feature_02} />
           <h4>選べる料金プラン</h4>
           <p>ハードウェア・初期費用無料のフリープランをご用意。お店の戦略に合わせて料金プランを選択いただけます。</p>
           {/* <a href="#">詳しく見る</a> */}
          </Sitem>

          <Sitem>
           <img src={feature_03} />
           <h4>選べる料金プラン</h4>
           <p>ハードウェア・初期費用無料のフリープランをご用意。お店の戦略に合わせて料金プランを選択いただけます。</p>
           <a href="#">詳しく見る</a>
          </Sitem>

          <Sitem>
           <img src={feature_04} />
           <h4>選べる料金プラン</h4>
           <p>ハードウェア・初期費用無料のフリープランをご用意。お店の戦略に合わせて料金プランを選択いただけます。</p>
           <a href="#">詳しく見る</a>
          </Sitem>

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
    margin: 50px auto;
    // background-color: blue;
  }
`

const Scontainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  height: 700px;
  border-radius: 40px;
  background-color: #c6c6c6;
  & div{
    width: 300px;
    height: 600px;
    // background-color: blue;
  }
`

const Sitem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    height: 100px;
    // width: 200px; 
  }

  & a{
    display: block;
    padding: 10px 10px;
    border-radius: 10px;
    background-color: #fff;
    border: 2px solid green;
    // text-align: center;
    text-decoration:none;
    color: black;
    background-color: white;
`


export default Features