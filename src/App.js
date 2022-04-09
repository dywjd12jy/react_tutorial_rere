import React from 'react';
import Hello2 from './components/Hello';
import HelloProps from './components/HelloProps';
import './App.css';
import Wrapper from './components/Wrapper';
import Counter from './components/Counter';
import InputSample from './components/InputSample';

function App() {
  const name = '리액트';
  const style2 = {
    backgroundColor:'black',
    color :'aqua',
    fontSize: 24, //기본단위 px
    padding: '1rem' // 다른단위 사용 시 문자열 사용
  }
  return (
    <>
      <Hello2 />
      <div style={style2}>{name}</div>
      <div className='gray-box'></div>
      {/* 주석 > 중괄호 필수*/}
      <Wrapper>
        <HelloProps name = "HelloPName" color="red" isSpaecial={true} />
                                      {/* isSpaecial 를 이름만 넣으면 isSpaecial={true} 와 같은 의미*/}
        <HelloProps color = "pink" />
      </Wrapper>
      <Counter />
      <InputSample />
    </>
  );
  
}

export default App;
