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
      return 'Jumlah Koleksi'
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
