import Layout from '@/components/Layout'
import { useRouter } from 'next/router'

export default function Posts({post}) {
  const router = useRouter()
  return (
    <>
      <Layout title={`ZVINZV - Post num ${post.id}`}>
        <div className='bg-zinc-900 text-white flex justify-center items-center flex-col gap-8 py-14'>
          <h1 className='text-5xl uppercase font-bold cursor-default'>This Is <span className='underline text-neutral-400 hover:text-white'>Post Detales</span> page.</h1>
          {/* <h1 className='text-5xl font-bold cursor-default'>{JSON.stringify(post)}</h1> */}
            <div className="grid place-content-center gap-5 w-2/6 mx-auto my-8 ">
            
                <div id={post.id} className={`all-post text-xl w-full text-left flex items-start justify-start flex-col gap-1 p-5 rounded-xl bg-zinc-700 overflow-hidden hover:bg-zinc-800 hover:border-2 hover:border-zinc-600 border-2 border-transparent cursor-pointer select-none transition-all hover:text-slate-100`}>
                  
                  <h4 className="px-3 py-1 rounded-md">UserId: {post.userId}</h4>
                  <h4 className="px-3 py-1 rounded-md">Id: {post.id}</h4>
                  <h4 className="px-3 py-1 rounded-md">Title: {post.title}</h4>
                  <p className="px-3 py-1 rounded-md">Body: {post.body}</p>
                </div>
              
            </div>
          <button onClick={() => router.push("/posts")} className='p-3 px-5 bg-neutral-700 hover:bg-neutral-800 hover:shadow-md rounded-xl font-semibold uppercase tracking-wide'>Go Back.</button>
        </div>
      </Layout>
    </>
    
  )
}


export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
  const data = await res.json()
  const paths = data.map(d => {
        return {
          params: {id: `${d.id}`}
        }
  })
  return{
    paths: paths,
    fallback: false
  }
}


export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  const data = await res.json()
  return{
    props: {
      post: data
    }
  }
}