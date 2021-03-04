import React from 'react';

const AbsoluteComponent = ({ children }) => {
    return (
        <div className="position-absolute w-100">
            {children}        
        </div>
    );
};

export default AbsoluteComponent;