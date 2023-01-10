import React from 'react';
// import "../register/register.css";
// import "../admin/dashboard.css";
export  const TextInput = (props) => {
    return (
        <div>
          <label htmlFor="">{props.placeholder}</label>
            <input
              type="text"
              value={props.value}
              name={props.name}
              placeholder={props.placeholder}
              onChange={props.onChange}
              required
            />   
        </div>
    );
}

