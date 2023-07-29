import { Link } from 'react-router-dom'
import SelectOption3 from '../Form/SelectOption3'

const filters = [
  { name: 'Paling Relevan' },
  { name: 'Dari yang Terbaru' },
  { name: 'Dari yang Terlama' },
]

function TopSearchResult() {
  return (
    <div className=' border-t-[1px] border-light-grayw-full'>
      <div className='flex justify-between max-w-7xl lg:px-3 sm:px-5 py-2 border-t-[1px] border-light-gray mx-auto w-full'>
        <div className='flex gap-2 items-center'>
          <Link
            className='text-light-gray font-medium hover:underline'
            to='/'
          >
            Pencarian
          </Link>
          <div className='rotate-[10deg] w-[1px] bg-light-gray h-[20px]'></div>
          <div className='text-light-gray-3 cursor-pointer  hover:underline'>
            Hasil Pencarian
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <p className='text-light-gray-3 font-semibold'>
            Menampilkan Pencarian
          </p>
          <img
            src='/arrow.svg'
            alt='arrow'
            width={30}
          />
          <p className='font-semibold text-light-gray-3'>
            1 - 10 dari 1680 data
          </p>
        </div>
        <SelectOption3
          filters={filters}
          width='w-fit'
        />
      </div>
    </div>
  )
}

export default TopSearchResult
