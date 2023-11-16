import React, { useState } from 'react';

const NewTransactionForm = ({ addTransaction }) => {
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(newTransaction);
    setNewTransaction({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  return (
    <div>
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">
          Date:
          <input type="text" id="date" name="date" value={newTransaction.date} onChange={handleChange} />
        </label>
        <label htmlFor="description">
          Description:
          <input type="text" id="description" name="description" value={newTransaction.description} onChange={handleChange} />
        </label>
        <label htmlFor="category">
          Category:
          <input type="text" id="category" name="category" value={newTransaction.category} onChange={handleChange} />
        </label>
        <label htmlFor="amount">
          Amount:
          <input type="text" id="amount" name="amount" value={newTransaction.amount} onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewTransactionForm;
