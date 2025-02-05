import { useState } from 'react'
import './App.css'
import Choose from './components/choose/Choose'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Inner from './components/inner/Inner'

function App() {

  const [choosePlayer, setChoosePlayer] = useState([]);
  

  return (
    <>
      <Header></Header>
      <div>
      <Inner choosePlayer={choosePlayer} setChoosePlayer={setChoosePlayer}></Inner>
      <Choose choosePlayer={choosePlayer}></Choose>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
