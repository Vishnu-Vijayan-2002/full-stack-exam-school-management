import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from '../service/AllAPI';
import Dashboard from './Dashboard';

function Home() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        address:"",
        mobile: "",
        email: "",
        gender: 'male',
        dob: "",
        course: 'Biology'
    });
  
    const handleCancel = ()=>{
        setFormData({
            name:"",address:"",mobile:"",email:"",gender:"",dob:"",course:""
        })
    }

    //register
    const handleRegister = async(e)=>{
        e.preventDefault()
        //empty
        if(formData.name && formData.address && formData.mobile && formData.email && formData.gender && formData.dob && formData.course){
            //api call
            try{
                const result = await registerAPI(formData)
            console.log(result);
            if(result.status==200){
                toast.success("Registered Successfully...")
                setFormData({
                    name:"",address:"",mobile:"",email:"",gender:"",dob:"",course:""
                })
                setTimeout(()=>{
                    navigate('/home')
                },2000)
            }else{
                toast.error(result.response.data)
            }
            }catch(err){
                console.log(err);
            }
        }else{
            toast.warning("Please fill the form completely")
        }
    }
  return (
   <>
   <Dashboard/>

        <div style={{height:'100vh'}} >
      <h2  className='text-center mt-5'>Higher Secondary Admission Registration</h2>
                <div style={{marginLeft:'45%',marginTop:'50px'}}>
                    <form >
                        <label  htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={(e)=>{setFormData({...formData,name:e.target.value})}} required/><br/><br/>
        
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" name="address" value={formData.address} onChange={(e)=>{setFormData({...formData,address:e.target.value})}}  required/><br/><br/>
        
                        <label htmlFor="mobile">Mobile:</label>
                        <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={(e)=>{setFormData({...formData,mobile:e.target.value})}} required/><br/><br/>
        
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={(e)=>{setFormData({...formData,email:e.target.value})}} required/><br/><br/>
        
                        <label htmlFor="gender">Gender:</label>
                        <select id="gender" name="gender" value={formData.gender} onChange={(e)=>{setFormData({...formData,gender:e.target.value})}} >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select><br/><br/>
        
                        <label htmlFor="dob">Date of Birth:</label>
                        <input type="date" id="dob" name="dob" value={formData.dob} onChange={(e)=>{setFormData({...formData,dob:e.target.value})}} required/><br/><br/>
        
                        <label htmlFor="course">Course:</label>
                        <select id="course" name="course" value={formData.course} onChange={(e)=>{setFormData({...formData,course:e.target.value})}} >
                            <option value="Biology">Biology</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Commerce">Commerce</option>
                            <option value="Humanities">Humanities</option>
                        </select><br/><br/>
        
                        <button onClick={handleRegister} style={{marginRight:'30px'}} className='btn btn-primary' type="submit">Register</button>
                        <button onClick={handleCancel} className='btn btn-info' type="button">Cancel</button>
                    </form>
                </div>
        </div>
        <ToastContainer position='top-center' theme='colored' autoClose={3000} />
   </>
  )
}

export default Home
