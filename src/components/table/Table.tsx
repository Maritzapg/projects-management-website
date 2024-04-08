import { Product } from '@/utils/Product'
import { FC } from 'react'

const columns = ['', 'Tile', 'Description', 'Price', 'Stock', 'Brand']

const products = [
  {
    title: 'title',
    description: 'jstj',
    price: 'hwrh',
    stock: 'stock',
    brand: 'brand',
  },
  {
    title: 'title 1',
    description: 'des 2',
    price: 'hwrh 2',
    stock: 'stock 2',
    brand: 'brand 2',
  },
]

type Props = {
  list?: Product[]
  onEdit: (item: Product) => void
  onDelete: (item: Product) => void
}

export const Table: FC<Props> = ({ list, onEdit, onDelete }) => {
  const renderColumns = columns.map((column, i) => {
    return (
      <th
        key={i}
        scope='col'
        className='px-3 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-400 font-medium'
      >
        {column}
      </th>
    )
  })

  const renderProducts = () => {
    return list?.map((product, i) => {
      return (
        <tr key={i} className='h-24'>
          <td className='w-[115px] px-4 py-4 text-sm font-medium rounded-l-lg'>
            <img
              className='object-cover w-18 h-14 -mx-1 border-2 border-white rounded-lg shrink-0'
              src={product.thumbnail}
              alt=''
            />
          </td>
          <td className='w-[15px] px-3 py-4 text-sm '>
            <h4 className='text-gray-700 text-base'>{product.title}</h4>
          </td>
          <td className='px-3 py-4 text-sm '>
            <h4 className='text-gray-700 text-base'>{product.description}</h4>
          </td>
          <td className='px-3 py-4 text-sm whitespace-nowrap'>
            <h4 className='text-gray-700 text-base'>{product.price}</h4>
          </td>

          <td className='px-3 py-4 text-sm whitespace-nowrap'>
            <h4 className='text-gray-700 text-base'>{product.stock}</h4>
          </td>

          <td className='px-3 py-4 text-sm whitespace-nowrap'>
            <h4 className='text-gray-700 text-base'>{product.brand}</h4>
          </td>

          {/* edit */}
          <td className='px-1 py-4 text-sm whitespace-nowrap'>
            <button
              className='text-[#fba00a] transition-colors duration-200 hover:text-yellow-500 focus:outline-none'
              onClick={() => onEdit(product)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                />
              </svg>
            </button>
          </td>
          {/* delete */}
          <td className='px-1 py-4 text-sm whitespace-nowrap rounded-r-lg'>
            <button
              className='text-[#fba00a] transition-colors duration-200 hover:text-red-500 focus:outline-none'
              onClick={() => onDelete(product)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                />
              </svg>
            </button>
          </td>
        </tr>
      )
    })
  }
  return (
    <div className='flex flex-col mt-6'>
      <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
          <div className='overflow-hidden md:rounded-lg'>
            <table className='min-w-full divide-y border-separate border-spacing-y-4'>
              <thead className='bg-gray-[#F6F6F6]'>
                <tr>
                  {renderColumns}

                  <th scope='col' className='relative py-3.5 px-1 w-16'>
                    <span className='sr-only'>Edit</span>
                  </th>
                  <th scope='col' className='relative py-3.5 px-1 w-16'>
                    <span className='sr-only'>Delete</span>
                  </th>
                </tr>
              </thead>

              <tbody className='bg-white divide-y divide-gray-200 rounded-b-sm'>{renderProducts()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
