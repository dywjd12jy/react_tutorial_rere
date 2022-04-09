import React, { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        // console.log('+1')
        // setNumber(number + 1);
        setNumber(prevNumber => prevNumber + 1);
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        // console.log('-1')
        // setNumber(number - 1);
        setNumber(number - 1); 
        setNumber(number - 1); 
        setNumber(nextNumber => nextNumber - 1);
        setNumber(nextNumber => nextNumber - 1);

        // 함수형태로 써서 전달하면 동기적으로 처리 가능
        // 신기... (화살표) 함수형 으로 준거는 중복적으로 주어도 쌓여서 나옴 
        // 함수형 아닌것은 중복으로 주어도 하나만 나옴 
    }
    
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;