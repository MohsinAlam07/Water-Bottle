import React from 'react';

const Bottle = ({bottle}) => {
    const {img,}=bottle;
    return (
        <div>
            <img src={img} alt="" />
            
        </div>
    );
};

export default Bottle;