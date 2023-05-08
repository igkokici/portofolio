import Image from 'next/image'
import { BsFillMoonStarsFill } from "react-icons/bs"
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai"
import devEd from "../../public/dev-ed-wave.png"

export default function Home() {
  return (
    <main className=' bg-white px-10'>
      <section className='min-h-screen'>
        <nav className=' py-10 mb-12 flex justify-between'>
          <h1 className=' text-xl font-burtons'>developedbyIgli</h1>
          <ul className=' flex items-center'>
            <li>
              <BsFillMoonStarsFill className=' cursor-pointer text-2xl' />
            </li>
            <li>
              <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2  rounded-md ml-8' href='#'>Resume</a>
            </li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className=' text-5xl py-2 text-teal-600 font-medium'>Igli Kokici</h2>
          <h3 className=' text-2xl py-2'>Software Developer</h3>
          <p className=' text-md py-5 leading-8'>
            Providing freelancing services for programming needs.
          </p>
        </div>
        <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <AiFillLinkedin className=' cursor-pointer'/>
          <AiFillInstagram className=' cursor-pointer'/>
        </div>
        <div className=' relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
          <Image src={devEd} alt='' fill style={{ objectFit: 'cover' }}/>
        </div>
      </section>
    </main>
  )
}
