import React, { useEffect, useState } from 'react'
import { getAllDeatilsAPI } from '../service/AllAPI'
import { useNavigate } from 'react-router-dom';

function Alldetails() {
  const navigate = useNavigate()
  const [displayData,setDisplayData] = useState([])

  useEffect(()=>{
      getstudents()
  },[])
  

  const getstudents = async()=>{
      const result = await getAllDeatilsAPI()
      if(result.status ==200){
          setDisplayData(result.data)
      }
  }

  const handleHome = ()=>{
      navigate('/')
  }
  console.log(displayData);
  return (
    <div>
       <div className="container mt-5">
        <h2 className='text-center mt-5'>Registration Details</h2>
        <table className='table border mt-5'>
            <thead className='border'>
                <th className='border'>#</th>
                <th className='border'>Name</th>
                <th className='border'>Address</th>
                <th className='border'>E-Mail</th>
                <th className='border'>Gender</th>
                <th className='border'>Mobile</th>
                <th className='border'>Date Of Birth</th>
                <th className='border'>Course</th>
            </thead>
            <tbody className='border'>
                {   displayData?.length > 0 && displayData?.map((student,index)=>(
                    <tr key={student}>
                    <td className='border'>{index+1}</td>
                    <td className='border'>{student.name}</td>
                    <td className='border'>{student.address}</td>
                    <td className='border'>{student.email}</td>
                    <td className='border'>{student.gender}</td>
                    <td className='border'>{student.mobile}</td>
                    <td className='border'>{student.dob}</td>
                    <td className='border'>{student.course}</td>
                </tr>
                ))
                    
                }
            </tbody>
        </table>
        <div className='d-flex justify-content-center'>
            <button onClick={handleHome} className='btn btn-dark'>HOME</button>
        </div>
       
    </div>
    </div>
  )
}

export default Alldetails
