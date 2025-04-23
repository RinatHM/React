import React from "react";


const Box = ({ children }) => {
    return (
      <div style={{ border: '2px solid #000', padding: '16px'}}>{children}</div>
    );
  };

  export default Box;