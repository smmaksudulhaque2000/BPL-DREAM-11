import PropTypes from 'prop-types';
// Icon
import { CgProfile } from "react-icons/cg";
import { IoFlag } from "react-icons/io5";
// Icon
import { toast } from 'react-toastify';

const Data = ({ data, choosePlayer, setChoosePlayer }) => {
    const { image, name, position, nationality, rating, batingposition, bowlingposition, price } = data;

    const addPlayer = () => {
        if (choosePlayer.length >= 6) {
            toast.error("You cannot add more than six players!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
            return;
        }

        const isPlayerExists = choosePlayer.some(player => player.id === data.id);

        if (isPlayerExists) {
            toast.info("This player is already added!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
        } else {
            const newChoosePlayer = [...choosePlayer, data];
            setChoosePlayer(newChoosePlayer);
            toast.success("Player added successfully!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
        }
    };

    return (
        <div className='border p-5 rounded-xl flex flex-col gap-3'>
{/* Image Start */}
            <div>
                <img className='w-full h-[250px] rounded-xl' src={image} alt="Player Image" />
            </div>
{/* Image End */}
{/* Icon Start */}
            <div className='flex gap-4 items-center'>
                <CgProfile className='text-xl' />
                <span className='font-bold'>{name}</span>
            </div>
{/* Icon End */}
{/* Details Start */}
            <div className='flex justify-between items-center'>
                <div className='flex gap-4'>
                    <IoFlag className='text-gray-500 text-xl' />
                    <span>{nationality}</span>
                </div>
                <div>
                    <span className='bg-gray-300 text-sm p-1 rounded'>{position}</span>
                </div>
            </div>
            <hr className='my-4' />

            <div className='flex flex-col gap-5'>
                <div className='flex justify-between items-center'>
                    <p> Rating :</p>
                    <p>{rating}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p>{batingposition}</p>
                    <p className='text-gray-500'>{bowlingposition}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <p>Price : ${price}</p>
                    </div>
                    <div>
                        <button onClick={addPlayer} className='bg-gray-300 p-2 rounded text-sm'>Choose Player</button>
                    </div>
                </div>
            </div>
            {/* Details End */}
        </div>
    );
};

Data.propTypes = {
    data: PropTypes.object.isRequired,
    choosePlayer: PropTypes.array.isRequired,
    setChoosePlayer: PropTypes.func.isRequired,
};

export default Data;
