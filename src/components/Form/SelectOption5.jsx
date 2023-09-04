import { Listbox, Transition } from '@headlessui/react'
import PropTypes from 'prop-types'
import { Fragment, useState } from 'react'

function SelectOption5({
  filters,
  handleInputChange,
  name,
  index,
  width = 'min-w-[300px]',
  search,
}) {
  const [, setSelected] = useState({ name: 'Semua' })
  return (
    <Listbox
      value={search}
      onChange={(select) => {
        setSelected(select)
        handleInputChange(index, select.name, name)
      }}
    >
      <div className={`relative ${width}`}>
        <Listbox.Button
          className={`relative w-full cursor-default rounded-lg bg-slate-200 text-light-gray-3 opacity-70 pl-3 pr-10 text-left  sm:text-sm py-2`}
        >
          <span className='block truncate text-clip'>
            {filters[index]['search'].length > 0
              ? filters[index]['search']
              : search || 'Pilih Semua'}
          </span>
          <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
            <img
              src='/opacnew/opac/chevron-up-down2.svg'
              alt='chevron_up_down'
              className={`h-5 w-5 text-light-gray-3`}
              aria-hidden='true'
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute mt-1 max-h-40 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-black ring-opacity-5 focus:outline-none sm:text-sm z-30'>
            {filters[index].filters.map((person, personIdx) => (
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

SelectOption5.propTypes = {
  filters: PropTypes.array,
  handleInputChange: PropTypes.func,
  name: PropTypes.string,
  index: PropTypes.number,
  width: PropTypes.string,
  search: PropTypes.string,
}

export default SelectOption5
