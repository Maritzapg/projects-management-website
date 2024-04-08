import { FC } from 'react'

type Props = {
  onAdd: () => void
}

export const TitleList: FC<Props> = ({ onAdd }) => {
  return (
    <div className='flex justify-between flex-grow items-center'>
      <h2 className='text-2xl font-bold text-gray-800'>Products List</h2>
      <button
        onClick={onAdd}
        className='px-7 py-4 tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#fba00a] rounded-md hover:bg-orange-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'
      >
        ADD NEW PRODUCT
      </button>
    </div>
  )
}
