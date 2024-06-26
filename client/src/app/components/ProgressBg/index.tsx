import React from 'react'

interface ProgressBgProps {
  backgroundColorClass?: string
  seconds: number
}

const ProgressBg: React.FC<ProgressBgProps> = ({ backgroundColorClass = 'bg-[#f5ff50]', seconds }) => {
  const progressBarStyle = {
    animation: `shrink-left-to-right ${seconds >= 0 ? seconds : 0}s linear forwards`,
    transformOrigin: 'right', // Ensures scaling happens from the right
  }

  return (
    <div className={'absolute inset-0 w-full h-full bg-transparent rounded-md overflow-hidden'}>
      <div style={progressBarStyle} className={`h-full w-full ${backgroundColorClass} opacity-50`} />
    </div>
  )
}

export default ProgressBg
