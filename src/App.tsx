
import { useState } from 'react';
import Trackify from './components/Trackify'
import TrackifyDisplay from './components/TrackifyDisplay'
import { FormValues } from './type';

const App = () => {
  const [data, setData] = useState<FormValues[]>([]);

  const handleSubmit = (formValues: FormValues) => {
    setData(prevData => [...prevData, formValues]);
  };  



  return (      
    <>
    <Trackify onSubmit={handleSubmit}/>
    <TrackifyDisplay data={data} />
    </>
  )
}

export default App
