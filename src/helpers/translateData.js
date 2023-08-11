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
      return ''
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

export const translateDetailBiblio = (name) => {
  switch (name) {
    case 'call_number':
      return 'Nomor Panggil'
    case 'title':
      return 'Judul'
    case 'subtitle':
      return 'Subjudul'
    case 'subjects':
      return 'Subjek'
    case 'author':
      return 'Penulis'
    case 'responsibility':
      return 'Tanggung Jawab'
    case 'collection':
      return 'Koleksi'
    case 'material':
      return 'Material'
    case 'no_id':
      return 'Nomor Identitas'
    case 'abstract':
      return 'Abstrak'
    case 'edition_stmt':
      return 'Pernyataan Edisi'
    case 'ddc':
      return 'Klasifikasi Desimal Dewey (DDC)'
    case 'pub_place':
      return 'Tempat Terbit'
    case 'pages':
      return 'Jumlah Halaman'
    case 'availability_term':
      return 'Ketersediaan'
    case 'publisher':
      return 'Penerbit'
    case 'pub_year':
      return 'Tahun Terbit'
    case 'phisical_detail':
      return 'Detail Fisik'
    case 'dimention':
      return 'Dimensi'
    case 'source':
      return 'Sumber'
    case 'operator':
      return 'Operator'
    case 'classification':
      return 'Klasifikasi'
    default:
      return ''
  }
}

export const translateFilterSort = (type, sort) => {
  if (type === 'asc' && sort === 'bibid') {
    return { name: 'Paling Relevan' }
  } else if (type === 'asc' && sort === 'date') {
    return { name: 'Dari yang Terbaru' }
  } else if (type === 'desc' && sort === 'date') {
    return { name: 'Dari yang Terlama' }
  }
}
