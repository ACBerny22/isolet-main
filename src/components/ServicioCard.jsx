//GET DE SERVICIO EN FORMATO DE TARJETA

'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicioCard(props) {
  return (
    <Link href= {`/servicios/${props.id}`} className='flex justify-between shadow-md p-4 rounded-xl'>

      <div className='flex gap-6'>
        <p className='font-bold'>{props.nombre} </p>
  
        <p className='font-light'> $ {props.costo}</p>

      </div>

    </Link>
  )
}