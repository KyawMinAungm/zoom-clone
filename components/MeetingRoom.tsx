import { cn } from '@/lib/utils'
import { CallControls, CallParticipantsList, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk'
import React, { useState } from 'react'

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right'

const MeetingRoom = () => {
  const [layout, setLayout] = useState<CallLayoutType>('speaker-left')
const [showParticipants, setShowParticipants] = useState(false)
  const CallLayout = () =>  {
    switch (layout) {
      case 'grid': 
         return <PaginatedGridLayout/>
      
      case "speaker-left" : 
        return <SpeakerLayout participantsBarPosition={"right"}/>

      default:
        return <SpeakerLayout participantsBarPosition={"left"}/>
        
    
      
    }
  }

  return (
    <section className='relative flex justify-center items-center w-full h-screen text-white pt-4'>
      <div className="flex-center relative size-full ">
        <div className="size-full flex items-center max-w-[1000px]">
        <CallLayout/>
          
        </div>
        <div className={cn('h-[calc(100vh-86px0] hidden ml-2 ', {'show-block' : showParticipants})}>
          <CallParticipantsList onClose={()=> setShowParticipants(false)}/>
        </div>
        <div className="fixed bottom-0 w-full flex-center gap-5 ">
          <CallControls/>
        </div>
      </div>
    </section>
  )
}

export default MeetingRoom