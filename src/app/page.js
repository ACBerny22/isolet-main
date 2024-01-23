'use client'
import { isUserValid } from '@/db/Pocketbase'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Home() {

  const router = useRouter()
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(()=>{
    if(!isUserValid){
      router.push("/auth/login")
    }
    setDomLoaded(true)
  },[])

  return (
    <div>
      {domLoaded &&
        <>
          <h1>jfsjf</h1>
          <Link href ="/cliente">Clientes</Link>
        </>
      }
    </div>
  )
}
