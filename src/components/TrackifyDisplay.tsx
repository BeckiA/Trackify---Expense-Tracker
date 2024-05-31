// import React from 'react'

import { FormValues } from "../type";

interface TrackifyDisplayProps {
  data: FormValues[];
}

const TrackifyDisplay = ({data}: TrackifyDisplayProps) => {
  return (
    <><div className="mb-5">
    <label htmlFor="inputState" className="form-label">Category</label>
    <select id="inputState" className="form-select">
      <option selected>All Categories</option>
      <option>Groceries</option>
      <option>Utilities</option>
      <option>Entertainment</option>
    </select>
  </div>

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
      <td></td>
    </tr>
    )
  )}
  </tbody>
</table>

</>
  )
}

export default TrackifyDisplay