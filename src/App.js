/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import Button from './components/Button'
import Tabs from './components/Tabs'
import { button, text } from './button.module.css'
import './scss/index.scss'
import { List, ListItem } from './components/List'
// import { css } from '@emotion/css'
import { css } from '@emotion/react'

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

/**
 * @type {import('react').CSSProperties}
 */
const selectedStyle = {
  background: 'slateblue',
  color: 'white',
}

const HeadingCSS = css`
  color: red;
  font-weight: bold;
`
const textCSS = css`
  span {
    text-decoration: underline;
  }
`
function App() {
  const [selectedTab, setSelectedTab] = useState('about')
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className='Heading' css={HeadingCSS}>
        Hello worlds
      </div>

      <p
        style={{
          fontSize: 12 + count,
        }}
        css={textCSS}
      >
        <span>{count}</span>
      </p>
      <Button onClick={() => setCount(count + 1)}>+</Button>

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

      <List>
        <ListItem selected>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
          labore minus amet natus esse porro eius autem harum, debitis
          exercitationem possimus saepe fuga? Incidunt quasi, odio at porro
          repellat voluptatum.
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
          labore minus amet natus esse porro eius autem harum, debitis
          exercitationem possimus saepe fuga? Incidunt quasi, odio at porro
          repellat voluptatum.
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
          labore minus amet natus esse porro eius autem harum, debitis
          exercitationem possimus saepe fuga? Incidunt quasi, odio at porro
          repellat voluptatum.
        </ListItem>
      </List>

      <h1 className='heading'>Lorem ipsum dolor sit amet consectetur.</h1>
    </div>
  )
}

export default App
