import { useEffect, useRef, useState } from 'react'
import Button from '../../components/Button'
import Tabs from '../../components/Tabs'
import { button, text } from './button.module.css'
import '../../scss/index.scss'
import { List, ListItem } from '../../components/List'
// import { css } from '@emotion/css'
import { css } from '@emotion/react'
import { TITLE } from '../../constants/config'
import Select from '../../components/Select'
import Count from '../../components/Count'
import { Link, navigate } from '@reach/router'

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
function HomePage({ auth }) {
  const [selectedTab, setSelectedTab] = useState('about')
  const [count, setCount] = useState(0)
  const mountedRef = useRef(false)
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    if (mountedRef.current) {
      console.log(1)
    } else {
      mountedRef.current = true
    }
  }, [count])

  return (
    <div className='App'>
      <button onClick={() => navigate(-1)}>back to prev path</button>
      <Link to='/'>Back to Index Page</Link>
      <Count value={count2} onClick={() => setCount2(count2 + 1)} />
      <Select
        list={[
          { value: 'apple', label: 'Apple' },
          { value: 'banana', label: 'Banana' },
          { value: 'orange', label: 'Orange' },
        ]}
        defaultValue='orange'
        onChange={(newValue) => alert(newValue)}
      />
      <button>refresh ref</button>
      <div className='Heading' css={HeadingCSS}>
        {TITLE}
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

export default HomePage
