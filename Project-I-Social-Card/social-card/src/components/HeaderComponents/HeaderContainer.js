import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';

const HeaderContainer = () => {
    return (
        <div className="headerContainer">
            <header>
                <ImageThumbnail />
                <div className="headerContent">
                    <HeaderTitle />
                    <HeaderContent />
                </div>
            </header>
        </div>
    );
  };
  
export default HeaderContainer;