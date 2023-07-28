import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-dark-gray relative overflow-hidden'>
      <div className='absolute -top-10 -left-5 overflow-hidden'>
        <img
          src='/ornament1.svg'
          alt='ornament'
        />
      </div>
      <div className='absolute -bottom-10 right-0 overflow-hidden'>
        <img
          src='/ornament1.svg'
          alt='ornament'
        />
      </div>
      <div className='w-full mx-auto max-w-7xl flex items-center justify-between text-white relative py-4'>
        <div className='flex flex-col gap-8 max-w-[360px]'>
          <img
            src='/logo1.svg'
            alt='logo'
            className='w-[300px]'
          />
          <p>Online Public Access Catalog Universitas Pendidikan Indonesia</p>
          <div className='flex justify-between items-center'>
            <Link>
              <img
                src='/facebook-circle.svg'
                alt='facebook'
                width={30}
              />
            </Link>
            <Link>
              <img
                src='/linkedin-circle.svg'
                alt='linkedin'
                width={30}
              />
            </Link>
            <Link>
              <img
                src='/Twitter.svg'
                alt='twitter'
                width={30}
              />
            </Link>
            <Link>
              <img
                src='/youtube-circle.svg'
                alt='youtube'
                width={30}
              />
            </Link>
          </div>
          <p>© 2023 UPI. All Rights Reserved.</p>
        </div>
        <div className='flex flex-col gap-8'>
          <h4 className='text-xl font-semibold'>IMPORTANT LINKS</h4>
          <ul className='list-none text-lg'>
            <li>
              <Link to={'/#'}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={'/#'}>FAQs</Link>
            </li>
            <li>
              <Link to={'/#'}>Terms of Services</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
