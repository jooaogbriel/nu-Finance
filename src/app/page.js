'use client'

import Header from '../app/components/Header'
import Input from "../app/components/Input"
import ResumeFinance from '../app/components/ResumeFinance'
import InsertValue from '../app/components/InsertValue'
import { useState } from "react"

export default function Home() {

  const [listTransactions, setListTransactions] = useState([])

  return (
    <main>
      <Header/>
      <div className='flex'>
        <div className='w-6/12 p-20 flex flex-col'>
          <Input listTransactions={listTransactions} setListTransactions={setListTransactions} />
          <InsertValue listTransactions={listTransactions}/>
        </div>

        <div className='w-6/12 p-20 flex flex-col'>
          <ResumeFinance listTransactions={listTransactions} />
        </div>
      </div>
    </main>
  )
}
