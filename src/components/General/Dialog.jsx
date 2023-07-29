import { Dialog, Transition } from '@headlessui/react'
import { checkPropTypes } from 'prop-types'
import { Fragment } from 'react'
import SelectOption2 from '../Form/SelectOption2'

const filters = [
  { name: 'Judul' },
  { name: 'Subjek' },
  { name: 'Klasifikasi DDC' },
  { name: 'Material' },
  { name: 'Tahun' },
  { name: 'Pengarang' },
]

const jenisBahan = [
  { name: 'Monograf' },
  { name: 'Film' },
  { name: 'Bahan Kartografis' },
  { name: 'Rekaman Video' },
  { name: 'Musik' },
  { name: 'Bahan Campuran' },
  { name: 'Rekaman Suara' },
  { name: 'Bentuk Mikro' },
  { name: 'Manuskrip' },
  { name: 'Terbitan Berkala' },
  { name: 'Braille' },
  { name: 'Bahan Grafis' },
  { name: 'Sumber Elektronik' },
  { name: 'Bentuk Mikro Berkala' },
  { name: 'Semua Jenis Bahan' },
]

const bahasa = [
  { name: 'Indonesia' },
  { name: 'Inggris' },
  { name: 'Jerman' },
  { name: 'Jepang' },
  { name: 'Arab' },
  { name: 'Mandarin' },
  { name: 'Perancis' },
  { name: 'Belanda' },
  { name: 'Rusia' },
  { name: 'Spanyol' },
  { name: 'Korea' },
  { name: 'Italia' },
  { name: 'Jawa' },
  { name: 'Sunda' },
  { name: 'Bali' },
  { name: 'Aceh' },
  { name: 'Bugis' },
  { name: 'Tidak ada kode sesuai' },
  { name: 'Semua Bahasa' },
]

const targetPembaca = [
  { name: 'Tidak diketahui / tidak ditentukan' },
  { name: 'Umum' },
  { name: 'Anak prasekolah / taman kanak-kanak' },
  { name: 'Anak sekolah dasar' },
  { name: 'Anak menjelang remaja' },
  { name: 'Remaja' },
  { name: 'Dewasa' },
  { name: 'tidak ada kode yang sesuai' },
  { name: 'Semua target pembaca' },
]

const bentukKarya = [
  { name: 'Tidak didefinisikan' },
  { name: 'Bukan fiksi' },
  { name: 'Drama' },
  { name: 'Esai' },
  { name: 'Novel' },
  { name: 'Puisi' },
  { name: 'Pidato' },
  { name: 'Cerita pendek' },
  { name: 'Karya humor, satir, atau bentuk sastra serupa' },
  { name: 'Tidak ada kode yang sesuai' },
  { name: 'Semua bentuk karya' },
]

export default function Modal({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Transition
        appear
        show={isOpen}
        as={Fragment}
      >
        <Dialog
          as='div'
          className='relative z-10'
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-fit transform overflow rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    Advanced Search
                  </Dialog.Title>
                  <div className='w-full h-[1px] bg-gray-300 my-3'></div>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 justify-between w-full'>
                    <div className='flex flex-col gap-2'>
                      <label
                        htmlFor='judul'
                        className='font-semibold text-light-gray-3 text-sm'
                      >
                        Jenis Bahan
                      </label>
                      <SelectOption2 filters={jenisBahan} />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label
                        htmlFor='Bahasa'
                        className='font-semibold text-light-gray-3 text-sm'
                      >
                        Bahasa
                      </label>
                      <SelectOption2 filters={bahasa} />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label
                        htmlFor='Bahasa'
                        className='font-semibold text-light-gray-3 text-sm'
                      >
                        Target Pembaca
                      </label>
                      <SelectOption2 filters={targetPembaca} />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label
                        htmlFor='Bahasa'
                        className='font-semibold text-light-gray-3 text-sm'
                      >
                        Bentuk Karya
                      </label>
                      <SelectOption2 filters={bentukKarya} />
                    </div>
                  </div>
                  <div className='flex flex-col gap-2  mt-3'>
                    <label
                      htmlFor='Bahasa'
                      className='font-semibold text-light-gray-3 text-sm'
                    >
                      Kata Kunci
                    </label>
                    <div className='flex gap-3'>
                      <input
                        id='search-input'
                        placeholder='Ketik disini'
                        className=' sm:w-[370px] text-light-gray-3 bg-slate-200 text-sm focus:outline-none placeholder-light-gray-3 opacity-70 py-2 px-3 rounded-lg'
                      />
                      <SelectOption2
                        filters={filters}
                        width='sm:w-[calc(100%-420px)]'
                      />
                      <img
                        src='/plus.svg'
                        alt='plus'
                      />
                    </div>
                  </div>
                  <div className='w-full flex justify-end gap-2 mt-3'>
                    <button className='bg-gray-300 w-[120px] py-2  rounded-full text-dark-gray  text-sm font-medium'>
                      Hapus
                    </button>
                    <button className='bg-soft-yellow w-[120px] py-2  rounded-full text-white text-sm font-medium'>
                      Cari
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

Modal.propTypes = {
  isOpen: checkPropTypes.bool,
  setIsOpen: checkPropTypes.func,
}
