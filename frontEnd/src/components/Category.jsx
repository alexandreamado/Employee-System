import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const Category = () => {  

  const [category, setCategory] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3001/auth/category')
      .then(result => {
        if(result.data.Status) {
          setCategory(result.data.Result)
        }else {
          console.log(res.data.Err)
        }
      }).catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <div className="flex items-center justify-between gap-">
        <h3 className="text-xl font-bold">Lista de Categoria</h3>
        <Link
          to="/dashboard/add_category"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Adicionar Categoria
        </Link>
      </div>

      <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Product name
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                category.map(c => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4">{c.name}</td>
                    <td className="px-6 py-4 text-blue-600">Edit</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Category;
