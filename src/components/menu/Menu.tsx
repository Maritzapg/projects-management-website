import { FC } from 'react'
import homeIcon from '../../assets/home.svg'
import eCommerceIcon from '../../assets/e-commerce.svg'
import productsIcon from '../../assets/products.svg'
import paymentsIcon from '../../assets/payments.svg'
import reportsIcon from '../../assets/reports.svg'
import settingsIcon from '../../assets/settings.svg'
import logoutIcon from '../../assets/logout.svg'
import Image from 'next/image'
import Link from 'next/link'

const menu = [
  {
    icon: homeIcon,
    text: 'Home',
    path: '/blank',
  },
  {
    icon: eCommerceIcon,
    text: 'E-Commerce',
    path: '/blank',
  },
  {
    icon: productsIcon,
    text: 'Products',
    path: '/products',
  },
  {
    icon: paymentsIcon,
    text: 'Payment',
    path: '/blank',
  },
  {
    icon: reportsIcon,
    text: 'Report',
    path: '/blank',
  },
  {
    icon: settingsIcon,
    text: 'Settings',
    path: '/blank',
  },
]

export const Menu: FC = () => {
  const menuList = menu.map((item, i) => {
    return (
      <Link
        key={i}
        className='flex items-center px-4 pl-12 py-3 mt-5 text-gray-700 hover:bg-[#fba00a] transform rounded-md'
        href={item.path}
      >
        <Image src={item.icon} alt='home' />

        <span className='mx-4 font-normal'>{item.text}</span>
      </Link>
    )
  })

  return (
    <>
      <aside className='flex flex-col w-[330px] px-11 py-8 overflow-y-auto bg-[#efe5da] border-r rtl:border-r-0 rtl:border-l'>
        {/* <img className='w-auto h-6 sm:h-7' src='https://merakiui.com/images/full-logo.svg' alt='' /> */}
        <div className='flex pb-8'>
          <div className='w-[5px] h-7 mr-[10px] bg-[#F5CC35]' />
          <h2 className='text-[21px] font-bold text-gray-800'>CRUD OPERATIONS</h2>
        </div>

        <div className='flex flex-col items-center m-4 -mx-2'>
          <img
            className='object-cover w-36 h-36 mx-2 rounded-full'
            src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            alt='avatar'
          />
          <h4 className='mx-2 mt-7 text-xl font-bold text-gray-800'>Karthi Madesh</h4>
          <p className='mx-2 mt-1 text-md text-[#fba00a]'>Admin</p>
        </div>

        <div className='flex flex-col justify-between flex-1 mt-6'>
          <nav>{menuList}</nav>

          <a href='#' className='flex items-center px-4 -mx-2 mt-10 text-gray-600 pl-14'>
            <span className='mx-2 font-normal text-gray-800'>Logout</span>
            <Image src={logoutIcon} alt='logout' />
          </a>
        </div>
      </aside>
    </>
  )
}
