import React from 'react'
import styled from "styled-components";
import  p1 from "../images/pros02_01.jpg";
import  p2 from "../images/pros02_02.jpg";
import  p3 from "../images/pros02_03.jpg";
import  p4 from "../images/pros02_04.jpg";


const Pros_02 = () => {
  return (
    <>
      <Sfeatures>
        <h1>様々な運用方法にも対応</h1>
        <Scontainer>
          <div>
           <img src={p1} />
           <h4>選べる料金プラン</h4>
           <p>ハードウェア・初期費用無料のフリープランをご用意。お店の戦略に合わせて料金プランを選択いただけます。</p>
          </div>

          <div>
          <img src={p2} />
           <h4>選べる料金プラン</h4>
           <p>ハードウェア・初期費用無料のフリープランをご用意。お店の戦略に合わせて料金プランを選択いただけます。</p>
          </div>

          <div>
          <img src={p3} />
           <h4>選べる料金プラン</h4>
           <p>ハードウェア・初期費用無料のフリープランをご用意。お店の戦略に合わせて料金プランを選択いただけます。</p>
          </div>

          <div>
          <img src={p4} />
           <h4>選べる料金プラン</h4>
           <p>ハードウェア・初期費用無料のフリープランをご用意。お店の戦略に合わせて料金プランを選択いただけます。</p>
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
  align-items: center;
  width: 100vw;
  height: 700px;
  // background-color: #c6c6c6;

  & div{
    width: 22vw;
    height: ;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 40px;
    justify-content: flex-start;
    background-color: #c6c6c6;
  }
  & img {
    border-radius: 40px 40px 0px 0px;
    display: block;
    width: 22vw; 
  }
  & h4 {
    border-radius: 10px;
    padding: 20px 70px;
    background-color: #dddddd;
    font-size: 30px;
  }
  & p {
    padding: 50px;

  }
`

export default Pros_02