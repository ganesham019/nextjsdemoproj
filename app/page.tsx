import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-slate-50 text-center mx-auto h-screen p-5'>
      <h1 className='my-5 text-5xl font-bold'>Hellow world</h1>
      <Link href='/users'>users</Link>
    </div>
  )
}
