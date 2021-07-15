import { Link } from '@reach/router'

function IndexPage() {
  return (
    <div className='IndexPage'>
      <h1>Index Page</h1>
      <Link to='/home'>Go to Home</Link>
    </div>
  )
}

export default IndexPage
