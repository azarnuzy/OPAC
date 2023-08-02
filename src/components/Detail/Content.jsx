import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {
  fetchDetailBiblio,
  getData,
  getDataFilter,
} from '../../features/detail/detailSlice'
import { translateDetailBiblio } from '../../helpers/translateData'
import { formatDateIndonesia } from '../../helpers/filterData'

function Content() {
  const { id } = useParams()
  const dispatch = useDispatch()

  const data = useSelector(getData)
  const dataFilter = useSelector(getDataFilter)
  // const isFirstFetch = useSelector(getIsFirstFetch)

  useEffect(() => {
    dispatch(fetchDetailBiblio({ id }))
  }, [dispatch, id])

  const initialShowCount = 5 // Set the initial number of titles to be shown
  const [showCount, setShowCount] = useState(initialShowCount)

  const handleShowMore = () => {
    // Update the showCount to display all titles when the "Show More" button is clicked
    setShowCount(data?.data?.recommendation?.length)
  }

  const handleShowLess = () => {
    // Update the showCount to revert to the initial number of titles when the "Show Less" button is clicked
    setShowCount(initialShowCount)
  }

  return (
    <div className='border-t-[1px] pt-5 border-light-gray w-full bg-light-gray-2 min-h-[calc(100vh-539px)] lg:min-h-[calc(100vh-455px)] my-3'>
      <div className='flex gap-3 flex-col md:flex-row max-w-7xl mx-auto px-4'>
        <div className='w-full md:w-fit flex flex-col justify-center items-center md:justify-normal'>
          <img
            src='/assets/book.png'
            alt='book'
            width={250}
            className='w-[250px] h-[330px]  rounded-md shadow-md'
          />
        </div>
        <div className='flex w-full h-fit bg-white shadow-md border border-slate-200 rounded-lg p-3 flex-col gap-1 items-start md:w-[calc(100%-500px)]'>
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
        </div>
        <div className='md:w-[250px] w-full h-fit bg-white shadow-md border border-slate-200 rounded-lg p-3'>
          <h2 className='text-lg font-semibold text-dark-gray mb-4'>
            Rekomendasi
          </h2>
          <ul className='space-y-2'>
            {data?.data?.recommendation?.slice(0, showCount).map((title) => (
              <li key={title.bibid}>
                <Link
                  to={`/detail/${title.bibid}`}
                  className='block text-blue-600 hover:underline'
                >
                  <div className='font-semibold'>{title.title}</div>
                  <div className='text-gray-600'>by {title.author}</div>
                  <div className='text-gray-600'>
                    {title.publisher}, {title.year}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          {showCount < data?.data?.recommendation?.length && (
            <div className='mt-2'>
              <button
                className='text-blue-600 hover:underline mr-2'
                onClick={handleShowMore}
              >
                Show More
              </button>
            </div>
          )}
          {showCount > initialShowCount && (
            <div className='mt-2'>
              <button
                className='text-blue-600 hover:underline'
                onClick={handleShowLess}
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Content
