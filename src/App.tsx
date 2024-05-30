
import Trackify from './components/Trackify'
import TrackifyDisplay from './components/TrackifyDisplay'

const App: React.FC = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };



  return (      
    <>
    <Trackify onSubmit={handleSubmit}/>
    <TrackifyDisplay/>
    </>
  )
}

export default App
