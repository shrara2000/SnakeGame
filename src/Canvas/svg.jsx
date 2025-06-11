import React from 'react';

const SvgCanvas = ({
    width = 800,
    height = 600,
    style = {},
    children,
    ...props
}) => {
   
    return(
    <svg id='Canvas'
        width={width}
        height={height}
        style={{ border: '1px solid  ', borderRadius:'5px', ...style }}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        {children}
    </svg>)
};

export default SvgCanvas;