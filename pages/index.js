import Layout from '@/components/Layout'
export default function Home() {
  return (
    <>
      <Layout title="ZVINZV">
        <div className='bg-zinc-900 text-white flex justify-center items-center flex-col gap-8'>
          <h1 className='text-5xl uppercase font-bold cursor-default'>This Is <span className='underline text-neutral-400 hover:text-white'>Home</span> page.</h1>
          <button onClick={() => router.push("/posts")} className='p-3 px-5 bg-neutral-700 hover:bg-neutral-800 hover:shadow-md rounded-xl font-semibold uppercase tracking-wide'>Go To Posts page.</button>
        </div>
      </Layout>
    </>
    
  )
}
