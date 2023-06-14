'use client'
import React from 'react'

const ResumeFinance = ({listTransactions}) => {
  return (
    <div>
      {listTransactions.map((transaction)=>(
        <div className='flex justify-start flex-col space-y-4 w-11/12 bg-black p-6 rounded-xl mb-2'>
          <div className='flex justify-between'>
            <p className='text-white'>{transaction.description}</p>
            <p className='text-white'>{transaction.type}</p>
          </div>
          <p className='text-white'>{transaction.value}</p>
        </div>
      ))}
    </div>
  )
}

export default ResumeFinance