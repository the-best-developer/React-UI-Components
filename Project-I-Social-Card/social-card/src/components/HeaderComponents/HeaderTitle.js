import React from 'react';
import './Header.css';

const HeaderTitleTimeStamp = () => {
    return (
        <span>@LambdaSchool · 26 jan</span>
        
    );
};

const HeaderTitle = () => {
    return (
        <div className="headerTitle">
            <h1>Lambda School</h1>
            <HeaderTitleTimeStamp />
        </div>
    );
};


export default HeaderTitle;