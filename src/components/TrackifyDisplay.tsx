// import React from 'react'

const TrackifyDisplay = () => {
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
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

</>
  )
}

export default TrackifyDisplay