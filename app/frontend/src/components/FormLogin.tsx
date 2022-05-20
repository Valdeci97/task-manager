import React from 'react';
import '../css/formLogin.css';

export default function FormLogin() {
  return (
    <form className='form-container'>
      <label htmlFor="email" className='email-label'>
        <input type="text" id="email" placeholder='email' />
      </label>
      <label htmlFor="senha" className='password-label'>
        <input type="password" id="senha" placeholder='senha' />
      </label>
      <button>Entrar</button>
    </form>
  );
};
