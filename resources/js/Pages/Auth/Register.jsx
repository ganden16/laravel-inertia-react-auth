import { Link, useForm } from '@inertiajs/inertia-react'
import React from 'react'
import Guest from '../../Layouts/Guest'

export default function Register({errors}) {
	const {data, setData, post} = useForm({
		name: '', 
		username: '', 
		location: '', 
		email: '', 
		password: '', 
		password_confirmation: '', 
	})
	const changeHandler = (e) => {
		setData({
			...data,
			[e.target.id]: e.target.value
		})
	}
	
	const submitHandler = (e) => {
		e.preventDefault()
		post('/register', data)
	}

  return (
      <>
         <div className="card">
          <div className="card-header">Register</div>
          <div className="card-body">
				<form onSubmit={submitHandler}>
					<div className="mb-3">
						<label htmlFor="name"className='form-label'>Name</label>
						<input value={data.name} onChange={changeHandler} type="text" name='name' id='name' className="form-control" />
						{errors.name && (<div className='text-danger mt-1'>{errors.name}</div>)}
					</div>
					<div className="mb-3">
						<label htmlFor="username"className='form-label'>Username</label>
						<input value={data.username} onChange={changeHandler} type="text" name='username' id='username' className="form-control" />
						{errors.username && (<div className='text-danger mt-1'>{errors.username}</div>)}
					</div>
					<div className="mb-3">
						<label htmlFor="location"className='form-label'>location</label>
						<input value={data.location} onChange={changeHandler} type="text" name='location' id='location' className="form-control" />
						{errors.location && (<div className='text-danger mt-1'>{errors.location}</div>)}
					</div>
					<div className="mb-3">
						<label htmlFor="email"className='form-label'>Email</label>
						<input value={data.email} onChange={changeHandler} type="email" name='email' id='email' className="form-control" />
						{errors.email && (<div className='text-danger mt-1'>{errors.email}</div>)}
					</div>
					<div className="mb-3">
						<label htmlFor="password"className='form-label'>Password</label>
						<input value={data.password} onChange={changeHandler} type="password" name='password' id='password' className="form-control" />
						{errors.password && (<div className='text-danger mt-1'>{errors.password}</div>)}
					</div>
					<div className="mb-3">
						<label htmlFor="password_confirmation"className='form-label'>Password Confirmation</label>
						<input value={data.password_confirmation} onChange={changeHandler} type="password" name='password_confirmation' id='password_confirmation' className="form-control" />
					</div>
					<button type="submit" className='btn btn-primary'>Register</button>
				</form>
          </div>
			 <div className="card-footer">
            <span className='text-muted'>Have account? </span> {' '}
				<Link className='link-dark text-decoration-none fw-bold' href={route('login')}>Register</Link>
          </div>
         </div>
      </>
  )
}

Register.layout = (page) => <Guest children={page} title='Register'/>
