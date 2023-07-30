import { Link } from 'react-router-dom'

const data = {
  Judul: '100% ampuh membasmi virus komputer tanpa antivirus',
  Pengarang: 'Arfianto, Deni',
  Material: 'Material',
  'Nomor Panggil': 'RES 005.023.4 ARI s',
  Koleksi: 'Reserve, Lantai 2',
  'ISBN/ISSN': '978-979-769-091-1',
  'Salinan Barcode': 'a0231242',
  Status: 'Status',
  Ketersediaan: '1',
  ISBN: '978-979-769-091-1',
  'Terminologi Ketersediaan': 'Tersedia',
  'Edisi DDC': '23',
  'Nomor Klasifikasi': 23,
  'Pernyataan Edisi': 'Cetakan 1',
  'Tahun Terbit': 2009,
  'Jumlah Halaman': 'vii, 120 Halaman',
  Dimensi: '24 cm',
  'Asal Koleksi': 'Sumber Alumni',
  'Kode Operator': 'DA/Yati',
  'Nomor Induk': '2015-00310',
}

const dataTable = [
  {
    id: 1,
    barcode: '123456',
    description: 'Book A',
    status: 'Available',
    startDate: '2023-07-25',
    returnDate: '2023-08-10',
  },
  {
    id: 2,
    barcode: '789012',
    description: 'Journal B',
    status: 'Checked Out',
    startDate: '2023-07-15',
    returnDate: '2023-08-05',
  },
  {
    id: 3,
    barcode: '789012',
    description: 'Journal B',
    status: 'Checked Out',
    startDate: '2023-07-15',
    returnDate: '2023-08-05',
  },
  {
    id: 4,
    barcode: '123456',
    description: 'Book A',
    status: 'Available',
    startDate: '2023-07-25',
    returnDate: '2023-08-10',
  },
  // Add more dummy data as needed
]

function Content() {
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
            <p className='text-light-gray-3 font-semibold'>Buku</p>
          </div>
          <p className='text-light-gray-3 text-lg font-bold'>
            An Empirical Study On Computer Literacy Among Graduating Students In
            The Bachelor Of Accountancy Programs Of Malysian Public Higher
            Institutions
          </p>
          <p className='text-light-gray-3 font-semibold'>Arfianto, Deni</p>
          <div className='w-full h-[1px] bg-slate-300 mb-3'></div>
          <p className='text-light-gray-3'>
            The growing influence of technology in the field of accountancy
            necessitates a comprehensive understanding of computer literacy
            among graduating students. This empirical study investigates the
            level of computer literacy among students enrolled in the Bachelor
            of Accountancy programs at Malaysian public higher institutions.
            Employing a quantitative research approach, data was collected
            through structured surveys and analyzed using statistical methods.
            The study examines students proficiency in essential computer
            skills, software applications, and their ability to adapt to
            technological advancements in the accounting domain. Findings from
            this study shed light on the current state of computer literacy
            among accounting students, identifying strengths and areas requiring
            improvement. The results are intended to inform educational
            institutions and policymakers in crafting targeted interventions to
            enhance computer literacy education and equip future accountants
            with the necessary digital competencies for success in the modern
            accounting profession.
          </p>
          <div className='w-full h-[1px] bg-slate-300 mb-3'></div>
          <h4 className='text-lg text-light-gray-3 font-bold mb-3'>
            Informasi Bibliografi
          </h4>
          <div className='grid gap-2 grid-cols-1 md:grid-cols-2'>
            {Object.entries(data).map(([key, value]) => (
              <div
                className='flex gap-2 items-start'
                key={key}
              >
                <p className='text-light-gray-3 font-semibold '>{key}: </p>
                <p className='text-light-gray-3'>{value}</p>
              </div>
            ))}
          </div>
          <div className='w-full h-[1px] bg-slate-300 mb-3'></div>
          <h4 className='text-lg text-light-gray-3 font-bold mb-3'>
            Informasi Salinan Bibliografi
          </h4>
          <div className='w-full overflow-scroll'>
            <table className='table-auto w-full border'>
              <thead>
                <tr className='bg-gray-800 text-white'>
                  <th className='px-4 py-2'>No</th>
                  <th className='px-4 py-2'>Barcode</th>
                  <th className='px-4 py-2'>Deskripsi</th>
                  <th className='px-4 py-2'>Status</th>
                  <th className='px-4 py-2'>Mulai Status</th>
                  <th className='px-4 py-2'>Pengembalian</th>
                </tr>
              </thead>
              <tbody>
                {dataTable.map((item) => (
                  <tr
                    key={item.id}
                    className='bg-gray-200 text-gray-800'
                  >
                    <td className='border px-4 py-2'>{item.id}</td>
                    <td className='border px-4 py-2'>{item.barcode}</td>
                    <td className='border px-4 py-2'>{item.description}</td>
                    <td className='border px-4 py-2'>{item.status}</td>
                    <td className='border px-4 py-2'>{item.startDate}</td>
                    <td className='border px-4 py-2'>{item.returnDate}</td>
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
