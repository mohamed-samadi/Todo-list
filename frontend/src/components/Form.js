
function Form({handleSubmit , handleformChange , validFields , formData}) {
  return (
   <form className="border border-primary rounded p-3 mb-4"
   onSubmit={handleSubmit}>
        <legend>add new task</legend>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">title</label>
            <input type="text" className="form-control" id="title" name="title" placeholder="enter task title" 
            onChange={handleformChange} 
            value={formData.title}/>
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">description</label>
            <textarea className="form-control" id="description" name="description" rows="3" placeholder="enter task description"
            onChange={handleformChange} value={formData.description}></textarea>
        </div>
        <button type="submit" className="btn btn-primary" disabled={validFields}
        >add task</button>
   </form>
  )
}

export default Form ;
