import React from 'react';

// function HelloProps(HelloPName){
//     return (
//         <>
//             <div style={{ color: HelloPName.color }}>반갑습니다. 빨강이에요{HelloPName.name}</div>
//         </>
//     )
// }
function HelloProps({ color, name, isSpaecial }){
    return (
        <>
            <div style={{ color }}>
                {/* { isSpaecial ? <b>*</b> : null } */}
                { isSpaecial && <b>*</b> }
                안녕하세요. 빨강이에요{name}
            </div>
        </>
    )
}

HelloProps.defaultProps = {
    name: '이름없음'
}

export default HelloProps;