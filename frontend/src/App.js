import { useState ,useEffect } from "react"
import TableTasks from "./components/TableTasks";
import './App.css';
import axios from "axios";
import Confirmation from "./components/Confirmation";

function App() {

  const [backend , setabackend] = useState([{}]) ;
  const [isLoading , setisLoading] = useState(true) ;
  const [showConfirm , setshowConfirm] = useState(false) ;
  const [validDeleteId , setvalidDeleteId] = useState(null) ;
      useEffect
      (() =>{
        const fetchData = async () => {
          try {
            const response = await axios.get('/api/tasks');
            setabackend(response.data);
            setisLoading(false);
            console.log(response.data);
          } catch (error) {
            setisLoading(false);
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      } , [] ) ;

      // show connfirmation modal to delete task
      const showConfirmtoDeleteTask = (id) => {
        setshowConfirm(true) ;
        setvalidDeleteId(id) ;
        console.log("delete task with id: " + id);
      } ;

      const deleteTask = async () => {
        if (validDeleteId) {
             try {
              await axios.delete(`/api/tasks/${validDeleteId}`);
              setabackend(backend.filter(task => task.id !== validDeleteId));
              setshowConfirm(false) ;
            } catch (error) {
              console.error('Error deleting task:', error);
            }
          }
      } ;

      const updateTask = (id) => {
        console.log("update task with id: " + id);
      } ;
  return (
    <div className="container d-flex flex-column  mt-5">
      { isLoading ? <h1>Loading...</h1>
      : <TableTasks listTasks={backend} showConfirmtoDeleteTask={(id)=>showConfirmtoDeleteTask(id)} updateTask={(id)=>updateTask(id)} /> 
       }
       <Confirmation show={showConfirm} onClose={()=>setshowConfirm(false) } onConfirm={deleteTask} />
    </div>
  )
}

export default App
