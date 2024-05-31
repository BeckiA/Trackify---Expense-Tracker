
import { useState } from 'react';
import Trackify from './components/Trackify'
import TrackifyDisplay from './components/TrackifyDisplay'
import { FormValues } from './type';

const App = () => {
  const [data, setData] = useState<FormValues[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleSubmit = (formValues: FormValues) => {
    setData(prevData => [...prevData, formValues]);
  };  


  const handleDelete = (id: number) => {
    setData(prevData => prevData.filter((_, index) => index !== id));
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const filterdData = selectedCategory ? data.filter(item => item.category === selectedCategory) : data;
  return (      
    <>
    <Trackify onSubmit={handleSubmit}/>
    <div className="mb-5">
    <label htmlFor="inputState" className="form-label">Category</label>
    <select id="inputState" className="form-select"
    value={selectedCategory}
    onChange={handleCategoryChange}
    >
      <option value="">All Categories</option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
    </select>
  </div>
    <TrackifyDisplay onDelete={handleDelete} data={filterdData} />
    </>
  )
}

export default App
