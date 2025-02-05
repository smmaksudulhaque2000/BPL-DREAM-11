import { useEffect, useState } from "react"
import Data from '../data/Data'
import PropTypes from 'prop-types';

function Main({ choosePlayer, setChoosePlayer }) {

    const [fakeData, setFakeData] = useState([]);
    useEffect( () => {
      fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setFakeData(data))
    }, []);

    return (
      <div className="grid grid-cols-3 gap-5 p-5 px-10">
        
        {
                fakeData.map(data => <Data key={data.id} data={data} choosePlayer={choosePlayer} setChoosePlayer={setChoosePlayer}></Data>)
            }
      </div>
    );
  };
  Main.propTypes = {
    choosePlayer: PropTypes.array.isRequired,
    setChoosePlayer: PropTypes.func.isRequired,
};
  export default Main;