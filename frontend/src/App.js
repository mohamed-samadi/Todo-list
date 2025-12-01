import { useState ,useEffect } from "react"
import TableTasks from "./components/TableTasks";
import './App.css';
import axios from "axios";
import Confirmation from "./components/Confirmation";
import Form from "./components/Form";
function App() {

  const [backend , setabackend] = useState([{}]) ;
  const [isLoading , setisLoading] = useState(true) ;
  const [showConfirm , setshowConfirm] = useState(false) ;
  const [validDeleteId , setvalidDeleteId] = useState(null) ;
  const [formData , setformData] = useState({
    title: "",
    description: ""
  }) ;
  // get data from backend 
      useEffect
      (() =>{
        const fetchData = async () => {
          try {
            const response = await axios.get('/api/tasks');
            setabackend(response.data);
            setisLoading(false);
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

      // insert in data to backend
        const handleformChange = (e) => { 
        const { name, value } = e.target;
        setformData((prevData) => ({
          ...prevData,
          [name]: value.trim()
        })) ;
      } ;

      const  validFormData = {
        title: formData.title.length > 3 && formData.title.length < 255,
        description: formData.description.length > 5
      }
      const validFields = Object.values(validFormData).some(value => value === false) ;
      
      async function addNewTask(){
        try{
          const response = await axios.post('/api/tasks', formData );
          setabackend([...backend, {id: response.data.insertId, 
            ...formData, is_completed: 0, created_at: new Date().toISOString().slice(0, 19).replace('T', ' ')}]);
          setformData({ title: "", description: "" }) ;
          
        }catch(error){
          console.error('Error creating task:', error);
       }
        
      } 

      const handleSubmit = (e) => {
        e.preventDefault();
        addNewTask() ;

    };


      const updateTask = (id) => {
        console.log("update task with id: " + id);
      } ;
  return (
    <div className="container d-flex flex-column  mt-5">

      <Form  handleformChange={handleformChange} handleSubmit={handleSubmit} validFields={validFields} formData={formData} />
      { isLoading ? <h1>Loading...</h1>
      : <TableTasks listTasks={backend} showConfirmtoDeleteTask={(id)=>showConfirmtoDeleteTask(id)} updateTask={(id)=>updateTask(id)} /> 
       }
       <Confirmation show={showConfirm} onClose={()=>setshowConfirm(false) } onConfirm={deleteTask} />
    </div>
  )
}

export default App
