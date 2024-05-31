// import React from 'react'

import { FormValues } from "../type";

interface TrackifyDisplayProps {
  data: FormValues[];
  onDelete: (id: number) => void;
}

const TrackifyDisplay = ({data, onDelete}: TrackifyDisplayProps) => {
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
</table>

</>
  )
}

export default TrackifyDisplay