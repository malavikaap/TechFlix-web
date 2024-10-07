import React from 'react';
import './Member.css';

function Member() {
  return (
    <div className='container'>
      <div className='membership-container'>
        <h1>Membership Registration</h1>
        <form className='membership-form'>
          <div className='form-group'>
            <label htmlFor='firstname'>First Name:</label>
            <input type='text' id='firstname' name='firstname' required />
          </div>
          <div className='form-group'>
            <label htmlFor='lastname'>Last Name:</label>
            <input type='text' id='lastname' name='lastname' required />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' required />
          </div>

          <div className='form-group'>
            <label htmlFor='membership'>Choose your Membership level:</label>
            <div className='membership-options'>
              <input type='radio' id='regular' name='membership' value='Regular' required />
              <label htmlFor='regular'>Regular</label>
              <input type='radio' id='premium' name='membership' value='Premium' required />
              <label htmlFor='premium'>Premium</label>
              <input type='radio' id='standard' name='membership' value='Standard' required />
              <label htmlFor='standard'>Standard</label>
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='address'>Address:</label>
            <textarea id='address' name='message' rows='5' required></textarea>
          </div>
          <button className='submit-btn' type='submit'>Join</button>
        </form>
      </div>
    </div>
  );
}

export default Member;
