import { useDispatch, useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'
import {
  fetchSearch,
  getIsFirstFetch,
  getSearchData,
} from '../../features/search/searchSlice'
import { useEffect } from 'react'
import Pagination from '../General/Pagination'

// const data = {
//   pengarang: 'Pengarang',
//   material: 'Material',
//   Nomor: 'Nomor',
//   koleksi: 'Koleksi',
//   isbn: 'ISBN/ISSN',
//   'Salinan Barcode': 'Salinan Barcode',
//   status: 'Status',
//   ketersediaan: '1',
// }

// const data2 = [1, 2, 3, 4, 5]

function Content() {
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('keyword')
  const search = searchParams.get('search')

  const isFirstFetch = useSelector(getIsFirstFetch)
  const data = useSelector(getSearchData)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!isFirstFetch) {
      dispatch(fetchSearch({ keyword, search }))
    }
  }, [dispatch, isFirstFetch, keyword, search])

  return (
    <div className='bg-light-gray-2 w-full min-h-[calc(100vh-496px)]'>
      <div className='lg:max-w-7xl px-3 mx-auto '>
        <div className='grid grid-cols-1 gap-4 py-5'>
          {data?.data?.length > 0 ? (
            data?.data?.map((item, i) => (
              <Link
                to={'/detail'}
                key={item + i}
                className='bg-white rounded-lg shadow-lg border border-solid border-light-gray'
              >
                <div className='p-3 flex flex-col sm:flex-row items-center gap-5'>
                  <img
                    src='/assets/book.png'
                    alt='book-cover'
                    width={150}
                    height={200}
                    className='rounded-sm shadow-md'
                  />
                  <div className='flex flex-col'>
                    <div className='flex flex-col gap-2 mb-3'>
                      <p className='text-light-gray-3 text-lg font-bold'>
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, voluptatum.
                      </p>
                    </div>
                    <div className='grid gap-2 grid-cols-1 md:grid-cols-2'>
                      {Object.entries(data)?.map(([key, value]) => (
                        <div
                          className='flex gap-2 items-center'
                          key={key}
                        >
                          <p className='text-light-gray-3 font-semibold'>
                            {key}
                          </p>
                          <p className='text-light-gray-3'>{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className='h-full flex flex-col md:py-10 items-center justify-center'>
              <img
                src='/noData.svg'
                alt='no-data'
                width={300}
              />
              <h4 className='font-bold text-light-gray-3 text-xl'>
                Data Tidak Ditemukan
              </h4>
            </div>
          )}
        </div>
        {data?.data?.length === 0 && (
          <Pagination
            currentPage={1}
            totalPages={5}
            onPageChange={() => {}}
          />
        )}
      </div>
    </div>
  )
}

export default Content
