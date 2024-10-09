import React from 'react'

function ExItem({expense , onEdit , onDelete}) {
  return (
   <>
   <div className='flex justify-between m-3  p-3 bg-indigo-500'>
    <h3 className='text-black font-bold'>{expense.expense}</h3>
    <p className='text-black'> Amount : ${expense.amount}</p>
    <p className='text-black'>Date:{new Date(expense.date).toLocaleDateString()}</p>
    
    <button className="btn btn-warning" onClick={()=>onEdit(expense)}>Update</button>
    <button className="btn btn-error" onClick={()=> onDelete(expense._id)}>Delete</button>
    
   </div>
   </>
  )
}

export default ExItem
