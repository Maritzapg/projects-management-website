import axios, { AxiosResponse } from 'axios'
import { Product } from '@/utils/Product'

export const getProductsList = async (): Promise<Product[]> => {
  const list = await axios.get('https://dummyjson.com/products')
  return list.data.products
}

export const getProduct = async (id: number): Promise<Product> => {
  const list = await axios.get(`https://dummyjson.com/products/${id}`)
  return list.data
}

export const deleteProduct = async (id: number): Promise<AxiosResponse> => {
  return await axios.delete(`https://dummyjson.com/products/${id}`)
}

export const createProduct = async (product: Product): Promise<AxiosResponse> => {
  return await axios.post('https://dummyjson.com/products/add', product)
}

export const editProduct = async (product: Product): Promise<AxiosResponse> => {
  delete product.id
  return await axios.patch(`https://dummyjson.com/products/1`, product)
}
