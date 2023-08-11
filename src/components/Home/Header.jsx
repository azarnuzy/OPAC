import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Modal from '../General/Dialog'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchSearch,
  getIsLoading,
  getKeyword,
  getSearchFilter,
  setEmptyFormAdvanced,
  setIsLoading,
  setKeyword,
  setSearch,
} from '../../features/search/searchSlice'
import Alert from '../General/Alert'
import { useAlert } from '../context/alert-context'
import Loading from '../General/Loading'

function Header() {
  let [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const { handleNotification } = useAlert()

  const dispatch = useDispatch()
  const keyword = useSelector(getKeyword)
  const searchFilter = useSelector(getSearchFilter)
  const isLoading = useSelector(getIsLoading)

  useEffect(() => {
    dispatch(setSearch(''))
    dispatch(setKeyword(''))
  }, [dispatch])

  const navigate = useNavigate()

  function openModal() {
    setIsOpen(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (keyword !== '') {
      dispatch(
        fetchSearch({
          keyword,
          search: '',
          page: 1,
          limit: 10,
          sort: 'bibid',
          type: 'asc',
        })
      )
      dispatch(setEmptyFormAdvanced())
      navigate(`/search?search=${searchFilter}&keyword=${keyword}`)
    } else {
      setMessage('Kolom pencarian tidak boleh kosong')
      setStatus('Peringatan')
      handleNotification()
    }
  }

  return (
    <div className='w-full h-[calc(100vh-44px)] flex flex-col items-center pt-16 sm:pt-0 sm:justify-center bg-cover object-center relative z-10'>
      <Alert
        message={message}
        status={status}
      />
      <img
        src='/logo1.svg'
        alt='logo'
        className='w-[300px] sm:w-min mb-10'
      />
      <div className='mb-10 text-3xl sm:text-5xl text-center font-bold text-white'>
        Online Public Access Catalog
      </div>
      <form
        onSubmit={handleSubmit}
        className='flex sm:flex-row md:max-w-[600px] items-center bg-search-home px-4 gap-2 relative z-10 sm:py-2 py-3 w-[calc(100%-20px)]'
      >
        {/* <SelectOption
          filters={filters}
          width={'min-w-[120px]'}
          color={'text-white'}
        /> */}
        <div className='flex gap-1 w-full pl-2 items-center'>
          <label htmlFor='search-input'>
            <img
              src='/search.svg'
              alt='search'
              width={20}
              className=''
            />
          </label>
          <input
            id='search-input'
            value={keyword}
            placeholder='Ketik disini'
            className='w-full text-white bg-transparent text-lg focus:outline-none placeholder-white  py-1'
            onChange={(e) => dispatch(setKeyword(e.target.value))}
          />
        </div>
        <button
          className='bg-white rounded-3xl px-4 text-dark-blue text-sm font-semibold w-fit py-1 flex  items-center text-center'
          type='submit'
        >
          Search
        </button>
      </form>
      <div className='relative w-full sm:w-[650px] flex justify-center'>
        <div className='flex justify-center items-center absolute bg-white z-0 rounded-b-2xl text-dark-blue w-[calc(100%-60px)] sm:w-[calc(100%-120px)] gap-2 pb-1 pt-2 -top-1'>
          <p className='font-bold text-dark-blue text-[12px] sm:text-[14px] text-center'>
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
          target='_blank'
          to={'https://perpustakaan.upi.edu/desiderata'}
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
      {/* Loading */}
      <Loading
        isLoading={isLoading}
        setIsLoading={dispatch(setIsLoading)}
      />
    </div>
  )
}

export default Header
