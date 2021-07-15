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
      >
        {fakeTabs?.map((tab, i) => (
          <Button
            key={tab.value}
            active={tab.value === selectedTab}
            onClick={() => setSelectedTab(tab.value)}
          >
            {tab.label}
          </Button>
        ))}
      </Tabs>
    </div>
  )
}

export default App
