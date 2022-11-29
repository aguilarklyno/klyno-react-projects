import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import App from './App'


{/* -----------------------------

〈開発者メモ〉
・基本的に Styled components を採用します。

--------------------------------*/}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
