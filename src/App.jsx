
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'

function App() {
 

  return (
    <section className='max-w-5xl mx-auto'>
    <Header></Header>
     <Outlet></Outlet>
    </section>
  )
}

export default App
