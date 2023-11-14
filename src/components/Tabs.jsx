import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { useData } from '../context/DataContext'
import { data } from 'autoprefixer'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Tabs({ ques }) {

    //send the data by context to tabs 
    const { dataContext } = useData()
    // console.log(dataContext)
    const questions = ques
    // console.log(questions)
    const r1 = []
    const r2 = []
    const r3 = []
    if (questions) {
        questions.map((el) => {
            if (el.round == "1") {
                r1.push(el)
            }
            if (el.round == "2") {
                r2.push(el)
            }
            if (el.round == "3") {
                r3.push(el)
            }
        })
    }



    let [categories] = useState({
        'Round1': r1,
        'Round2': r2,
        'Round3': r3
    })
    return (
        <div className="w-full max-w-md md:px-2 py-16">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                    'ring-white/60  focus:outline-none transition',
                                    selected
                                        ? 'bg-white'
                                        : 'text-blue-900 hover:bg-white/[0.2] hover:text-slate-500'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((ques, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                            )}
                        >
                            <ul>
                                {
                                    ques.map((ques, index) => (
                                        <li
                                            key={index}
                                            className="relative rounded-md p-3 hover:bg-gray-100"
                                        >
                                            <h3 className="text-sm font-medium leading-5">
                                                {ques.name}
                                            </h3>
                                            <a
                                                href={ques.link}
                                                target="_blank"
                                                className={classNames(
                                                    'absolute inset-0 rounded-md',
                                                    'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                                )}
                                            />
                                        </li>
                                    ))
                                }
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
