import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Tank from './Tank.jsx'
import Block from './Block.jsx'
import Statue from './Statue.jsx'
import StrongBlock from './StrongBlock.jsx'
import Enemy from './Enemy.jsx'
import TreeBlock from './TreeBlock.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tank />
    <Statue />
    <Block position_top={550} position_left={600}/>
    <Block position_top={500} position_left={600}/>
    <Block position_top={500} position_left={650}/>
    <Block position_top={500} position_left={700}/>
    <Block position_top={550} position_left={700} />
    <Block position_top={200} position_left={100}/>
    <StrongBlock />
    <Enemy />
    <TreeBlock />
  </StrictMode>,
)
