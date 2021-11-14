import React from 'react';

function Food({ fav }) {
  return <h1>i like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>hello</h1>
      {/* 푸드 컴포넌트에게 application에서 정보를 보낸다 */}
      <Food fav='kimchi' />
      <Food fav='쌀국수' />
      <Food fav='참치' />
      <Food fav='삼겹살' />
    </div>
  );
}

export default App;
