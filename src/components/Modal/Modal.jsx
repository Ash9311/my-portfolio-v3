import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = (props) => {
    return ReactDOM.createPortal(
        // <div className='modal-overlay'>
        //     <div className="upper-section">
        //         <h1>Huge Announcement</h1>
        //         <p className="close">&times;</p>
        //     </div>
        //     <div className="middle-section">
        //         <h3>React Mega Tutorial is live</h3>
        //         <p>do you wish to learn React?</p>
        //         <p>
        //             Contact me if you want to know
        //         </p>
               
                
        //     </div>
        //     <div className="lower-section">
        //     <a className="modal-btn btn-red">Close</a>
        //     </div>
        // </div>,
        document.getElementById('modal')
    );
    
};
export default Modal;