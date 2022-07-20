import { useRef } from 'react';
import { useState } from 'react';
import './styles.css';

function CharForm({onSubmit}) {
    const messageInput = useRef()

    function resize(e) {
        var el = e.target;
        setTimeout(function() {
          el.style.cssText = 'height:auto; padding:0';
          el.style.cssText = 'height:' + el.scrollHeight + 'px';
        }, 1);
    }
  
    return ( 
        <>
            <form className="form" onSubmit={(e) => {
                e.preventDefault()
                onSubmit(messageInput)
                }}>
                <textarea className='form__text-input' rows='1' onKeyDown={resize} ref={messageInput}></textarea>
                <button className='form__submit-btn' type='submit'>Send</button>
            </form>
        </>
     );
}

export default CharForm;