// 无状态组件
function Tabs({ children }) {
  return (
    <div
      className='Tabs'
      style={{
        padding: '8px 18px',
        borderRadius: 8,
        background: 'lavender',
      }}
    >
      {children}
    </div>
  )
}

export default Tabs
