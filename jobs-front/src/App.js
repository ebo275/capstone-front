import './App.css';
import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useSelector } from 'react-redux';
// import Add from './components/Add.js'
// import Edit from './components/Edit.js'

const App = () => {


// READING
const [job, setJob] = useState([])
const getJob = () => {
  axios.get('https://capstone-be.herokuapp.com/api/jobs').then((res) => {
    console.log(res.data)
    setJob(res.data)
  })
}

useEffect(() => {
  getJob()
}, [])

// REDUX
const { count } = useSelector((state) => state.counter.count);

  return (
    <>
      <h1>Ella's Job Search Tracker</h1>
      <div className = 'job'>
        {job.map((job)=> {
          return (
            <div className='jobs' key={'resolution.id'}>
              <h4>Title: {job.title}</h4>
              <h4>Company: {job.company}</h4>
              <h4>Salary: {job.salary}</h4>
              <h4>Date Applied: {job.dateApplied}</h4>
              <h4>Response: {job.response}</h4>


            </div>
        )
      })}
      </div>
    
    </>  
  );
  
}
export default App;
