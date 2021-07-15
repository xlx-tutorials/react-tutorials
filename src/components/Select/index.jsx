import { useEffect, useRef, useState } from 'react'

function Select({ list, onChange, defaultValue }) {
  const [selected, setSelected] = useState(defaultValue ?? list[0].value)
  const mountedRef = useRef(false)

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true
    } else {
      if (onChange && mountedRef.current) onChange(selected)
    }
  }, [selected])

  return (
    <select
      defaultValue={selected}
      onChange={(ev) => setSelected(ev.target.value)}
    >
      {list?.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  )
}

export default Select
