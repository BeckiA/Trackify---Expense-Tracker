
interface Props {
    onSelectCategory : (category : string) => void
}
const ExpenseFilter = ({onSelectCategory} : Props) => {
  return (
    <div className="mb-5">
    <label htmlFor="inputState" className="form-label">Category</label>
    <select id="inputState" className="form-select"
    onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="">All Categories</option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
    </select>
  </div>
  )
}

export default ExpenseFilter