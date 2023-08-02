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
