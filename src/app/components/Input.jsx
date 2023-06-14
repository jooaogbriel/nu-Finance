'use client'

import React from 'react'
import { useState } from 'react'

const Input = ({listTransactions, setListTransactions}) => {

  const [description, setDescription] = useState("")
  const [value, setValue] = useState()
  const [type, setType] = useState('Entrada')

  function Regist(){
    const obj = {
        description,
        value,
        type,
    };
    console.log(obj)
    setListTransactions([...listTransactions,obj])
}

  return (
    <div className=' flex'>
        <form onSubmit={(event)=>event.preventDefault()} className='flex justify-start flex-col space-y-4 w-11/12 bg-black p-6 rounded-xl'>

          <p className=' font-semibold text-white'>Descrição</p>
          <input className=' bg-[#F8F9FA] border-lg h-12 w-full rounded-xl placeholder:p-2' value={description} required  placeholder='Digite aqui sua descrição' onChange={(event)=>setDescription(event.target.value)} />
          <span className=' text-[#899E96] text-xs'>Ex: Salário</span>

          <div className='flex flex-row items-center justify-start space-x-6 '>
            <div className='w-4/5'>
              <p className=' font-semibold text-white mb-2 '>Valor</p>
              <input className=' placeholder rounded-xl bg-[#F8F9FA] h-12 w-full placeholder:p-4' value={value} required onChange={(event) => setValue(event.target.value)} />
            </div>
            <div className='w-4/5'>
              <p className=' font-semibold text-white mb-2'>Tipo de valor</p>
              <select className='bg-[#F8F9FA] rounded-xl h-12 w-full' required name="select" onChange={(event)=>setType(event.target.value)}>
                <option required value="Entrada">Entrada</option>
                <option required value="Saída">Saída</option>
              </select>
            </div>
          </div>
          
          <button type='submit' className='border-lg h-12 w-full bg-white rounded-xl font-semibold' onClick={ ()=>Regist()}>Inserir Valor</button>
        </form>
    </div>
  )
}

export default Input