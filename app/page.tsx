import Image from 'next/image'
import abi from '../public/images/abi.jpg'

export default function Home() {
  return (
    <div className='flex justify-center items-center flex-col space-y-2 bg-black min-h-[calc(100vh-48px)]'>
      <h1 className='font-extrabold text-[20px]'>Hi, I am Abinesh</h1>
      <h2 className='font-bold text-[16px]'>I am a frontend developer</h2>
      <Image src={abi} alt='Not found' width={300} height={300}/>
    </div>
  );
}
