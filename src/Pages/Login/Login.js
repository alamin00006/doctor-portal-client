import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loding from '../Shared/Loding';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

if(gUser||user){
  navigate(from, { replace: true });
}
if( loading || gLoading){
  return <Loding></Loding>
}
let singInError;
if(error || gError){
  singInError = <p className='text-red-500'>{error?.message} || {gError?.message}</p>
}

const onSubmit = data =>{
console.log(data);
signInWithEmailAndPassword(data.email, data.password)
};
    return (
   <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-center text-3xl font-bold">Login</h2>

    <form onSubmit={handleSubmit(onSubmit)}>

    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Email</span>
      </label>
  <input 
 
  {...register("email", {

    required:{
        value: true,
        message:'Email is required'
    },
    pattern:{
        value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
        message:'provide a valid email'
    }
  })}
  type="email" placeholder="Enter Your Email" class="input input-bordered w-full max-w-xs" />
  <label class="label">
  {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
  {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

    
    
  </label>
</div>
    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Pssword</span>
      </label>
  <input 
 
  {...register("password", {

    required:{
        value: true,
        message:'password is required'
    },
    minLength:{
        value:6,
        message:'Password is more than 6 number'
    }
    
  })}
  type="password" placeholder="Enter Your Password" class="input input-bordered w-full max-w-xs" />
  <label class="label">
  {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

    
    
  </label>
</div>
      {singInError}
      <input className='btn text-center w-full max-w-xs' type="submit"  value='Login'/>
    </form>
    <p>New to Doctor Portal? <Link className='text-primary' to="/signup"><small>Create New Account</small></Link></p>
    <div class="divider">OR</div>
    <button onClick={() => signInWithGoogle()} class="btn btn-outline">Singn In with Google</button>
  </div>
</div>
   </div>
    );
};

export default Login;