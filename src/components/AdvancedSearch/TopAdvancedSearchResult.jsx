import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  getLimit,
  getPage,
  getTotalData,
} from '../../features/search/searchSlice'
import SelectOption6 from '../Form/SelectOption6'

const filters = [
  { name: 'Paling Relevan' },
  { name: 'Dari yang Terbaru' },
  { name: 'Dari yang Terlama' },
]

function TopAdvancedSearchResult() {
  const page = useSelector(getPage)
  const limit = useSelector(getLimit)
  const totalData = useSelector(getTotalData)

  return (
    <div className=' border-t-[1px] border-light-grayw-full'>
      <div className='flex flex-col sm:flex-row  justify-center sm:justify-between max-w-7xl lg:px-3 sm:px-5 pt-5 sm:py-2 border-t-[1px] border-light-gray mx-auto w-full flex-wrap gap-y-3 items-center'>
        <div className='flex gap-2 items-center'>
          <Link
            className='text-light-gray font-medium hover:underline'
            to='/'
          >
            Pencarian
          </Link>
          <div className='rotate-[10deg] w-[1px] bg-light-gray h-[20px]'></div>
          <div className=' text-light-gray-3 cursor-pointer  hover:underline'>
            Hasil Pencarian
          </div>
        </div>
        <div className='order-3 lg:order-2 flex flex-col sm:flex-row justify-center w-full sm:w-fit md:w-full md:mx-auto lg:w-fit gap-2 items-center px-4 sm:px-0'>
          <p className='text-light-gray-3 font-semibold'>
            Menampilkan Pencarian
          </p>
          <img
            src='/arrow.svg'
            alt='arrow'
            width={30}
            className='hidden sm:block'
          />
          <p className='font-semibold text-light-gray-3'>
            {(page - 1) * limit + 1} - {Math.min(page * limit, totalData)} dari{' '}
            {totalData} data
          </p>
        </div>
        <div className='order-2 lg:order-3'>
          <SelectOption6
            filters={filters}
            width='w-fit'
          />
        </div>
      </div>
    </div>
  )
}

export default TopAdvancedSearchResult
