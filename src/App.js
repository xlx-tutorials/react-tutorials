import Button from './components/Button'

export const buttonStyle = {
  color: 'slateblue',
  background: 'lavender',
  padding: 12,
}

function App() {
  return (
    <div className='App'>
      <Button>Click Me</Button>
      <Button variant='secondary'>Click Me</Button>
      <Button variant='danger'>Click Me</Button>
    </div>
  )
}

export default App
