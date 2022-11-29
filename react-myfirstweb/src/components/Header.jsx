import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <SHeader>

      <Slogo>
        <Link to="/">CASHIE<span>R</span></Link>
      </Slogo>

{/* <Link to="/service">POSサービス・機能</Link> */}

      <nav>
        <Sul>
          <li>
            <Link to="/service">POSサービス・機能</Link>
          </li>
          <li>
            <Link to="/cashless">キャッシュレス対応</Link>
          </li>
          <li>
            <Link to="/custom">カスタマイズ対応</Link>
          </li>
          <li>
            <Link to="/plan">料金プラン</Link>
          </li>
          <li>
            <Link to="/simulation">お見積もりシミュレーション</Link>
          </li>
          <li>
            <Link to="/colum">コラム</Link>
          </li>
          <li>
            <Link to="/news">ニュース</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </Sul>
      </nav>
    </SHeader>
  );
};

const SHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: rgb(250, 250, 144);
  color: var(--black-color);
  height: 90px;
  position: fixed;
  z-index: 10;
`;

const Slogo = styled.div`
  & a {
    font-size: 40px;
    font-weight: 800;
    text-decoration: none;
    margin: 0;
    padding: 0;
    color: black;
  }

  & span {
    color: gray;
  }
`

const Sul = styled.ul`
  margin: 0;
  padding: 0;

  & li {
    list-style: none;
    display: inline-block;
    margin-right: 30px;

  }

  & a {
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    color: var(--black-color);
    transition: all 0.3s;
    &:hover {
      color: gray;
    }
  }
`



export default Header