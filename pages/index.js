import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
export default function Home({post}) {
  const router = useRouter()
  const mainDiv = useRef()
  const [random, setRandom] = useState(Math.floor(Math.random() * 101))
  const [main, setmain] = useState(" ")
  const [style, setstyle] = useState()
  useEffect(() => {
    const time = setTimeout(() => {
      mainDiv.current.style.opacity = "0.20"
    }, 2000);
    return () => clearTimeout(time)
  })
  useEffect(() => {
  setstyle({"opacity":0})
  const time = setTimeout(() => {
    setstyle({"opacity":1})
    setmain("Suggestions For You.")
    
    
    const time2 = setTimeout(() => {
      setstyle({"opacity":0})
      
      const time3 = setTimeout(() => {
        setmain("")
        setmain(splitText(post[random].title))
        setstyle({"opacity":1, "cursor":"pointer"})
      }, 1000);
    }, 1000);
  }, 1000);
  
  
    return () => clearTimeout(time)
  }, [])
  const splitText = text =>{
    const lengthOfText = text.toString().length
    if (lengthOfText > 25){
      return text.substr(0, 25) + " ..."
    }else{
      return text
    }
  }
  return (
    <>
      <Layout title="ZVINZV">
        <div className='bg-zinc-900 text-white flex justify-center items-center flex-col gap-8'>
          {/* <h1 className='text-2xl sm:txt-3xl md:text-3xl lg:text-5xl xl:text-6xl capitalize -translate-y-32 font-bold cursor-default text-center'><span className='text-neutral-400 hover:text-white'>Suggestions For You.</span></h1>
          <div onClick={() => router.push(`posts/${post[random].id}`)} id={post[random].id} className={`all-post text-sm sm:txt-md md:text-lg lg:text-lg xl:text-xl max-w-[600px] text-left flex items-start justify-start flex-col gap-1 p-5 rounded-xl bg-zinc-700 overflow-hidden hover:bg-zinc-800 hover:border-2 hover:border-zinc-600 border-2 border-transparent cursor-pointer select-none transition-all hover:text-slate-100`}>
            <h4 className="px-3 py-1 rounded-md">Title: {splitText(post[random].title)}</h4>
          </div> */}
          <h1 style={style} onClick={() => main == splitText(post[random].title) ? router.push(`posts/${post[random].id}`) : ""} className='text-2xl transition-all sm:txt-3xl md:text-3xl lg:text-5xl xl:text-6xl capitalize  font-bold cursor-default text-center'><span className='text-neutral-400 hover:text-white'>{main}</span></h1>
          {/* <button onClick={() => router.push("/posts")} className='p-3 px-5 bg-neutral-700 hover:bg-neutral-800 hover:shadow-md rounded-xl font-semibold uppercase tracking-wide text-md sm:txt-lg md:text-lg lg:text-xl xl:text-xl'>Go To Posts page.</button> */}
          <p ref={mainDiv} className='translate-y-72 text-4xl text-slate-300 font-mono opacity-0 transition-all'>Click On The Title To Show Post</p>
        </div>
      </Layout>
    </>
    
  )
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()
  return{
    props: {
      post: data
    }
  }
}