import { useState } from 'react';
import Main from '../main/Main';
import './inner.css';
import PropTypes from 'prop-types';

const Inner = ({ choosePlayer, setChoosePlayer }) => {

    const [showMain, setShowMain] = useState(true);
    const [activeButton, setActiveButton] = useState('available');
    

// Available Button
    function CallMain() {
        setShowMain(true);
        setActiveButton('available');
    }

// Selected Button
    function HideMain() {
        setShowMain(false);
        setActiveButton('selected');
    }

    return (
        <div className='p-10'>
            <div className='flex items-center justify-between p-5'>
                <h3 className='text-4xl font-bold'>Available Players</h3>
                <div>
{/* Available Button Start*/}
                    <button
                        className={`siz-btn left-btn ${activeButton === 'available' ? 'color-btn' : ''}`}
                        onClick={CallMain}>Available</button>

{/* Selected Button Start*/}
                    <button
                        className={`siz-btn right-btn ${activeButton === 'selected' ? 'color-btn' : ''}`}
                        onClick={HideMain}>Selected {choosePlayer.length}/6</button>
                </div>
            </div>
            {showMain && <Main choosePlayer={choosePlayer} setChoosePlayer={setChoosePlayer} />}
            
        </div>
    );
};
Inner.propTypes = {
    choosePlayer: PropTypes.array.isRequired,
    setChoosePlayer: PropTypes.func.isRequired,
};
export default Inner;