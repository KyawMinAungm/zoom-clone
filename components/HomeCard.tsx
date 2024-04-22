'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface Props {
    iconUrl : string,
    title : string,
    description : string,
    className : string,
    handleClick : () => void
}

const HomeCard = ({iconUrl,title,description,className,handleClick}:Props) => {
  return (
    <div className={cn('flex flex-col justify-between cursor-pointer min-h-[260px] w-full xl:mx-auto xl:max-w-[270px] rounded-[14px] px-4 py-6',className)} onClick={handleClick}>
        <div className="flex-center size-12 rounded-[12px] glassmorphism">
        <Image src={iconUrl} width={27} height={27} alt='meeting'/>
        </div>
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-lg font-normal">{description}</p>

        </div>
    </div>
  )
}

export default HomeCard