import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Product } from '@/utils/Product'
import { getProduct } from '@/services/products'
import { productInitialState } from '@/utils/InitialState'

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().positive().required(),
    stock: yup.number().min(0).integer().required(),
    brand: yup.string().required(),
    thumbnail: yup.string(),
  })
  .required()

type Props = {
  onClose: () => void
  sendData: (data: Product) => void
  product: Product
}

export const FormModal: FC<Props> = ({ onClose, product, sendData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: product.id ? async () => getProduct(product.id || 0) : productInitialState,
  })

  const onSubmit: SubmitHandler<Product> = data => {
    sendData(data)
  }

  return (
    <div
      id='crud-modal'
      tabIndex={-1}
      aria-hidden='true'
      className='bg-gray-400 bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'
    >
      <div className='relative p-4 w-full max-w-md max-h-full'>
        <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
          <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Save Product</h3>
            <button
              onClick={onClose}
              type='button'
              className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
              data-modal-toggle='crud-modal'
            >
              <svg
                className='w-3 h-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                />
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className='p-4 md:p-5'>
            <div className='grid gap-4 mb-4 grid-cols-2'>
              <div className='col-span-2'>
                <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Title
                </label>
                <input
                  {...register('title', { required: true })}
                  type='text'
                  name='title'
                  id='tile'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Type product title'
                />
                {errors?.title && <p className='mt-2  text-red-600 text-sm'>{errors?.title?.message}</p>}
              </div>
              <div className='col-span-2'>
                <label htmlFor='description' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Description
                </label>
                <textarea
                  {...register('description', { required: true })}
                  id='description'
                  rows={4}
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Write product description here'
                ></textarea>
                {errors?.description && <p className='mt-2  text-red-600 text-sm'>{errors?.description?.message}</p>}
              </div>
              <div className='col-span-2 sm:col-span-1'>
                <label htmlFor='price' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Price
                </label>
                <input
                  {...register('price', { required: true })}
                  type='number'
                  name='price'
                  id='price'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='$2999'
                />
                {errors?.price && <p className='mt-2  text-red-600 text-sm'>{errors?.price?.message}</p>}
              </div>
              <div className='col-span-2 sm:col-span-1'>
                <label htmlFor='category' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Stock
                </label>
                <input
                  {...register('stock', { required: true })}
                  type='number'
                  name='stock'
                  id='stock'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='50'
                />
                {errors?.stock && <p className='mt-2  text-red-600 text-sm'>{errors?.stock?.message}</p>}
              </div>
              <div className='col-span-2'>
                <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Brand
                </label>
                <input
                  {...register('brand', { required: true })}
                  type='text'
                  name='brand'
                  id='brand'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Type brand'
                />
                {errors?.brand && <p className='mt-2  text-red-600 text-sm'>{errors?.brand?.message}</p>}
              </div>
            </div>
            <button
              type='submit'
              disabled={!isValid || isSubmitting}
              className={`${
                !isValid || isSubmitting ? 'opacity-25 cursor-not-allowed' : ''
              }  text-white inline-flex items-center bg-[#fba00a] hover:bg-[#fb930a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center `}
            >
              <svg
                className='me-1 -ms-1 w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
              Save product
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
