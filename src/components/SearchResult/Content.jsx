import { useDispatch, useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'
import {
  fetchSearch,
  getIsFirstFetch,
  getLimit,
  getPage,
  getSearchData,
  getSearchFilter,
  getSort,
  getTotalPage,
  getType,
  setPagination,
} from '../../features/search/searchSlice'
import { useEffect } from 'react'
import Pagination from '../General/Pagination'
import { searchItemFiltes } from '../../helpers/filterData'
import { translateSearchData } from '../../helpers/translateData'

function Content() {
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('keyword')
  const search = searchParams.get('search')

  const isFirstFetch = useSelector(getIsFirstFetch)
  const data = useSelector(getSearchData)
  const searchFilter = useSelector(getSearchFilter)
  const page = useSelector(getPage)
  const totalPage = useSelector(getTotalPage)
  const limit = useSelector(getLimit)
  const sort = useSelector(getSort)
  const type = useSelector(getType)

  let displayData = []
  if (data) {
    displayData = data?.data?.map(searchItemFiltes)
  }

  const handlePageChange = (page) => {
    dispatch(
      setPagination({ page: page, limit: limit, sort: sort, type: type })
    )
    dispatch(
      fetchSearch({ keyword, search: searchFilter, page, limit, sort, type })
    )
  }

  const dispatch = useDispatch()

  useEffect(() => {
    if (!isFirstFetch) {
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
    }
  }, [dispatch, isFirstFetch, keyword, search, searchFilter])

  return (
    <div className='bg-light-gray-2 w-full min-h-[calc(100vh-496px)]'>
      <div className='lg:max-w-7xl px-3 mx-auto '>
        <div className='grid grid-cols-1 gap-4 py-5'>
          {data?.data?.length > 0 ? (
            data?.data?.map((item, i) => (
              <Link
                to={`/detail/${item.biblio_id}`}
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
                  <div className='flex flex-col w-full'>
                    <div className='flex flex-col mb-3'>
                      <p className='text-light-gray-3 text-xl font-bold'>
                        {item.title}
                      </p>
                      <p className='text-light-gray-3 text-lg font-medium'>
                        {item.author ? item.author : '-'}
                      </p>
                    </div>
                    <div className='grid gap-2 grid-cols-1 md:grid-cols-2'>
                      {Object.entries(displayData[i])?.map(([key, value]) => {
                        // Calculate the length of the value
                        const valueLength = value ? value.toString().length : 0

                        return (
                          <div
                            className={`flex gap-2 items-center ${
                              valueLength > 30 ? 'md:col-span-2' : ''
                            }`}
                            key={key}
                          >
                            <p className='text-light-gray-3 font-semibold'>
                              {translateSearchData(key)}
                            </p>
                            <p className='text-light-gray-3'>
                              {value ? value : '-'}
                            </p>
                          </div>
                        )
                      })}
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
        {data?.data?.length > 0 && (
          <Pagination
            currentPage={page}
            totalPages={totalPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  )
}

export default Content
