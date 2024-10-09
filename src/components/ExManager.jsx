import { useEffect , useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Exform from './Exform.jsx';
import axios from 'axios';

import Exlist from './Exlist.jsx';
function ExManager() {
  const [expenses , setExpenses] = useState([]);
  const [currentExpense,setCurrentExpense] = useState(null);

  const fetchExpenses = async()=>{
    const response = await axios.get('http://localhost:8000/get');
    setExpenses(response.data);
  }

  const handleAddOrUpdate = async(expenseData)=>{
    if(currentExpense){
      await axios.put(`http://localhost:8000/update/${currentExpense._id}`,expenseData);
    }else{
      await axios.post(`http://localhost:8000/create`,expenseData);
    }
    fetchExpenses();
    setCurrentExpense(null);
  }

  const handleDelete = async(id)=>{
    await axios.delete(`http://localhost:8000/delete/${id}`);
    fetchExpenses();
  }

  const handleEdit = (expense)=>{
    setCurrentExpense(expense);
  }

  const handleCancel =()=>{
    setCurrentExpense(null);
  }

  useEffect(()=>{
    fetchExpenses();
  },[]);


  return (
    <>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-sky-500 p-4 rounded-md w-full max-w-2xl sm:p-6 lg:p-8">
        <Exform 
          currentExpense={currentExpense} 
          onSave={handleAddOrUpdate} 
          onCancel={handleCancel} 
        />
  
        <Exlist 
          expenses={expenses} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />
      </div>
    </div>
  </>
  )
}

export default ExManager
