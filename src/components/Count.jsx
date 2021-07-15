import React, { useState } from 'react'

/**
 *
 * @param {{
 *  value: 'apple' | 'banana'
 * }} param
 */
function Count({ value, ...props }) {
  return <h1 {...props}>{value}</h1>
}

export default Count
