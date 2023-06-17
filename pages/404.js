import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
export default function Posts({posts}) {
  const router = useRouter()
  const [count, setCount] = useState(10)
  const [apend, setApend] = useState(true)
  const [toggle, setToggle] = useState('▌▐')
  useEffect(() => {
    const timer = setTimeout(() => apend ? setCount(prev=>prev-1) : '', 1000);
    if (count === 0){
      router.push("/")
    }
    return () => clearTimeout(timer);
  }, [count, apend]);
  return (
    <>
      <Layout title="ZVINZV - 404 ERROR">
        <div className='bg-zinc-900 text-white flex justify-center items-center flex-col gap-8 py-14'>
          <h1 className='text-5xl uppercase font-bold cursor-default'>This Page Not Found, <span className='underline text-red-100 hover:text-red-600'>404 Error</span> page.</h1>
          <h1 className='text-2xl uppercase font-bold cursor-default'>You Will Return To Home Page After <span className='underline text-red-100 hover:text-red-600'>{count}</span> second.</h1>
          
          <button onClick={() => router.push("/")} className='p-3 px-5 bg-neutral-700 hover:bg-neutral-800 hover:shadow-md rounded-xl font-semibold uppercase tracking-wide'>Return To Home page.</button>
          <button onClick={() => {setToggle(prev => {
            switch (prev){
              case "►": return "▌▐"
              case "▌▐": return "►"
              default : return "?"
            }
          });setApend(!apend); }} className='p-3 px-5 bg-neutral-700 hover:bg-neutral-800 hover:shadow-md rounded-xl font-semibold uppercase tracking-wide'>{toggle}</button>
        </div>
      </Layout>
    </>
    
    )
    
}