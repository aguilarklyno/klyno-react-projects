import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const klynoInfo = {
  name: "klyno",
  age: 21,
};

// const KlynoCodeContext = createContext(klynoInfo); //グローバルで使えるようにする宣言


ReactDOM.createRoot(document.getElementById('root')).render(
  // <KlynoCodeContext.Provider value={klynoInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  // </KlynoCodeContext.Provider>
);

// export default KlynoCodeContext;
