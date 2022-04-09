import React, { useState } from "react";

// function InputSample() {
//     const [text, setText] = useState('');

//     const onChange = (e) => {
//         setText(e.target.value);
        
//     };

//     const onReset = () => {
//         setText('');
//     };

//     return (
//         <div>
//             <input onChange={onChange} value={text} />
//             <button onClick={onReset}>초기화</button>
//             <div>
//                 <b>값:{text}</b>
//             </div>
//         </div>
//     )
// }


function InputSample() {

    const [inputs, setInputs] = useState({
        name:'',
        nickname:''
    });

    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
            // inputs[name] = value; 이렇게 말고 위처럼 해야함.
            // 리액트에서 객체를 업데이트하게 될 때에는 기존 객체를 직접 수정하면 안되고, 새로운 객체를 만들어서, 새 객체에 변화를 주어야 됩니다.
        });
    };

    const onReset = () => {
        setInputs({
            name:'',
            nickname:'',
        })
    };

    return (
        <div>
            <input placeholder="이름" onChange={onChange} value={name} />
            <input placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={ onReset }> 초기화 </button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;