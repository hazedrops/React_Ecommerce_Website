function Hero() {
  return (
    <section className='min-h-screen flex items-center pt-20'>
      <div className='max-w-6xl mx-auto px-6'>
        <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
          Hello, I'm <span className='text-blue-500'>Yoonjeong Choi</span>
        </h1>

        <h2 className='text-2xl md:text-3xl mt-4 text-gray-300'>
          Front-End Developer
        </h2>

        <p className='mt-6 max-w-xl text-gray-400'>
          I build modern, responsive, and user-friendly web applications using
          React and modern frontend technologies.
        </p>

        <div className='mt-8 flex gap-4'>
          <a
            href='#projects'
            className='px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition'
          >
            View Projects
          </a>

          <a
            href='#contact'
            className='px-6 py-3 border border-gray-600 rounded-lg hover:border-blue-500 hover:text-blue-500 transition'
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
