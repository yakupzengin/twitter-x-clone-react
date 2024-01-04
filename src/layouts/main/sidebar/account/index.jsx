import { Popover } from '@headlessui/react'
import { useAccount } from '../../../../store/auth/hook'
const Account = () => {

  const account = useAccount();
  return (
    <div className='mt-auto'>
      <Popover>
        <Popover.Button
          className=" my-3 p-2.5 font-family-inherit rounded-full hover:bg-[#eff3f41a] w-full flex text-left items-center outline-none">
          <img src={account.avatar} className='w-10 h-10 rounded-full ' alt="" />
          <div className='mx-3 text-[15px]'>
            <h6 className='font-bold leading-[20px]'>{account.fullname}</h6>
            <div className='text-[#71767b]'>
              @{account.username}
            </div>
          </div>

        </Popover.Button>
        <Popover.Panel>
          This place is gonna be open when you click the button
        </Popover.Panel>
      </Popover>
    </div>
  )
}

export default Account