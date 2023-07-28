import { Listbox, Transition } from '@headlessui/react'
import { checkPropTypes } from 'prop-types'
import { Fragment, useState } from 'react'

function SelectOption({ filters }) {
  const [selected, setSelected] = useState(filters[0])
  return (
    <Listbox
      value={selected}
      onChange={setSelected}
    >
      <div className='relative min-w-[120px]'>
        <Listbox.Button className='relative w-full cursor-default rounded-lg bg-transparent text-white opacity-70 pl-3 pr-10 text-left  sm:text-sm'>
          <span className='block truncate '>{selected.name}</span>
          <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
            <img
              src='/chevron-up-down.svg'
              alt='chevron_up_down'
              className='h-5 w-5 text-gray-400'
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
          <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
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

SelectOption.propTypes = {
  filters: checkPropTypes.array,
}

export default SelectOption
