import PropTypes from 'prop-types'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const handlePageClick = (page) => {
    onPageChange(page)
  }

  const getPageNumbers = () => {
    const pageNumbers = []

    // Case when totalPages is less than 4
    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else if (currentPage <= 2) {
      // First page, next page, third page, triple dots, last page
      pageNumbers.push(1, 2, 3, '...', totalPages)
    } else if (currentPage >= totalPages - 1) {
      // First page, triple dots, second-to-last page, last page
      pageNumbers.push(1, '...', totalPages - 2, totalPages - 1, totalPages)
    } else {
      // First page, triple dots, current page, next page, last page
      pageNumbers.push(1, '...', currentPage, currentPage + 1, totalPages)
    }

    return pageNumbers
  }

  return (
    <div className='flex items-center justify-center my-4'>
      <button
        className='px-4 py-2 mr-2 border rounded-md hover:bg-gray-200 text-sm'
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          className={`px-4 py-2 mx-2 border rounded-md text-sm ${
            page === currentPage
              ? 'bg-blue-500 text-white'
              : 'hover:bg-gray-200'
          }`}
          onClick={() => {
            if (typeof page === 'number') {
              handlePageClick(page)
            }
          }}
        >
          {page}
        </button>
      ))}

      <button
        className='px-4 py-2 ml-2 border text-sm rounded-md hover:bg-gray-200'
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
}
