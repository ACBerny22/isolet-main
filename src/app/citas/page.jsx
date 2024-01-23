// HACE EL GET DE LOS CLIENTES

'use client'
import Image from 'next/image'
import Link from 'next/link'
import { getCitas, searchCita } from '@/db/Pocketbase'
import {useEffect, useState} from 'react'
import CitaCard from '@/components/CitaCard'
import {IoAddCircleOutline} from "react-icons/io5";



export default function CitasPage() {
  const[isLoaded, setIsLoaded] = useState(false)
  const[searchTerm, setSearchTerm] = useState("")
  const[citas, setCitas] = useState([])


  const cargarCitas = async () => {
    const data = await getCitas();
    console.log(data)
    setCitas(data)
  }

  const buscarCitas = async (e) => {
    e.preventDefault()
    console.log(searchTerm)
    const citasResultado = await searchCita(searchTerm)
    console.log(citasResultado)
    setCitas(citasResultado)
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearchTerm(e.target.value)
  }

  useEffect(()=>{
    setIsLoaded(true)
    cargarCitas()
    
  }, [])

  return (
    <div className='p-5 flex flex-col gap-5'>
      <div className='flex gap-40 justify-between mb-7'>
        <div>
          <h1 className='text-2xl'>Pagina de citas</h1>
        </div>
        <Link href ="/citas/crear"className='font-bold text-4xl'>
          <IoAddCircleOutline />
        </Link>
      </div>
      <div className="w-full flex gap-3">
          <input type="text" name="busqueda" className="border rounded-xl py-2 px-5 w-full" placeholder='Buscar' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
          <button className='p-3 bg-zinc-800 rounded-xl text-white' onClick={buscarCitas}>Buscar</button>
      </div>
      {isLoaded && (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          {citas.map((cita)=> (
            <CitaCard key={cita.id} id= {cita.id} fecha={cita.fecha} hora_i={cita.hora_i} hora_f={cita.hora_f} cliente={cita.expand.cliente} telefono={cita.expand.cliente.telefono}></CitaCard>
          ))}
        </div>
      )}
    </div>
  )
}
