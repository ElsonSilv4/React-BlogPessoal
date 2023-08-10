import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-[#fe79b9] text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Blog pessoal Marielson | Copyright: </p>
            <p className='text-lg text-white'>Minhas redes</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} weight='bold' color='white' />
              <InstagramLogo size={48} weight='bold' color='white' />
              <FacebookLogo size={48} weight='bold' color='white' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer