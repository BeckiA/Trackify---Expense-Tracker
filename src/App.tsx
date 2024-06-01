
import { useState } from 'react';
import Trackify from './components/Trackify'
import TrackifyDisplay from './components/TrackifyDisplay'
import { FormValues } from './type';
import ExpenseFilter from './components/ExpenseFilter';

const App = () => {
  const [data, setData] = useState<FormValues[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleSubmit = (formValues: FormValues) => {
    setData(prevData => [...prevData, formValues]);
  };  


  const handleDelete = (id: number) => {
    setData(prevData => prevData.filter((_, index) => index !== id));
  };

  

  const filterdData = selectedCategory ? data.filter(item => item.category === selectedCategory) : data;
  return (      
    <>
    <Trackify onSubmit={handleSubmit}/>
    <ExpenseFilter onSelectCategory={category=> setSelectedCategory(category)} />
    <TrackifyDisplay onDelete={handleDelete} data={filterdData} />
    </>
  )
}

export default App
