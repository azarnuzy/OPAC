import { Listbox, Transition } from '@headlessui/react'
import PropTypes from 'prop-types'
import { Fragment, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  fetchSearchAdvanced,
  setSort,
  setType,
} from '../../features/search/searchSlice'
import {
  translateFilterSort,
  translateSort,
  translateType,
} from '../../helpers/translateData'
import { useNavigate, useSearchParams } from 'react-router-dom'

function SelectOption6({ filters, width = 'min-w-[300px]' }) {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const material = searchParams.get('material')
  const collection = searchParams.get('collection')
  const title = searchParams.get('title')
  const author = searchParams.get('author')
  const subject = searchParams.get('subject')
  const publisher = searchParams.get('publisher')
  const year = searchParams.get('year')
  const type = searchParams.get('type')
  const sort = searchParams.get('sort')
  const limit = searchParams.get('limit')

  const navigate = useNavigate()
  const [selected, setSelected] = useState(translateFilterSort(type, sort))
  const formAdvanced = useMemo(
    () => ({
      material,
      collection,
      title,
      author,
      subject,
      publisher,
      year,
    }),
    [author, collection, material, publisher, subject, title, year]
  )

  return (
    <Listbox
      value={selected}
      onChange={(select) => {
        setSelected(select)
        dispatch(setSort(translateSort(select.name)))
        dispatch(setType(translateType(select.name)))
        const searchParams = new URLSearchParams({
          ...formAdvanced,
          sort: translateSort(select.name),
          type: translateType(select.name),
          page: 1,
          limit: limit,
        })
        dispatch(
          fetchSearchAdvanced({
            formAdvanced: {
              ...formAdvanced,
              sort: translateSort(select.name),
              type: translateType(select.name),
            },
          })
        )
        navigate({
          pathname: '/advanced-search',
          search: searchParams.toString(),
        })
      }}
    >
      <div className={`relative ${width}`}>
        <Listbox.Button
          className={`flex py-1 px-3 bg-light-gray-2 gap-2 rounded-full items-center`}
        >
          <img
            src='/opacnew/opac/filter.svg'
            alt='filter'
            width={27}
          />
          <p className='text-light-gray-3 text-sm font-semibold'>
            {selected.name}
          </p>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute mt-1 max-h-40 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-black ring-opacity-5 focus:outline-none sm:text-sm z-30'>
            {filters.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 px-4 ${
                    active ? 'bg-soft-yellow text-white' : 'text-dark-gray'
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
                      {person.name}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

SelectOption6.propTypes = {
  filters: PropTypes.array,
  width: PropTypes.string,
}

export default SelectOption6
