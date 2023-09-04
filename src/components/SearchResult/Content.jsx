import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import {
  fetchSearch,
  getIsFirstFetch,
  getSearchData,
  getTotalPage,
  setPagination,
} from '../../features/search/searchSlice'
import { useEffect } from 'react'
import Pagination from '../General/Pagination'
import { searchItemFiltes } from '../../helpers/filterData'
import { translateSearchData } from '../../helpers/translateData'

function Content() {
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('keyword')
  const page = searchParams.get('page')
  const limit = searchParams.get('limit')
  const sort = searchParams.get('sort')
  const type = searchParams.get('type')

  const isFirstFetch = useSelector(getIsFirstFetch)
  const data = useSelector(getSearchData)

  const totalPage = useSelector(getTotalPage)

  const navigate = useNavigate()

  let displayData = []
  if (data) {
    displayData = data?.data?.map(searchItemFiltes)
  }

  const handlePageChange = (page) => {
    window.scrollTo(0, 0)
    dispatch(
      setPagination({ page: page, limit: limit, sort: sort, type: type })
    )
    const searchParams = new URLSearchParams({
      keyword,
      page: page,
      limit: 10,
      sort: sort,
      type: type,
    })
    navigate({
      pathname: '/search',
      search: searchParams.toString(),
    })
    dispatch(fetchSearch({ keyword, search: '', page, limit, sort, type }))
  }

  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!isFirstFetch) {
      dispatch(
        fetchSearch({
          keyword,
          search: '',
          page: page,
          limit: 10,
          sort: sort,
          type: type,
        })
      )
    }
  }, [dispatch, isFirstFetch, keyword, page, sort, type])

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
                    src='/opacnew/opac/assets/book.png'
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
                    <table className='w-full'>
                      <tbody className='grid gap-2 grid-cols-1 md:grid-cols-2'>
                        {Object.entries(displayData[i])?.map(([key, value]) => {
                          return (
                            <tr key={key}>
                              <td className=' items-start text-light-gray-3 font-bold grid-cols-2 md:w-[120px] lg:w-36 '>
                                {translateSearchData(key)}
                              </td>
                              <td className='font-semibold w-4'>:</td>
                              <td className='text-light-gray-3 font-mono'>
                                {value ? value : '-'}
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className='h-full flex flex-col md:py-10 items-center justify-center'>
              <img
                src='/opacnew/opac/noData.svg'
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
            currentPage={Number(page)}
            totalPages={Number(totalPage)}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  )
}

export default Content
