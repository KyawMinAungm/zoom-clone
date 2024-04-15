'use client'
import { sideBarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { constants } from 'buffer'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideBar = () => {
    const pathname = usePathname()
  return (
    <section className='bg-dark-1 sticky top-0 left-0 w-fit flex flex-col justify-between text-white p-6 pt-28 max-sm:hidden lg:w-[264px]'>
         
        <div className="flex flex-col flex-1 gap-6">
            {
                sideBarLinks.map(link => { 
                    const isActive = pathname === link.route 
                    return(
                    
                        <Link key={link.label} href={link.route} className={cn('flex justify-start p-4 rounded-lg gap-4', {'bg-blue-1' : isActive})}  >
                            <Image alt={link.label} src={link.imgUrl} width={24} height={24}/>
                            <p className='font-semibold text-lg max-lg:hidden '>{link.label}</p>
                        </Link>
                    )}
                )
            }
        </div>
    </section>
  )
}

export default SideBar