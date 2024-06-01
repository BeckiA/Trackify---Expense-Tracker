// import React from 'react'

import { FormValues } from "../type";

interface TrackifyDisplayProps {
  data: FormValues[];
  onDelete: (id: number) => void;
}

const TrackifyDisplay = ({data, onDelete}: TrackifyDisplayProps) => {

  if(data.length === 0) return null;
  return (
    <>

  <table className="table">
  <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Amount</th>
      <th scope="col">Category</th>
      <th scope="col"></th>
    </tr>
  </thead>
  
  <tbody>
    {data.map((item, index) => (
      <tr key={index}>
      <td>{item.description}</td>
      <td>{item.amount}</td>
      <td>{item.category}</td>
      <td>
      <button
      className="btn btn-danger"
      onClick={() => onDelete(index)}
      >
      Delete
      </button>
      </td>
    </tr>
    )
  )}
  </tbody>
  <tfoot>
    <td scope="col">Amount</td>
    <td scope="col">${data.reduce((acc, expense)=> expense.amount + acc, 0)}</td>
    <td scope="col"></td>
    <td scope="col"></td>
  </tfoot>
</table>

</>
  )
}

export default TrackifyDisplay