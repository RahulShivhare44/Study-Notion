import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function SignupForm({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ));
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Passwords do not match");
            return ;
        }
        
        setIsLoggedIn(true)
        toast.success("Account Created");

        const accountData = {
            ...formData
        };
        console.log("Printing account data");
        console.log(accountData);

        const finalData = {
            ...accountData,
            accountType
        }
        console.log("Printing final data");
        console.log(finalData);


        navigate('/dashboard');
    }

    return (
        <div>

            {/* student-Instructor tab */}
            <div className='flex bg-richblack-800 p-1 gap-z-1 my-6 rounded-full max-w-max'>
                <button onClick={() => setAccountType("student")} 
                    className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                >
                    Student
                </button>
                <button  onClick={() => setAccountType("instructor")}
                    className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                >
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                {/* first name and last name */}
                <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='firstName'
                            placeholder='Enter First Name'
                            onChange={changeHandler}
                            value={formData.firstName}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='lastName'
                            placeholder='Enter Last Name'
                            onChange={changeHandler}
                            value={formData.lastName}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                </div>

                {/*email address*/}
                <div className='mt-[10px]'>
                    <label className='w-full  mt-[20px]'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type='email'
                        name='email'
                        placeholder='Enter Email Address'
                        onChange={changeHandler}
                        value={formData.email}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                    </label>
                </div>

                {/* Create Password and Confirm Password */}
                <div  className='flex gap-x-4 mt-[20px]'>

                    <label className='relative w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showPassword ? ('text') : ('password')}
                            name='password'
                            placeholder='Enter Password'
                            onChange={changeHandler}
                            value={formData.password}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />

                        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)} >
                            {showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>

                    <label className='relative w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showConfirmPassword ? ('text') : ('password')}
                            name='confirmPassword'
                            placeholder='Confirm Password'
                            onChange={changeHandler}
                            value={formData.confirmPassword}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />

                        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setConfirmShowPassword((prev) => !prev)} >
                            {showConfirmPassword ? (<AiOutlineEye  fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>

                </div>

                <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                    Create Account
                </button>

            </form>



        </div>
    )
}
