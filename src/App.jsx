import { useState } from 'react'
import Navbar from './components/Navbar'
import { Portfolio } from './components/Portfolio'
import { Modal } from './components/Modal'
import { TransactionsHistory } from './components/TransactionsHistory'

import { generateId } from './helpers'
import { PlusCircleIcon } from '@heroicons/react/outline'

const App = () => {
  const [openModal, setOpenModal] = useState(false)
  const [transactions, setTransactions] = useState([])

  const saveTransaction = transaction =>{
    transaction.id = generateId()
    setTransactions([...transactions, transaction])
    //setOpenModal(false) production
  }

  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center'>
        <Portfolio />
        <Portfolio />
        <TransactionsHistory 
          transactions = {transactions}
        />
      </div>
      
      <button className="fixed text-white bottom-4 right-4 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-500 font-bold uppercase text-sm px-2 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
        type="button"
        onClick={() => setOpenModal(true)}
      >
        <PlusCircleIcon className="h-9 w-9" aria-hidden="true" />
      </button>

      <Modal
        open={openModal}
        setOpen={setOpenModal}
        saveTransaction = {saveTransaction}
      />
    </>
  )
}

export default App