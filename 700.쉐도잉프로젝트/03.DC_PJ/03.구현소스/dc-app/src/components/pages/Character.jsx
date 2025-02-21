// DC.com 캐릭터 페이지 컴포넌트 - Character.jsx ////

import React from 'react';
import Banner from '../modules/Banner';

function Character(props) {
    return (
        <div>
            <h1>나는 캐릭터 페이지야!</h1>
            {/* 1. 배너 컴포넌트 */}
            <Banner />
            
        </div>
    );
}

export default Character;