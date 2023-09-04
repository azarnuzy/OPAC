import { Fragment, useEffect, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import PropTypes from 'prop-types'
import {
  fetchPublisher,
  getPublishers,
  setFormAdvanced,
} from '../../features/search/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import useDebounce from '../General/UseDebounce'

export default function ComboboxFilter({ selected, setSelected }) {
  const dispatch = useDispatch()

  const people = useSelector(getPublishers).data

  const [query, setQuery] = useState('')

  const debouncedSearchValue = useDebounce(query, 800)

  useEffect(() => {
    dispatch(fetchPublisher(debouncedSearchValue))
  }, [debouncedSearchValue, dispatch])

  let filteredPeople =
    debouncedSearchValue === ''
      ? people
      : people.filter((person) => {
          const searchValue = debouncedSearchValue
            .toLowerCase()
            .replace(/\s+/g, '')
          const description = person.description
            .toLowerCase()
            .replace(/\s+/g, '')

          return (
            person.description === 'Semua Penerbit' ||
            description.includes(searchValue)
          )
        })

  return (
    <div className=''>
      <Combobox
        value={selected}
        onChange={(select) => {
          dispatch(setFormAdvanced({ name: 'publisher', code: select.code }))
          setSelected(select)
        }}
      >
        <div className='relative'>
          <div className=''>
            <Combobox.Input
              className='w-full sm:w-[300px] text-light-gray-3 bg-slate-200 text-sm focus:outline-none placeholder-light-gray-3 opacity-70 py-2 px-3 rounded-lg'
              displayValue={(person) => person.description}
              onChange={(event) => {
                setQuery(event.target.value)
              }}
            />
            <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
              <img
                src='/opacnew/opac/chevron-up-down2.svg'
                alt='chevron_up_down'
                width={20}
                className=' text-gray-400'
                aria-hidden='true'
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className='absolute max-h-40 z-30 mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {filteredPeople?.length === 0 && debouncedSearchValue !== '' ? (
                <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
                  Nothing found.
                </div>
              ) : (
                filteredPeople?.map((person, i) => (
                  <Combobox.Option
                    key={i}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2  px-4 ${
                        active ? 'bg-soft-yellow text-white' : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {person.description}
                        </span>
                        {/* {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon
                              className='h-5 w-5'
                              aria-hidden='true'
                            />
                          </span>
                        ) : null} */}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

ComboboxFilter.propTypes = {
  people: PropTypes.array,
  selected: PropTypes.string,
  setSelected: PropTypes.func,
}
