import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { setIsLoading } from '../../features/search/searchSlice'
import { setIsLoading as setIsLoading2 } from '../../features/detail/detailSlice'

function Loading({ isLoading }) {
  const dispatch = useDispatch()
  return (
    <div
      className={`${
        isLoading ? 'fixed ' : 'hidden '
      } inset-0 z-50 flex items-center justify-center bg-[#00000041]`}
    >
      <div className='absolute top-5 right-5 z-50'>
        <img
          src='/cross.svg'
          alt='cross'
          className='font-white w-10 h-10 cursor-pointer text-[30px] text-white'
          onClick={() => {
            dispatch(setIsLoading(false))
            dispatch(setIsLoading2(false))
          }}
        />
      </div>
      <svg
        className='mr-3 h-10 w-10 animate-spin text-center'
        viewBox='0 0 24 24'
      >
        <path
          className='fill-light-red'
          d='M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z'
        ></path>
        <path
          className='fill-blue-100'
          d='M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z'
        ></path>
      </svg>
    </div>
  )
}

export default Loading

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.object.isRequired,
}
