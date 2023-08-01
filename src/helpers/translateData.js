export const translateSearchData = (key) => {
  switch (key) {
    case 'call_number':
      return 'Nomor Panggil'
    case 'collection':
      return 'Koleksi'
    case 'title':
      return 'Judul'
    case 'author':
      return 'Pengarang'
    case 'material':
      return 'Material'
    case 'subtitle':
      return 'Sub Judul'
    case 'available':
      return 'Ketersediaan'
    case 'copies':
      return 'Jumlah Salinan'
  }
}

export const translateFilters = (filter) => {
  switch (filter) {
    case 'Judul':
      return 'title'
    case 'Pengarang':
      return 'author'
    case 'Penerbit':
      return 'publisher'
    case 'ISBN':
      return 'isbn'
    case 'Tahun Terbit':
      return 'year'
    case 'Kategori':
      return 'category'
    default:
      return 'title'
  }
}

export const translateSort = (name) => {
  switch (name) {
    case 'Paling Relevan':
      return 'bibid'
    case 'Dari yang Terbaru':
      return 'date'
    case 'Dari yang Terlama':
      return 'date'
  }
}

export const translateType = (name) => {
  switch (name) {
    case 'Paling Relevan':
      return 'asc'
    case 'Dari yang Terbaru':
      return 'asc'
    case 'Dari yang Terlama':
      return 'desc'
  }
}
