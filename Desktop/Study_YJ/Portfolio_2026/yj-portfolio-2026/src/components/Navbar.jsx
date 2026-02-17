function Navbar() {
  return (
    <nav className='fixed w-full bg-slate-900/80 backdrop-blur-md z-50'>
      <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
        <h1 className='text-xl font-bold text-blue-400'>YOONJEONG CHOI</h1>
        <ul className='hidden md:flex gap-8 text-gray-300'>
          <li className='hover:text-blue-400 cursor-pointer'>
            <a href='#about'>About</a>
          </li>
          <li className='hover:text-blue-400 cursor-pointer'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='hover:text-blue-400 cursor-pointer'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
