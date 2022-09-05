import React from 'react'
import './SwitchButton.css'
import {CgDarkMode} from 'react-icons/cg'


function SwitchButton({onClick, mode}) {
  return (
    <div className='switch-button'
    onClick={onClick}
    >
        <div className='switch-button__container'>
            <CgDarkMode/>
        </div>
    </div>
  )
}

export default SwitchButton