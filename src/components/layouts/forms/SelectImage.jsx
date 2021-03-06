/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SelectImage(props) {
  const {label = '', options, selected, setSelected} = props;

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-slate-500">{label}</Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="text-slate-300 relative w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-slate-600 focus:border-slate-600 sm:text-sm">
              <span className="flex items-center">
                {selected.image &&
                  <img src={selected.image} alt="" className="flex-shrink-0 h-5 w-5 rounded-full" />
                }
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-slate-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-slate-700 shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {options.map((element) => (
                  <Listbox.Option
                    key={element.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-slate-900' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={element}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center ">
                          {element.image &&
                            <img src={element.image} alt="" className="flex-shrink-0 h-5 w-5 rounded-full" />
                          }
                          <span
                            className={classNames(selected ? 'font-semibold text-white' : 'font-normal text-slate-300', 'ml-3 block truncate ')}
                          >
                            {element.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-amber-500',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
