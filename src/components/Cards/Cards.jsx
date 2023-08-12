import { Route, Routes } from 'react-router-dom'
import Card from './Card/Card'
import s from './Cards.module.css'

let state = {
  title: 'Card title',
  img: './src/components/Cards/assets/akkuyu.jpg',
  article: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  nameBtn: 'Go somewhere'
}

const Cards = () => {
  return (
    <Routes>
      <Route path='/cards' element={
        <div className={ s.container }>
          <div className="card" style={{width: '18rem'}}>
            <img src={ state.img } class="card-img-top" alt="Akkuyu" />
            <Card state={ state }/>
          </div>
        </div>
      } />
    </Routes>
  )
}
export default Cards


