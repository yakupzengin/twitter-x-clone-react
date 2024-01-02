import React from 'react'
import { Popover } from '@headlessui/react'
const Account = () => {
  return (
    <div className='mt-auto'>
        <Popover>
            <Popover.Button 
            className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex">
                Test
            </Popover.Button>
            <Popover.Panel>
                This place is gonna be open when you click the button 
            </Popover.Panel>
        </Popover>
    </div>
  )
}

export default Account