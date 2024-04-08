import { FC } from 'react'
import notificationsIcon from '../../assets/bell.svg'
import Image from 'next/image'

export const Header: FC = () => {
  return (
    <div id='info' className='border-b border-grey-light bg-white h-24 pr-7 pl-7'>
      <div className='flex justify-between flex-grow items-center border-b h-24'>
        <div className='flex'>
          <ul className='flex list-reset text-black'>
            <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fill-rule='evenodd'
                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                clip-rule='evenodd'
              />
            </svg>
          </ul>
        </div>
        <div className='flex'>
          <ul className='flex list-reset text-black'>
            <li className='px-4'>
              <div className='relative mx-3'>
                <input
                  type='text'
                  className='w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                  placeholder='Search...'
                />
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <svg className='w-5 h-5 text-gray-400' viewBox='0 0 24 24' fill='none'>
                    <path
                      d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className='pr-4 pt-[5px]'>
              <Image src={notificationsIcon} alt='notifications' />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
