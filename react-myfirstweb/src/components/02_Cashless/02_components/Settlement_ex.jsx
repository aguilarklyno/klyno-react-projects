import React from 'react'
import styled from "styled-components";
import  i1 from "../images/img02_ex01.png";


const Settlement_ex = () => {
  return (
    <>
      <Sfeatures>
        <Scontainer>
          <Sitem>
           <h3>最低水準の決済手数料</h3>
           <div>
             <p> Visa・Master<span>3.24%~</span></p>
           </div>
           <Sp>ハードウェア・初期費用無料のフリープランをご用意。お店の戦略に合わせて料金プランを選択いただけます。</Sp>
          </Sitem>

          <Sitem>
           <h3>選べる決済サービス・端末</h3>
           <img src={i1}/>
           <Sp>マルチ決済が可能な一体型端末から、屋外や移動販売で最適なモバイルタイプの端末まで複数のサービスに対応しています。店舗形態や利用用途に合わせてお選びください。</Sp>
          </Sitem>

          <Sitem>
           <h3>柔軟な各種サービス</h3>
           <p>最短３営業日で導入可能</p>
           <p>フレキシブルな入金サイクル</p>
           <p>短期間のレンタル利用も可能</p>
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
  margin: 200px auto 80px;
`

const Scontainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  border-radius: 40px;
  background-color: #c6c6c6;
`

const Sitem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 420px;
  height: 350px;
  // background-color: blue;
  & img {
    height: 100px;
    // width: 200px; 
  }
  && span {
    font-size: 40px;
    padding-left: 30px;
  }
`
const Sp = styled.p`
  padding: 0px 40px;
`

export default Settlement_ex