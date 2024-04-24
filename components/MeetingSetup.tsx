import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

const MeetingSetup = ( {setIsSetupComplete}: {setIsSetupComplete : (value : boolean) => void}) => {
  const [isMicCamToggleOn, setIsMicCamToggleOn] = useState(false)
  const call = useCall()
  
if (!call)  {
  throw new Error("UseCall must be use within StreamCall component")
}

  useEffect(() => {
  if (isMicCamToggleOn ) {
    call?.microphone.disable()
    call?.camera.disable()
  } else {
    call?.camera.enable();
    call?.microphone.enable();
  }
  
  }, [isMicCamToggleOn,call?.camera,call?.microphone])
  
  return (
    <div className='flex-center w-full h-screen flex-col gap-3 text-white'>
      <h1 className="text-2xl font-bold">Steup</h1>
      <div className="max-w-[500px]">

      <VideoPreview/>
      </div>
      <div className="flex justify-center items-center h-16 gap-3">
        <label className='flex-center  gap-2 font-medium'>
          <input type="checkbox" checked={isMicCamToggleOn} onChange={(e) => {
            setIsMicCamToggleOn(e.target.checked)
          }} />
          Join with mic and camera off
        </label>
        <DeviceSettings/>

      </div>
        <div className='flex-center'>
          <Button className='rounded-md bg-green-500 px-4 py-2.5' onClick={() => setIsSetupComplete(true) }>Join meeting</Button>
        </div>
    </div>
  )
}

export default MeetingSetup