import MeetingTypyeList from '@/components/MeetingTypyeList';
import React from 'react'

const Home = () => {
  const now = new Date()
  const time = now.toLocaleTimeString('en-MM',{hour :'2-digit',minute : '2-digit',hour12 :true});
  const date = now.toLocaleDateString('en-MM',{dateStyle: 'full'});
  return (
    <section className='size-full text-white flex flex-col gap-10'>
      <div className="rounded-[20px] h-[300px] w-full bg-hero bg-cover ">
        <div className="h-full flex flex-col justify-between px-5 py-8 lg:p-11">
          <h1 className="glassmorphism max-w-[270px] py-2 text-center rounded font-normal text-base">Upcoming meeting at : 12:30 PM</h1>
          <div className="flex flex-col ">
            <h1 className='text-4xl lg:text-7xl font-extrabold'>{time}</h1>
            <p className="text-lg lg:text-2xl font-medium text-sky-1">{date}</p>
          </div>
        </div>
      </div>
    
    <MeetingTypyeList/>
    </section>
  )
}

export default Home