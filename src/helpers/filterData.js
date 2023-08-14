export const searchItemFiltes = ({
  subtitle,
  call_number,
  collection,
  material,
  available,
  copies,
}) => ({
  subtitle,
  call_number,
  collection,
  material,
  available,
  copies,
})

const attributeList = [
  'title',
  'subtitle',
  'call_number',
  'subjects',
  'author',
  'responsibility',
  'collection',
  'material',
  'no_id',
  'edition_stmt',
  'ddc',
  'pub_place',
  'pages',
  'availability_term',
  'publisher',
  'pub_year',
  'phisical_detail',
  'dimention',
  'source',
  'operator',
  'classification',
]

export const filterAttributes = (data) => {
  const filteredData = {}
  attributeList.forEach((attribute) => {
    if (Object.prototype.hasOwnProperty.call(data, attribute)) {
      filteredData[attribute] = data[attribute]
    }
  })
  return filteredData
}

export const formatDateIndonesia = (dateString) => {
  const date = new Date(dateString)

  if (dateString === null) {
    return '-'
  }

  if (isNaN(date)) {
    return '-'
  }

  return date.toLocaleString('id-ID', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
    timeZone: 'Asia/Jakarta', // Set the time zone to Indonesia (GMT+7)
  })
}

export const formAdvancedFilter = (dataArray) => {
  const formAdvanced = { title: '', author: '', subject: '', all: '' }

  dataArray.forEach((item) => {
    const { keyword, search } = item
    if (search === 'Judul') {
      formAdvanced.title += keyword + ','
    } else if (search === 'Pengarang') {
      formAdvanced.author += keyword + ','
    } else if (search === 'Subjek') {
      formAdvanced.subject += keyword + ','
    }
  })

  // Remove the trailing comma from each field
  formAdvanced.title = formAdvanced.title.slice(0, -1)
  formAdvanced.author = formAdvanced.author.slice(0, -1)
  formAdvanced.subject = formAdvanced.subject.slice(0, -1)

  return formAdvanced
}

export const filterPublishers = (data) => {
  // const shuffledData = data.sort(() => 0.5 - Math.random())
  const selectedPublishers = data.slice(0, 30).map((item) => {
    return {
      code: item.publisher,
      description: item.publisher,
    }
  })
  return selectedPublishers
}
