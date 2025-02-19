import React from 'react';
import ReactDOM from 'react-dom/client';

// 메인 페이지용 CSS
import './css/main.scss';



// 루트요소 선택하기 ///
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

// 루트에 랜더링하기 ////
root.render(
  <>
    <h1>
      <b>선재업고</b>
      <span>튀어</span>
    </h1>
  </>
);