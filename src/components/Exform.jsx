import React from "react";
import { useEffect, useState } from "react";
function Exform({ currentExpense, onSave, onCancel }) {
  const [details, setDetails] = useState({
    expense: "",
    amount: "",
    date: "",
  });

  useEffect(() => {
    if (currentExpense) {
      setDetails(currentExpense);
    } else {
      setDetails({ expense: "", amount: "", date: "" });
    }
  }, [currentExpense]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(details);
    setDetails({ expense: "", amount: "", date: "" });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-between">
        <input
          className="flex text-center"
          type="text"
          name="expense"
          placeholder="Expense Name"
          value={details.expense}
          onChange={handleChange}
          required
        />

        <input
          className="flex text-center"
          type="number"
          name="amount"
          placeholder="Amount"
          value={details.amount}
          onChange={handleChange}
          required
        />

        <input
          className="flex text-center"
          type="date"
          name="date"
          value={details.date}
          onChange={handleChange}
          required
        />

        <button
          className="flex text-center btn btn-success text-white"
          type="submit"
        >
          {currentExpense ? "Update" : "Add"} Expense
        </button>
      </form>
    </>
  );
}

export default Exform;
