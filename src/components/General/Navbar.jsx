import { useState } from 'react'
import SelectOption2 from '../Form/SelectOption2'
import Modal from './Dialog'
import { Link, useNavigate } from 'react-router-dom'
import { useAlert } from '../context/alert-context'
import { useDispatch, useSelector } from 'react-redux'
import {
  getSearch,
  getSubject,
  setSearch,
} from '../../features/search/searchSlice'
import Alert from './Alert'

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
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const { handleNotification } = useAlert()

  const search = useSelector(getSearch)
  const subject = useSelector(getSubject)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  function openModal() {
    setIsOpen(true)
  }
  return (
    <div className='flex flex-col lg:flex-row items-center sm:justify-between w-full mx-auto max-w-7xl lg:px-3 sm:px-5 py-2'>
      <Alert
        message={message}
        status={status}
      />
      <Link to={'/'}>
        <img
          src='/logo2.svg'
          alt='logo'
          className='w-[200px] sm:w-[300px]'
        />
      </Link>
      <div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal gap-2 items-center'>
        <SelectOption2
          filters={filters}
          width='w-[300px]  lg:min-w-[150px] '
        />
        <input
          type='text'
          placeholder='Ketik disini'
          className='w-[300px] text-light-gray-3 bg-slate-200 text-sm focus:outline-none placeholder-light-gray-3 opacity-70 py-2 px-3 rounded-lg'
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
        <button
          className='flex items-center pl-2 pr-4 lg:p-0 gap-2 bg-light-gray rounded-full'
          type='submit'
          onClick={() => {
            if (search !== '') {
              navigate(`/search?search=${search}&subject=${subject}`)
            } else {
              setMessage('Kolom pencarian tidak boleh kosong')
              setStatus('Peringatan')
              handleNotification()
            }
          }}
        >
          <img
            src='/search2.svg'
            alt='search'
            width={38}
            className='p-2'
          />
          <p className='lg:hidden text-light-gray-3 font-semibold'>Search</p>
        </button>
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
