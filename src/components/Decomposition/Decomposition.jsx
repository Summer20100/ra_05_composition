import { Route, Routes } from 'react-router-dom'
import s from './Decomposition.module.css'
import Header from './Header/Header'
import List from './List/List'
import Search from './Search/Search'
import Advert from './Advert/Advert'
import NewsCard from './NewsCard/NewsCard'

let state = {
  header: { title: 'Сейчас новости', date: 'ДД.ММ.ГГГГ', url: '/...' } ,
  listNews: [
    { id: '...', img: '/...', title: 'Заголовок новости', link: '/...' },
    { id: '...', img: '/...', title: 'Заголовок новости', link: '/...' }
  ],
  currency: [
    {name: 'USD', val: 100},
    {name: 'EUR', val: 200},
    {name: 'TRY', val: 500},
  ],
  advertList: { img: '/...', title: 'Заголовок рекламы', text: 'Текст рекламы', link: '/...' },
  searchBodyType: [
    { title: 'Тип', link: '/...' },
    { title: 'Тип', link: '/...' },
    { title: 'Тип', link: '/...' },
  ],
  advertSearch: { img: '/...', link: '...' },
  newsCard: [
    { title: 'ЗВЕРИ', text: ['Кошки', 'Мыши', 'Собаки'] },
    { title: 'ТРАНСПОРТ', text: ['Машины', 'Лодки', 'Мотоциклы', 'Самолёты', 'Велосипеды'] },
    { title: 'ЕДА', text: ['Лахмаджун', 'Кёнефе', 'Эларжи', 'Борщ'] },{ title: 'ЗВЕРИ', text: ['Кошки', 'Мыши', 'Собаки'] },
    { title: 'ЕДА', text: ['Лахмаджун', 'Кёнефе', 'Эларжи', 'Борщ'] },{ title: 'ЗВЕРИ', text: ['Кошки', 'Мыши', 'Собаки'] },
    { title: 'ТРАНСПОРТ', text: ['Машины', 'Лодки', 'Мотоциклы', 'Самолёты', 'Велосипеды'] },
    { title: 'ЕДА', text: ['Лахмаджун', 'Кёнефе', 'Эларжи', 'Борщ'] }
  ]
}

const decomposition = () => {
  return (
    <Routes>
      <Route path='/decomposition' element={
        <div className={s.container}>
          <Header header={state.header} />
          <List list={state.listNews} advert={state.advertList} currency={ state.currency }/>
          <Search content={state.searchBodyType} />
          <Advert advert={state.advertSearch} />
          <NewsCard news={state.newsCard} />
        </div>
      } />
    </Routes>
  )
}

export default decomposition 