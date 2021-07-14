import { useState } from 'react'
import Button from './components/Button'
import Tabs from './components/Tabs'

export const buttonStyle = {
  color: 'slateblue',
  background: 'lavender',
  padding: 12,
}

const fakeTabs = [
  {
    label: 'Home',
    value: 'home',
  },
  {
    label: 'About',
    value: 'about',
  },
  {
    label: 'Download',
    value: 'download',
  },
]

function App() {
  const [selectedTab, setSelectedTab] = useState('about')

  return (
    <div className='App'>
      <Tabs
        tabsList={fakeTabs}
        defaultValue={selectedTab}
        onChange={(val) => {
          setSelectedTab(val)
        }}
      />
    </div>
  )
}

export default App
