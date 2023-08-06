import { Dialog, Transition } from '@headlessui/react'
import PropTypes from 'prop-types'
import { Fragment, useState } from 'react'
import SelectOption2 from '../Form/SelectOption2'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCollections,
  getMaterials,
  setFormAdvanced,
} from '../../features/search/searchSlice'
import SelectOption4 from '../Form/SelectOption4'

const filters = [{ name: 'Judul' }, { name: 'Pengarang' }, { name: 'Subjek' }]

export default function Modal({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false)
  }

  const collections = useSelector(getCollections)
  const materials = useSelector(getMaterials)

  const [numberOfInput, setNumberOfInput] = useState(1)

  const dispatch = useDispatch()

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
                        htmlFor='material'
                        className='font-semibold text-light-gray-3 text-sm'
                      >
                        Material
                      </label>
                      <SelectOption4
                        filters={materials?.data}
                        name={'material'}
                      />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label
                        htmlFor='koleksi'
                        className='font-semibold text-light-gray-3 text-sm'
                      >
                        Koleksi
                      </label>
                      <SelectOption4
                        filters={collections?.data}
                        name={'collection'}
                      />
                    </div>
                  </div>
                  {Array.from(Array(numberOfInput), (e, i) => {
                    return (
                      <div
                        className='flex flex-col gap-2  mt-3'
                        key={i}
                      >
                        {i === 0 && (
                          <label
                            htmlFor='Bahasa'
                            className='font-semibold text-light-gray-3 text-sm'
                          >
                            Kata Kunci
                          </label>
                        )}
                        <div className='flex gap-3'>
                          <input
                            name='keyword'
                            id='search-input'
                            placeholder='Ketik disini'
                            className='w-[calc(100%-150px)] sm:w-[370px] text-light-gray-3 bg-slate-200 text-sm focus:outline-none placeholder-light-gray-3 opacity-70 py-2 px-3 rounded-lg'
                            onChange={(e) => {
                              const { name, value } = e.target
                              dispatch(setFormAdvanced({ name, code: value }))
                            }}
                          />
                          <SelectOption2
                            filters={filters}
                            width='sm:w-[calc(100%-420px)]'
                          />
                          {i === numberOfInput - 1 && i !== 0 && (
                            <button
                              onClick={() => {
                                setNumberOfInput(numberOfInput - 1)
                              }}
                            >
                              <img
                                src='/minus.svg'
                                alt='minus'
                              />
                            </button>
                          )}
                          {i === 0 && (
                            <button
                              onClick={() => {
                                setNumberOfInput(numberOfInput + 1)
                              }}
                            >
                              <img
                                src='/plus.svg'
                                alt='plus'
                              />
                            </button>
                          )}
                        </div>
                      </div>
                    )
                  })}
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
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
}
