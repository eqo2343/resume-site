
import './App.css'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Display from './components/Display';
import Canvas from './components/Canvas';
import { useState } from 'react';
import cloud from '/home/eqo234/resume-site/resume-site/Resume/src/assets/custom-cloud.svg'


function App() {
  const [view, setView] = useState(<Canvas />);  
   const [header, setHeader] = useState("Ej's Game Corner")


  return (
    <>
      <section className='h-screen w-screen p-10 bg-repeat' >
        <Display view={view} />
        <div>
          <div>
            <Navbar setHeader={setHeader} setView={setView} />
          </div>
          <div className='mt-50'>
            <Header header={header} />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
