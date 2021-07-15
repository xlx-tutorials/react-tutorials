import { Router } from '@reach/router'
import HomePage from './containers/HomePage'
import IndexPage from './containers/IndexPage'

function App() {
  return (
    <Router>
      <IndexPage path='/' />
      <HomePage path='/home' />
    </Router>
  )
}

export default App
