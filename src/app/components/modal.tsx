import React, {ReactNode } from 'react'


interface ModalProps {
    children: ReactNode
}

export default function Modal({children}: ModalProps) {

  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-screen bg-gray-50/80 z-1000 flex justify-center items-center">
        <div className='relative flex items-center justify-center bg-white w-[280px] p-[15px] md:w-[360px]'>
          {children}
        </div>   
      </div>
    </>
  )
}
