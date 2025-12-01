
function TableTasks({listTasks , showConfirmtoDeleteTask , updateTask}) {
  return (
    <>
        <table border={1} className="table table-responsive-sm table-bordered table-dark table-hover">
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>description</th>
                <th>status</th>
                <th>created_at</th>
                <th>action</th>
            </tr>

        </thead>
        <tbody>
            { listTasks.length !== 0 ? listTasks.map((task , index) => (
                <tr key={index} >
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.is_completed ? "completed" : "uncompleted"}</td>
                    <td>{task.created_at}</td>
                    <td className="d-flex align-items-center justify-content-around ">
                        <button onClick={()=>updateTask(task.id)} 
                            className="btn btn-primary">update</button>
                        <button onClick={()=>showConfirmtoDeleteTask(task.id)}
                         className="btn btn-danger"  >delete</button>
                        </td>
                </tr>
            )) : 
                <tr>
                    <td colSpan="6" className="text-center text-danger text-bolder fw-bold">not tasks created</td>
                </tr>
            }
        </tbody>

        
    </table>
    </>
  )
}

export default TableTasks
