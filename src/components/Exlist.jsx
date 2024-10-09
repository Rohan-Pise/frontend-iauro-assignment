import React from 'react'
import ExItem from './ExItem';

function Exlist({expenses , onEdit , onDelete}) {
  return (
   <>
   {expenses.map((expense)=>(
    <ExItem key = {expense._id} expense={expense} onEdit={onEdit} onDelete={onDelete}/>
   ))}
   </>
  )
}

export default Exlist
