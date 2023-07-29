import { Link } from 'react-router-dom'
import SelectOption from '../Form/SelectOption'
import { useState } from 'react'
import Modal from '../General/Dialog'

const filters = [
  { name: 'Judul' },
  { name: 'Subjek' },
  { name: 'Klasifikasi DDC' },
  { name: 'Material' },
  { name: 'Tahun' },
  { name: 'Pengarang' },
]

function Header() {
  let [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }
  return (
    <div className='w-full h-[calc(100vh-44px)] flex flex-col items-center pt-16 sm:pt-0 sm:justify-center bg-cover object-center relative z-10'>
      <img
        src='/logo1.svg'
        alt='logo'
        className='w-[300px] sm:w-min mb-10'
      />
      <div className='mb-10 text-3xl sm:text-5xl text-center font-bold text-white'>
        Online Public Access Catalog
      </div>
      <div className='flex flex-col sm:flex-row md:max-w-[912px] bg-search-home px-4 gap-2 relative z-10 sm:py-2 py-3'>
        <SelectOption
          filters={filters}
          width={'min-w-[120px]'}
          color={'text-white'}
        />
        <div className='flex gap-1 w-[350px] items-center'>
          <label htmlFor='search-input'>
            <img
              src='/search.svg'
              alt='search'
              width={16}
              className='opacity-90'
            />
          </label>
          <input
            id='search-input'
            placeholder='Ketik disini'
            className='w-full text-white bg-transparent text-sm focus:outline-none placeholder-white opacity-90 py-1'
          />
        </div>
        <button
          className='bg-white rounded-2xl px-4 text-dark-blue text-sm font-semibold sm:w-min w-[150px] py-1 mx-auto'
          type='submit'
        >
          Search
        </button>
      </div>
      <div className='relative w-full sm:w-[650px] flex justify-center'>
        <div className='flex justify-center items-center absolute bg-white z-0 rounded-b-2xl text-dark-blue w-[calc(100%-60px)] sm:w-[calc(100%-120px)] gap-2 pb-1 pt-2 -top-1'>
          <p className='font-bold text-dark-blue text-[12px] text-center'>
            Cari berdasarkan judul, subjek, tahun, pengarang, dll
          </p>
          <div className='w-[1px] h-[20px] bg-dark-blue opacity-80'></div>
          <button
            type='button'
            onClick={openModal}
            className='text-dark-blue w-auto text-[14px] underline font-bold'
          >
            Advanced Search
          </button>
        </div>
      </div>
      <div className='px-4 py-2 bg-search-home mt-20'>
        <Link
          to={'/#'}
          className='text-white text-[14px] underline font-bold'
        >
          Usulkan Buku Baru
        </Link>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  )
}

export default Header
