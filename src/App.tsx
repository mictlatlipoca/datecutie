import { useState } from 'react'
import './App.css'
import swann from "./assets/swann.gif"
import FlowerButton from './components/FlowerButton'

function App() {
  const [count, setCount] = useState(-1)

  const question = ['Will', 'you', 'go', 'on', 'a date', 'with', 'me?']

  const showWords = () => {
    if (count < -1) {
      setCount(-1)
    } else if (count >= 6) {
      setCount(6)
    } else {
      setCount(count + 1)
    }
  }

  return (
    <div className=' w-full flex flex-col gap-10 text-center items-center content-center justify-center align-middle text-xl p-10'>
    <div className=' flex flex-row justify-center items-center text-center content-center m-5'>
      <img src={swann} alt="" className=' w-20' />
      <h1 className=' text-2xl'>Hi, Swann. You've got a message!</h1>
      
    </div>
    <div className=' flex flex-row gap-1 w-80 h-20 bg-amber-50 rounded-xl content-center justify-center align-middle items-center'>
      {
        question.map((e, index) => {
          if(index > count){
            return <p> </p>
          } else {
            return <p key={index}> {e} </p>
          }
          
        } )
      }
    </div>
      <div className=' flex flex-row gap-1'>
        {
        question.map((_, index) => {
          return <div key={index} onClick={() => showWords()}>
            <FlowerButton />
          </div>
        } )
        }
      </div>
      <div className=' animate-bounce'>
        Tap the flowers to reveal!
      </div>
    </div>
  )
}

export default App
