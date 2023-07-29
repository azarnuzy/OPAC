import { useState } from 'react'
import SelectOption2 from '../Form/SelectOption2'
import Modal from './Dialog'

const filters = [
  { name: 'Judul' },
  { name: 'Subjek' },
  { name: 'Klasifikasi DDC' },
  { name: 'Material' },
  { name: 'Tahun' },
  { name: 'Pengarang' },
]

function Navbar() {
  let [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }
  return (
    <div className='flex flex-col lg:flex-row items-center sm:justify-between w-full mx-auto max-w-7xl lg:px-3 sm:px-5 py-2'>
      <img
        src='/logo2.svg'
        alt='logo'
        className='w-[200px] sm:w-[300px]'
      />
      <div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal gap-2 items-center'>
        <SelectOption2
          filters={filters}
          width='w-[300px]  lg:min-w-[150px] '
        />
        <input
          type='text'
          placeholder='Ketik disini'
          className='w-[300px] text-light-gray-3 bg-slate-200 text-sm focus:outline-none placeholder-light-gray-3 opacity-70 py-2 px-3 rounded-lg'
        />
        <div className='flex items-center pl-2 pr-4 lg:p-0 gap-2 bg-light-gray rounded-full'>
          <img
            src='/search2.svg'
            alt='search'
            width={38}
            className='p-2'
          />
          <p className='lg:hidden text-light-gray-3 font-semibold'>Search</p>
        </div>
        <div className=' w-[1px] bg-gray-400 h-[40px] sm:flex items-center mx-2'></div>
        <button
          type='button'
          onClick={openModal}
          className=' text-light-gray-3 bg-slate-200 py-2 rounded-lg w-auto text-[14px] px-3 font-bold'
        >
          Advanced Search
        </button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  )
}

export default Navbar
