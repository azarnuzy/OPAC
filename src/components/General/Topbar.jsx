function Topbar() {
  return (
    <div className='top-bar-bg py-[10px]'>
      <div className='w-full mx-auto max-w-7xl flex items-center justify-between text-white '>
        <div className='flex gap-8 text-[12px] items-center'>
          <div className='flex gap-2 items-center'>
            <img
              src='/call.svg'
              alt='phone'
            />
            <p>0859-5999-9300</p>
          </div>
          <div className='flex gap-2 items-center'>
            <img
              src='/Mail.svg'
              alt='mail'
            />
            <p>perpustakaan@upi.edu</p>
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <span>INA</span>
          <div className='w-[1px] h-[14px] bg-white'></div>
          <div className='flex gap-1'>
            <img
              src='/Facebook.svg'
              alt='Facebook'
            />
            <img
              src='/Twitter.svg'
              alt='Twitter'
            />
            <img
              src='/Linkedin.svg'
              alt='Linkedin'
            />
            <img
              src='/Youtube.svg'
              alt='Youtube'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
