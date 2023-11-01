import Image from 'next/image'
import SeeMoreButton from './components/SeeMoreButton'

function getDate() {
  const jsDate = new Date();
  return jsDate.toLocaleDateString()
}

export default function Home() {
  return (
    <div>
      <div className="mx-5">
        <h1 className="text-3xl font-bold">Welcome to Turing {getDate()}</h1>
        <div className="flex flex-col justify-center items-center py-10">
          <Image src="/turing image.png" alt='turing' priority width={500} height={500} />
        </div>
        <SeeMoreButton />
      </div>
    </div>
  )
}
