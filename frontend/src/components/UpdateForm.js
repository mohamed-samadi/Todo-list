
function UpdateForm({hideForm , updateTask , handleUpdate , handleSubmitofupdate}) {

    return (
 <div className="modal fade show" style={{ display: "block" }}>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content shadow-lg border-0 rounded-4">
      
   <div className="modal-header bg-primary text-white rounded-top-4">
                    <h5 className="modal-title">Confirm Update</h5>
    </div>


          <div className="modal-body fs-5">
           <form onSubmit={handleSubmitofupdate} >
            <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input type="text" className="form-control" id="id" name="id" placeholder="task id" disabled 
                value={updateTask.id} onChange={handleUpdate}/>
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">title</label>
                <input type="text" className="form-control" id="title" name="title" placeholder="enter task title" 
                value={updateTask.title} onChange={handleUpdate}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">description</label>
                <textarea className="form-control" id="description" name="description" rows="3" placeholder="enter task description"
                value={updateTask.description} onChange={handleUpdate}
                 ></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="status" className="form-label">status</label>
                <select className="form-select" id="status" name="status" value={updateTask.is_completed} onChange={handleUpdate} > 
                    <option value="0">uncompleted</option>
                    <option value="1">completed</option>
                </select>
            </div>

           </form>

            </div>

                <div className="modal-footer gap-2" >
                    <button className="btn btn-secondary px-4" onClick={hideForm} >
                        Cancel
                    </button>
                    <button className="btn btn-primary px-4" type="submit" onClick={handleSubmitofupdate} >
                        Update
                    </button>
                </div>
    </div>
  </div>
</div>

    );
};

              


export default UpdateForm
