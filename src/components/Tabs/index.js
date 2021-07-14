import { useState } from 'react'
import Button from '../Button'

// const list = [
//   {
//     value: 'dasd',
//     label: 'dad',
//   }
// ]

function Tabs({ tabsList, defaultValue = 0, onChange }) {
  const [curIndex, setCurIndex] = useState(
    tabsList.findIndex((item) => item.value === defaultValue)
  )

  function handleClick(i, tab) {
    setCurIndex(i)
    if (onChange) onChange(tab.value)
  }

  if (!tabsList) return null
  return (
    <div
      className='Tabs'
      style={{
        padding: '8px 18px',
        borderRadius: 8,
        background: 'lavender',
      }}
    >
      {tabsList?.map((tab, i) => (
        <Button
          key={tab.value}
          active={curIndex === i}
          onClick={() => handleClick(i, tab)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  )
}

export default Tabs
