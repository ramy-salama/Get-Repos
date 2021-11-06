import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Request = () => {
  const [repos, setRepos] = useState([]);
  const [inputField, setInputField] = useState({
    username: "",
  });

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value })
  };
  
  const submitButton = (e) => {
    e.preventDefault();
    axios
    .get(`https://api.github.com/users/${inputField.username}/repos`)
    .then((res) => {
        setRepos(res.data)

    })
  }


  return (
    <div className='Request'>
      <div className='search'> 
        <form onSubmit={submitButton}>
          <input
            type="text"
            name="username"
            placeholder="GitHub UserName"
            value={inputField.username}
            onChange={inputsHandler}
            required/>
          <button 
            type="submit" 
            onClick={submitButton}>
            Search
          </button>
        </form>
      </div>
      <table className="table1">
        <tr>  
          <td>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
            REPOS NAME</td>
          <td>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-info" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
            <path d="M11 14h1v4h1" />
            <path d="M12 11h.01" />
            </svg>
            REPOS PAGE</td>
        </tr>
      </table>
      {repos.length > 0 ?(
        repos.map((r) => 
        <table className="table2">
          <tr>
            <td><a href={r.html_url}>{r.name}</a></td>
            <td><a href={`https://ramy-salama.github.io/${r.name}/`}>{r.name}</a></td>
          </tr>
        </table>
  )
    ):(
      <></>
    )
    }

  </div>
  );
};

export default Request;