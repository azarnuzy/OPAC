import { Dialog, Transition } from '@headlessui/react'
import PropTypes from 'prop-types'
import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchCollections,
  fetchMaterials,
  fetchSearchAdvanced,
  getCollections,
  getFormAdvanced,
  getMaterials,
  setEmptyFormAdvanced,
  setFormAdvanced,
} from '../../features/search/searchSlice'
import SelectOption4 from '../Form/SelectOption4'
import SelectOption5 from '../Form/SelectOption5'
import { formAdvancedFilter } from '../../helpers/filterData'
import { useNavigate } from 'react-router-dom'

const filters = [{ name: 'Judul' }, { name: 'Pengarang' }, { name: 'Subjek' }]

export default function Modal({ isOpen, setIsOpen }) {
  const dispatch = useDispatch()
  function closeModal() {
    setIsOpen(false)
  }

  useEffect(() => {
    dispatch(fetchCollections())
    dispatch(fetchMaterials())
  }, [dispatch])

  const collections = useSelector(getCollections)
  const materials = useSelector(getMaterials)
  const formAdvanced = useSelector(getFormAdvanced)

  const navigate = useNavigate()

  const [inputForm, setInputForm] = useState([
    {
      keyword: '',
      search: '',
      filters: filters,
    },
  ])
  const [selectedMaterial, setSelectedMaterial] = useState({
    code: '',
    description: 'Pilih salah satu',
  })

  const [selectedCollection, setSelectedCollection] = useState({
    code: '',
    description: 'Pilih salah satu',
  })

  const [publisher, setPublisher] = useState('')
  const [inputYear, setInputYear] = useState(true)
  const [year, setYear] = useState({
    from: '',
    to: '',
    year: '',
  })

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

  const resetForm = () => {
    dispatch(setEmptyFormAdvanced())
    setInputForm([{ keyword: '', search: '', filters: filters }])
    setSelectedMaterial({
      code: '',
      description: 'Pilih salah satu',
    })
    setSelectedCollection({
      code: '',
      description: 'Pilih salah satu',
    })
    setPublisher('')
    setYear({
      from: '',
      to: '',
      year: '',
    })
  }

  const submitForm = async (e) => {
    e.preventDefault()
    await dispatch(fetchSearchAdvanced({ formAdvanced }))
    navigate({
      pathname: '/advanced-search',
      search: `?${new URLSearchParams(formAdvanced).toString()}`,
    })
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
            <form
              onSubmit={(e) => submitForm(e)}
              className='flex min-h-full items-center justify-center p-4 text-center'
            >
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
                        selected={selectedMaterial}
                        setSelected={setSelectedMaterial}
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
                        selected={selectedCollection}
                        setSelected={setSelectedCollection}
                      />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label
                        htmlFor='publisher'
                        className='font-semibold text-light-gray-3 text-sm'
                      >
                        Penerbit
                      </label>
                      <input
                        name='publisher'
                        id='publisher'
                        placeholder='Ketik disini'
                        className='w-full sm:w-[300px] text-light-gray-3 bg-slate-200 text-sm focus:outline-none placeholder-light-gray-3 opacity-70 py-2 px-3 rounded-lg'
                        value={publisher}
                        onChange={(e) => {
                          setPublisher(e.target.value)
                          dispatch(
                            setFormAdvanced({
                              name: 'publisher',
                              code: e.target.value,
                            })
                          )
                        }}
                      />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label
                        htmlFor='year'
                        className='font-semibold text-light-gray-3 text-sm flex gap-2 items-center justify-between'
                      >
                        {inputYear ? 'Tahun' : 'Rentang Tahun'}
                        <div
                          className='cursor-pointer'
                          onClick={() => {
                            dispatch(
                              setFormAdvanced({
                                name: 'year',
                                code: '',
                              })
                            )
                            setInputYear(!inputYear)
                            if (inputYear) {
                              setYear({ ...year, from: '', to: '' })
                            } else {
                              setYear({ ...year, year: '' })
                            }
                          }}
                        >
                          <img
                            src='/change.svg'
                            alt='change'
                            width={20}
                            height={20}
                          />
                        </div>
                      </label>
                      <div className='flex gap-2 sm:w-[300px] w-full'>
                        {inputYear ? (
                          <input
                            name='year'
                            id='year'
                            type='number'
                            min={1970}
                            max={2100}
                            placeholder='Tahun '
                            className='w-full  text-light-gray-3 bg-slate-200 text-sm focus:outline-none placeholder-light-gray-3 opacity-70 py-2 px-3 rounded-lg'
                            value={year.year}
                            onChange={(e) => {
                              setYear({ ...year, year: e.target.value })
                              dispatch(
                                setFormAdvanced({
                                  name: 'year',
                                  code: e.target.value,
                                })
                              )
                            }}
                          />
                        ) : (
                          <>
                            <input
                              name='fromYear'
                              id='fromYear'
                              type='number'
                              min={1970}
                              max={2100}
                              required={year.to !== ''}
                              placeholder='Dari '
                              className='w-full sm:w-1/2 text-light-gray-3 bg-slate-200 text-sm focus:outline-none placeholder-light-gray-3 opacity-70 py-2 px-3 rounded-lg'
                              value={year.from}
                              onChange={(e) => {
                                setYear({ ...year, from: e.target.value })
                                dispatch(
                                  setFormAdvanced({
                                    name: 'year',
                                    code: `${e.target.value},${year.to}`,
                                  })
                                )
                              }}
                            />
                            <input
                              name='year'
                              id='year'
                              type='number'
                              min={1970}
                              max={2100}
                              placeholder='Sampai '
                              className='w-full sm:w-1/2 text-light-gray-3 bg-slate-200 text-sm focus:outline-none placeholder-light-gray-3 opacity-70 py-2 px-3 rounded-lg'
                              value={year.to}
                              onChange={(e) => {
                                setYear({ ...year, to: e.target.value })
                                dispatch(
                                  setFormAdvanced({
                                    name: 'year',
                                    code: `${year.from},${e.target.value}`,
                                  })
                                )
                              }}
                            />
                          </>
                        )}
                      </div>
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
                            type='button'
                            onClick={() => {
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
                            type='button'
                            onClick={handleAddFormComponent}
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
                    <button
                      className='bg-gray-300 w-[120px] py-2  rounded-full text-dark-gray  text-sm font-medium'
                      onClick={resetForm}
                    >
                      Hapus
                    </button>
                    <button
                      className='bg-soft-yellow w-[120px] py-2  rounded-full text-white text-sm font-medium'
                      type='submit'
                    >
                      Cari
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </form>
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
