import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/">Matt</Link>
      <Link to="/about">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/blog">Blog</Link>
    </div>
  )
}

export default Navbar