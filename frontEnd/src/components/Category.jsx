import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => { 
  return (
    <div>
       <div className='flex justify-center'>
            <h3 className='text-xl font-bold'>Lista de Categoria</h3>
       </div> 

       <Link to="/dashboard/add_category" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Adicionar Categoria</Link>
    </div>
  )
}

export default Category
