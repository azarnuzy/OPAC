import { Dialog, Transition } from '@headlessui/react'
import PropTypes from 'prop-types'
import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCollections,
  getFormAdvanced,
  getMaterials,
  setFormAdvanced,
} from '../../features/search/searchSlice'
import SelectOption4 from '../Form/SelectOption4'
import SelectOption5 from '../Form/SelectOption5'
import { formAdvancedFilter } from '../../helpers/filterData'

const filters = [{ name: 'Judul' }, { name: 'Pengarang' }, { name: 'Subjek' }]

export default function Modal({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false)
  }

  const collections = useSelector(getCollections)
  const materials = useSelector(getMaterials)

  const dispatch = useDispatch()

  const [inputForm, setInputForm] = useState([
    {
      keyword: '',
      search: '',
      filters: filters,
    },
  ])

  const formAdvanced = useSelector(getFormAdvanced)

  useEffect(() => {
    console.log(formAdvanced)
  }, [formAdvanced])

  const setAdvancedFrom = (formInput) => {
    dispatch(
      setFormAdvanced({
        name: 'title',
        code: formInput.title,
      })
    )
    dispatch(
      setFormAdvanced({
        name: 'author',
        code: formInput.author,
      })
    )
    dispatch(
      setFormAdvanced({
        name: 'subject',
        code: formInput.subject,
      })
    )
  }

  // Add new form component (keyword or select option)
  const handleAddFormComponent = () => {
    setInputForm([...inputForm, { keyword: '', search: '', filters: filters }])
  }

  // Remove a form component by index
  const handleRemoveFormComponent = (index) => {
    const filter = inputForm.filter((_, i) => i !== index)
    setInputForm(filter)

    const formInput = formAdvancedFilter(filter)
    setAdvancedFrom(formInput)
  }

  // Update the value of a form component
  const handleInputChange = (index, value, name) => {
    const newinputForm = [...inputForm]
    newinputForm[index][name] = value
    const formInput = formAdvancedFilter(newinputForm)

    setAdvancedFrom(formInput)
    setInputForm(newinputForm)
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
                  {inputForm.map((item, index) => (
                    <div
                      className='flex flex-col gap-2 mt-3'
                      key={index}
                    >
                      {index === 0 && (
                        <label
                          htmlFor='Bahasa'
                          className='font-semibold text-light-gray-3 text-sm'
                        >
                          Kata Kunci
                        </label>
                      )}
                      <div className='flex gap-3'>
                        <SelectOption5
                          filters={inputForm}
                          width='sm:w-[calc(100%-420px)] w-[calc(100%-225px)]'
                          handleInputChange={handleInputChange}
                          name='search'
                          index={index}
                          search={item.search}
                        />
                        <input
                          name='keyword'
                          id='search-input'
                          placeholder='Ketik disini'
                          className='w-[calc(100%-150px)] sm:w-[370px] text-light-gray-3 bg-slate-200 text-sm focus:outline-none placeholder-light-gray-3 opacity-70 py-2 px-3 rounded-lg'
                          value={item.keyword}
                          onChange={(e) => {
                            handleInputChange(index, e.target.value, 'keyword')
                          }}
                        />
                        {index !== 0 && (
                          <button
                            onClick={() => {
                              console.log(index)
                              handleRemoveFormComponent(index)
                            }}
                          >
                            <img
                              src='/minus.svg'
                              alt='minus'
                            />
                          </button>
                        )}
                        {index === 0 && (
                          <button
                            onClick={() => {
                              handleAddFormComponent()
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
                  ))}
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
