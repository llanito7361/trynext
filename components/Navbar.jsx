import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='text-black font-bold bg-slate-300 mb-4 flex justify-between items-center px-10 p-3'>
        <Link className='' href='/'>Home</Link>

        <ul>
            <li><Link href='/about'>about</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar