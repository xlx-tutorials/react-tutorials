import React, { useState } from 'react'

function Count({ value, ...props }) {
  return <h1 {...props}>{value}</h1>
}

export default Count
