import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
export default function Posts({posts, cons}) {
  const router = useRouter()
  const [more, setMore] = useState(20)
  const [origin2, setOrigin] = useState()
  useEffect(() => {
    if(more == posts.length){
      [moreBtn.current, allBtn.current].forEach(btn => {
        btn.setAttribute("disabled", '')
        Object.assign(btn.style, {
          "opacity": 0.25,
          "pointer-events" : "none",
          "user-select" : "none"
        })
      });
      
    }
    // console.log(router)
  }, [more])
  useEffect(() => {
    setOrigin(window.location.origin)
  }, [])
  const moreBtn = useRef()
  const allBtn = useRef()
  const upDownBtn = useRef()
  typeof window !== "undefined" ? window.addEventListener("scroll", () => {try {Math.round(window.scrollY) >= 255 ? upDownBtn.current.style.right = "1.25rem" : upDownBtn.current.style.right = "-100%"} catch (e) {}}):null
  return (
    <>
      <Layout title="ZVINZV - Posts">
        <div className='bg-zinc-900 text-white flex justify-center items-center flex-col gap-8 py-14'>
          
          <div className='fixed bottom-4 -right-full flex flex-col-reverse gap-2' ref={upDownBtn} id='upDown'>
            <div onClick={() => window.scroll({behavior: 'smooth', top: 100000})} className='bg-slate-700 hover:bg-slate-600 cursor-pointer p-2 px-3 rounded-xl'>▼</div>
            <div onClick={() => window.scroll({behavior: 'smooth', top: 0})} className='bg-slate-700 hover:bg-slate-600 cursor-pointer p-2 px-3 rounded-xl'>▲</div>
          </div>
          
          <h1 className='text-5xl uppercase font-bold cursor-default'>This Is <span className='underline text-neutral-400 hover:text-white'>Posts</span> page.</h1>
            <div className="grid  2xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-flow-row-dense place-content-center gap-5 w-4/5 mx-auto my-8 ">
            {posts.slice(0, more).map(post => {
                return (
                  <div key={post.id} onClick={() => router.push(`posts/${post.id}`)} id={post.id} className={`all-post text-xl w-full text-left flex items-start justify-start flex-col gap-1 p-5 rounded-xl bg-zinc-700 overflow-hidden hover:bg-zinc-800 hover:border-2 hover:border-zinc-600 border-2 border-transparent cursor-pointer select-none transition-all hover:text-slate-100`}>
                    <h4 className="px-3 py-1 rounded-md">UserId: {post.userId}</h4>
                    <h4 className="px-3 py-1 rounded-md">Id: {post.id}</h4>
                    <h4 className="px-3 py-1 rounded-md">Title: {post.title}</h4>
                    <p className="px-3 py-1 rounded-md">Body: {post.body}</p>
                  </div>
                )
              })
            }
            </div>
          <div className='flex gap-5'>
            <button onClick={() => more < posts.length ? setMore(prev=>prev+20) : null} className='p-3 px-5 bg-neutral-700 hover:bg-neutral-800 hover:shadow-md rounded-xl font-semibold uppercase tracking-wide' ref={moreBtn}>Get More!</button>
            <button onClick={() => setMore(posts.length)} className='p-3 px-5 bg-neutral-700 hover:bg-neutral-800 hover:shadow-md rounded-xl font-semibold uppercase tracking-wide' ref={allBtn}>Get All!</button>
          </div>
          <button onClick={() => router.push("/")} className='p-3 px-5 bg-neutral-700 hover:bg-neutral-800 hover:shadow-md rounded-xl font-semibold uppercase tracking-wide'>Go To Home page.</button>
        </div>
      </Layout>
    </>
    
  )
}


export async function getStaticProps(context) {
  const vercelUrl = process.env.VERCEL_URL;
  const apiHost = vercelUrl ? `https://${vercelUrl}` : 'http://127.0.0.1:3000';
  const res = await fetch(`${apiHost}/api/hello`)
  const data = await res.json()
  return{
    props: {
      posts : data,
    }
  }
}