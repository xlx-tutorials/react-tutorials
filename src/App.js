import { useState } from 'react'
import Button from './components/Button'
import Tabs from './components/Tabs'
import { button, text } from './button.module.css'
import './scss/index.scss'

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

      <button className={button}>
        <span className={text}>click me</span>
      </button>

      <h1 className='heading'>Lorem ipsum dolor sit amet consectetur.</h1>
    </div>
  )
}

export default App
