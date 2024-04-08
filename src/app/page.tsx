'use client'
import { useCallback, useEffect, useState } from 'react'
import { Header } from '@/components/header/Header'
import { TitleList } from '@/components/header/TitleList'
import { Menu } from '@/components/menu/Menu'
import { Table } from '@/components/table/Table'
import { DeleteModal } from '@/components/modals/DeleteModal'
import { FormModal } from '@/components/modals/FormModal'
import { Product } from '@/utils/Product'
import { getProductsList, deleteProduct, createProduct, editProduct } from '@/services/products'
import Head from 'next/head'

export const productInitialState = {
  title: '',
  description: '',
  price: 0,
  stock: 0,
  brand: '',
  thumbnail: '',
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>()
  const [selectedProduct, setSelectedProduct] = useState<Product>(productInitialState)
  const [deleteModal, setDeleteModal] = useState(false)
  const [formModal, setFormModal] = useState(false)

  const getProducts = useCallback(async () => {
    const list = await getProductsList()
    setProducts(list)
  }, [])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  const onEditProduct = (product: Product) => {
    setSelectedProduct(product)
    setFormModal(true)
  }

  const onDeleteProduct = (product: Product) => {
    setSelectedProduct(product)
    setDeleteModal(true)
  }

  const removeProduct = async () => {
    if (selectedProduct.id && products !== undefined) {
      const result = await deleteProduct(selectedProduct.id)
      if (result.status === 200) {
        const newList = products.filter(p => p.id !== selectedProduct.id)
        setProducts(newList)
      }
      setDeleteModal(false)
      setSelectedProduct(productInitialState)
    }
  }

  const saveProduct = async (product: Product) => {
    const id = product.id
    if (id) {
      const result = await editProduct(product)

      if (result.status === 200 && products) {
        const temProds = products
        const i = temProds?.findIndex(x => x.id === id)
        temProds[i] = { id, ...product }
        setProducts(temProds)
      }
    } else {
      const result = await createProduct(product)

      if (result.status === 200 && products) {
        const newList = [result?.data, ...products]
        setProducts(newList)
      }
    }
    setFormModal(false)
    setSelectedProduct(productInitialState)
  }

  return (
    <>
      <Head>
        <title>management website</title>
        <link rel='icon' type='image/ico' href='/img/goals.ico' />
      </Head>
      <div className='bg-[#F6F6F6] lg:flex'>
        <Menu />
        <div id='content' className='bg-transparent flex-grow flex-shrink flex-auto overflow-y-scroll'>
          <Header />
          <section className='container px-8 py-4 mx-auto'>
            <TitleList onAdd={() => setFormModal(true)} />
            <hr className='my-6 border-gray-300' />
            <Table list={products} onEdit={onEditProduct} onDelete={onDeleteProduct} />
          </section>
        </div>
      </div>
      {deleteModal && <DeleteModal onClose={() => setDeleteModal(false)} onDelete={removeProduct} />}
      {formModal && (
        <FormModal
          onClose={() => {
            setFormModal(false)
            setSelectedProduct(productInitialState)
          }}
          sendData={saveProduct}
          product={selectedProduct}
        />
      )}
    </>
  )
}
