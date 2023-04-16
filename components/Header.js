import Link from "next/link";

export default function Layout (props){
  return (
    <>
      <div className="header flex justify-center items-center gap-10 text-2xl w-full bg-neutral-800 text-white">
        <Link href="/" className="relative before:absolute before:bottom-0 before:h-0.5 before:bg-white before:w-0 hover:before:w-full before:content-[''] before:transition-all">Home</Link>
        <Link href="/posts" className="relative before:absolute before:bottom-0 before:h-0.5 before:bg-white before:w-0 hover:before:w-full before:content-[''] before:transition-all">Posts</Link>
      </div>
    </>
  )
}
