'use client'
import React from 'react'

const InsertValue = ({listTransactions}) => {

  const valorTotal = listTransactions.reduce((total,{ value,type}) => type === 'Entrada' ?  total + +value : total - +value,0 )

  return (
    <div className='flex justify-start flex-col space-y-4 w-11/12 bg-black p-6 rounded-xl mt-4'>
      <div className='flex justify-between'>
        <h3 className=' text-white'>Valor total: </h3>
        <span className='text-white'>${valorTotal}</span>
      </div>
      <span  className=' text-white text-xs'>O valor refere-se ao saldo</span>
    </div>
  )
}

export default InsertValue