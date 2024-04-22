import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import React from 'react'

const HomeLayout = ({children } : {children :React.ReactNode}) => {
  return (
    <main className='relative'>
      <NavBar/>
      <div className="flex ">
        <SideBar/>
        <section className="flex min-h-screen flex-1 flex-col px-6 py-6  max-md:pb-14 sm:px-14  ">
          <div className="width-full">

    {children}
          </div>
        </section>
      </div>
    
    </main>
  )
}

export default HomeLayout