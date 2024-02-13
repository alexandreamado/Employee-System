import React from 'react'
import { Link } from 'react-router-dom'

const Employee = () => {
  return (
    <div>
      <div className="flex items-center justify-between gap-">
        <h3 className="text-xl font-bold">Lista de Employeer</h3>
        <Link
          to="/dashboard/add_employee"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Adicionar Employeer
        </Link>
      </div>
    </div>
  )
}

export default Employee
