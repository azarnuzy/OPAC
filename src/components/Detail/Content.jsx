import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {
  fetchDetailBiblio,
  getData,
  getDataFilter,
  getIsFirstFetch,
} from '../../features/detail/detailSlice'
import { translateDetailBiblio } from '../../helpers/translateData'
import { formatDateIndonesia } from '../../helpers/filterData'

function Content() {
  const { id } = useParams()
  const dispatch = useDispatch()

  const data = useSelector(getData)
  const dataFilter = useSelector(getDataFilter)
  const isFirstFetch = useSelector(getIsFirstFetch)

  useEffect(() => {
    if (!isFirstFetch) {
      dispatch(fetchDetailBiblio({ id }))
    }
  }, [dispatch, id, isFirstFetch])

  return (
    <div className='border-t-[1px] pt-5 border-light-gray w-full bg-light-gray-2 min-h-[calc(100vh-539px)] lg:min-h-[calc(100vh-455px)] my-3'>
      <div className='flex gap-3 flex-col md:flex-row max-w-7xl mx-auto px-4'>
        <div className='w-full md:w-fit flex justify-center md:justify-normal'>
          <img
            src='/assets/book.png'
            alt='book'
            width={250}
            className='w-[250px] h-[330px]  rounded-md shadow-md'
          />
        </div>
        <div className='flex flex-col gap-1 w-full items-start md:w-[calc(100%-250px)]'>
          <div className='flex gap-2'>
            <img
              src='/bookmark.svg'
              alt='bookmark'
              width={20}
            />
            <p className='text-light-gray-3 font-semibold'>
              {data?.data?.material}
            </p>
          </div>
          <p className='text-light-gray-3 text-lg font-bold'>
            {data?.data?.title}
          </p>
          <p className='text-light-gray-3 font-semibold'>
            {data?.data?.author}
          </p>
          <div className='w-full h-[1px] bg-slate-300 mb-3'></div>
          <p className='text-light-gray-3'>{data?.data?.abstract}</p>
          <div className='w-full h-[1px] bg-slate-300 mb-3'></div>
          <h4 className='text-lg text-light-gray-3 font-bold mb-3'>
            Informasi Bibliografi
          </h4>
          <div className='w-full grid gap-2 grid-cols-1 md:grid-cols-2'>
            {Object.entries(dataFilter)?.map(([key, value]) => {
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
                    {translateDetailBiblio(key)}
                  </p>
                  <p className='text-light-gray-3'>{value ? value : '-'}</p>
                </div>
              )
            })}
          </div>
          <div className='w-full h-[1px] bg-slate-300 mb-3'></div>
          <h4 className='text-lg text-light-gray-3 font-bold mb-3'>
            Informasi Salinan Bibliografi
          </h4>
          <div className='w-full overflow-auto'>
            <table className='table-auto w-full border'>
              <thead>
                <tr className='bg-gray-800 text-white'>
                  <th className='px-4 py-2'>No</th>
                  <th className='px-4 py-2'>Barcode</th>
                  <th className='px-4 py-2'>Status Code</th>
                  <th className='px-4 py-2'>Status</th>
                  <th className='px-4 py-2'>Mulai Status</th>
                  <th className='px-4 py-2'>Pengembalian</th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.copies?.copiesData?.map((item) => (
                  <tr
                    key={item.id}
                    className='bg-gray-200 text-gray-800'
                  >
                    <td className='border px-4 py-2'>{item.copy_id}</td>
                    <td className='border px-4 py-2'>{item.barcode}</td>
                    <td className='border px-4 py-2'>{item.status_code}</td>
                    <td className='border px-4 py-2'>{item.status}</td>
                    <td className='border px-4 py-2'>
                      {formatDateIndonesia(item.begin_date)}
                    </td>
                    <td className='border px-4 py-2'>
                      {formatDateIndonesia(item.back_date)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='w-full h-[1px] bg-slate-300 mb-3 mt-2'></div>
          <h4 className='text-lg text-light-gray-3 font-bold mb-3'>
            Rekomendasi Judul Terkait
          </h4>
          {/* list of recomendation relevant title   */}
          <ol className='list-decimal pl-5'>
            <li className='font-semibold text-light-gray-3 hover:underline'>
              <Link
                className='text-lg'
                to='/detail'
              >
                Association of College and Research Libraries 10th National
                Conference
              </Link>
              <p className=''>Kate Manuel, Library Hi Tech News, 2013</p>
            </li>
            <li className='font-semibold text-light-gray-3 hover:underline'>
              <Link
                className='text-lg'
                to='/detail'
              >
                An Empirical Study On Computer Literacy Among Graduating
                Students In The Bachelor Of Accountancy Programs Of Malysian
                Public Higher Institutions
              </Link>
              <p className=''>Kate Manuel, Library Hi Tech News, 2013</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Content
