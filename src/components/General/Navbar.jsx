import { useEffect, useState } from 'react'
import Modal from './Dialog'
import { Link, useNavigate } from 'react-router-dom'
import { useAlert } from '../context/alert-context'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchSearch,
  getIsLoading,
  getKeyword,
  getSearchFilter,
  setIsLoading,
  setKeyword,
  setSearch,
} from '../../features/search/searchSlice'
import Alert from './Alert'
import Loading from './Loading'

function Navbar() {
  let [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const { handleNotification } = useAlert()

  const keyword = useSelector(getKeyword)
  const searchFilter = useSelector(getSearchFilter)
  const isLoading = useSelector(getIsLoading)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setSearch(''))
    dispatch(setKeyword(''))
  }, [dispatch])

  function openModal() {
    setIsOpen(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (keyword !== '') {
      dispatch(
        fetchSearch({
          keyword,
          search: searchFilter,
          page: 1,
          limit: 10,
          sort: 'bibid',
          type: 'asc',
        })
      )
      const searchParams = new URLSearchParams({
        keyword,
        page: 1,
        limit: 10,
        sort: 'bibid',
        type: 'asc',
      })
      navigate({
        pathname: '/search',
        search: searchParams.toString(),
      })
    } else {
      setMessage('Kolom pencarian tidak boleh kosong')
      setStatus('Peringatan')
      handleNotification()
    }
  }

  return (
    <>
      <div className='flex flex-col lg:flex-row items-center sm:justify-between w-full mx-auto max-w-7xl lg:px-3 sm:px-5 py-2'>
        <Link to={'/'}>
          <img
            src='/opacnew/opac/logo2.svg'
            alt='logo'
            className='w-[200px] sm:w-[300px]'
          />
        </Link>
        <form
          onSubmit={handleSubmit}
          className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal gap-2 items-center'
        >
          {/* <SelectOption2
          filters={filters}
          width='w-[300px]  lg:min-w-[150px] '
        /> */}
          <input
            type='text'
            placeholder='Ketik disini'
            className='w-[350px] text-light-gray-3 bg-slate-200  focus:outline-none placeholder-light-gray-3 opacity-70 py-2 px-3 rounded-lg'
            value={keyword}
            onChange={(e) => dispatch(setKeyword(e.target.value))}
          />
          <button
            className='flex items-center pl-2 pr-4 lg:p-0 gap-2 bg-light-gray rounded-full'
            type='submit'
          >
            <img
              src='/opacnew/opac/search2.svg'
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
        </form>
      </div>
      {/* Alert */}
      <Alert
        message={message}
        status={status}
      />
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
    </>
  )
}

export default Navbar
