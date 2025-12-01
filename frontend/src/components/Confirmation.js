
function Confirmation({ show, onClose, onConfirm, message }) {
    if (!show) return null;

    return (
 <div className="modal fade show" style={{ display: "block" }}>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content shadow-lg border-0 rounded-4">
      
   <div className="modal-header bg-danger text-white rounded-top-4">
                    <h5 className="modal-title">Confirm Delete</h5>
    </div>


          <div className="modal-body fs-5">
                        <p>{message || "Are you sure you want to delete this item?"}</p>
            </div>

                <div className="modal-footer gap-2" >
                    <button className="btn btn-secondary px-4" onClick={onClose}>
                        Cancel
                    </button>
                    <button className="btn btn-danger px-4" onClick={onConfirm}>
                        Delete
                    </button>
                </div>
    </div>
  </div>
</div>

    );
};

              
          


export default Confirmation
