import React from 'react'

export default function Modal(props) {
    if(!props.show){
        return null
    }
  return (
    <div className= {props.show?"modal fade show":"modal fade"} onClick={props.onClose}>
    <div className="modal-dialog" role="document" >
      <div className="modal-content"  onClick={ e => e.stopPropagation() }>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" className="close" aria-label="Close" onClick={props.onClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          Are you sure you want to delete this project?
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary"  onClick={props.onClose}>Close</button>
          <button type="button" className="btn btn-danger" disabled={props.disabled} id={props.id} onClick={props.onDelete}><span className="btn-text" id={props.id} onClick={props.onDelete}>Delete</span></button>
        </div>
      </div>
    </div>
  </div>
  )
}
