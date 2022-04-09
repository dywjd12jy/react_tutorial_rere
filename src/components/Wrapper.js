import React from 'react';

function Wrapper({ children }) {
  const WrpStyle = {
    border: '2px solid red',
    padding: 16,
  };
  return (
    <div style={WrpStyle}>
        { children } {/* children 로 사용해야함 */}
    </div>
  )
}

export default Wrapper;