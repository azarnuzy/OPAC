function Topbar() {
  return (
    <div className='top-bar-bg py-[10px]'>
      <div className='w-full mx-auto max-w-7xl lg:px-3 sm:px-5  flex items-center justify-center sm:justify-between text-white '>
        <div className='flex gap-8 text-[12px] items-center'>
          <div className='flex gap-2 items-center'>
            <img
              src='/opacnew/opac/call.svg'
              alt='phone'
            />
            <p>0859-5999-9300</p>
          </div>
          <div className='flex gap-2 items-center'>
            <img
              src='/opacnew/opac/Mail.svg'
              alt='mail'
            />
            <p>perpustakaan@upi.edu</p>
          </div>
        </div>
        <div className='hidden sm:flex gap-2 items-center '>
          <span>INA</span>
          <div className='w-[1px] h-[14px] bg-white'></div>
          <div className='flex gap-1'>
            <img
              src='/opacnew/opac/Facebook.svg'
              alt='Facebook'
            />
            <img
              src='/opacnew/opac/Twitter.svg'
              alt='Twitter'
            />
            <img
              src='/opacnew/opac/Linkedin.svg'
              alt='Linkedin'
            />
            <img
              src='/opacnew/opac/Youtube.svg'
              alt='Youtube'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
