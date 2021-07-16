import { Router } from '@reach/router'
import ButtonDemoPage from './containers/ButtonDemoPage'
import FormPage from './containers/FormPage'
import HomePage from './containers/HomePage'
import IndexPage from './containers/IndexPage'

function App() {
  return (
    <Router>
      <IndexPage path='/' />
      <HomePage path='/home' />
      <ButtonDemoPage path='/btn' />
      <FormPage path='/form' />
    </Router>
  )
}

export default App
