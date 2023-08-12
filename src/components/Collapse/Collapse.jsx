import s from './Collapse.module.css'
import Card from './Card/Card'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'


const Collapse = () => {
  let [collapse, setCollapse] = useState('expandedLabel')

  const onCollapse = () => {
    collapse === 'collapsedLabel' ? setCollapse('expandedLabel') : setCollapse('collapsedLabel')
  }
  
  return (
    <Routes>
      <Route path='/collapse' element={
        <div className={ s.container }>
          <p>
            <a className="btn btn-primary" href="#collapseExample" onClick={onCollapse} style={{marginRight: '20px'}}>
              Link with href
            </a>
            <button className="btn btn-primary" type="button" onClick={onCollapse}>
              Button with data-bs-target
            </button>
          </p>
          <Card collapse={ collapse }/>
        </div>
      } />
    </Routes>
  )
}

export default Collapse 