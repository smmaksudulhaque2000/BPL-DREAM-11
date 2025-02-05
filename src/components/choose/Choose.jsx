import PropTypes from 'prop-types';
import '../inner/inner.css'
import { MdDeleteForever } from "react-icons/md";

const Choose = ({ choosePlayer }) => {
    
  return (
    <div className='px-10'>
            <h2>Chooses Player : {choosePlayer.length}/6</h2>
            <div className='flex flex-col'>
                {choosePlayer.map((player, index) => (
                    <div key={index} className='flex justify-between items-center border border-gray-500 p-5 m-2 rounded-md'>
                        <div className='flex items-center gap-3' >
                        <img src={player.image} alt={player.name} className='w-20 h-20 rounded object-cover' />
                        <span>{player.name} <br /> {player.position}</span>
                        </div>
                        <div>
                        <MdDeleteForever className='text-red-500 text-2xl'/>
                        </div>
                    </div>
                    
                ))}
            </div>
            <button className='color-btn siz-btn'>Add More Player</button>
        </div>
  );
};

Choose.propTypes = {
  choosePlayer: PropTypes.array.isRequired,
};

export default Choose;