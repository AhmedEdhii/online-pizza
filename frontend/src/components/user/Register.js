import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { register, clearErrors } from '../../actions/userActions'

const Register = ({ history }) => {

    const [user, setUser] = useState({
        name: '',
        phonenumber: '',
        email: '',
        password: '',
    })

    const { name, phonenumber, email, password } = user;

    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg')
    const [path, setpath] = useState('')
    // const { name, email, password } = user;
    // const [name, setName] = useState('');
    // const [phonenumber, setPhoneNumber] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();
    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    //const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/')
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch, alert, isAuthenticated, error, history])

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('name', name);
        formData.set('phonenumber', phonenumber);
        formData.set('email', email);
        formData.set('password', password);
        formData.set('avatar', avatar);
        dispatch(register(formData))
    }

    const onChange = e => {
        if (e.target.name === 'avatar') {

            const reader = new FileReader();
            console.log("444" + e.target.value)
            reader.onload = () => {
                console.log(reader.readyState)
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }

            reader.readAsDataURL(e.target.files[0])

        } else {
            setUser({ ...user, [e.target.name]: e.target.value })
        }
    }

    return (
        <Fragment>

            {/* <MetaData title={'Register User'} /> */}

            <div className="Signup">
                <img src="/images/logo-1.jpg" className="logo" alt="Business view - Reports" />
                <form className="form" onSubmit={submitHandler} encType='multipart/form-data'>
                    {/* <h1 className="mb-3">Register</h1> */}
                    <div className="group">
                        <label htmlFor="name_field">Name</label>
                        <input
                            type="name"
                            id="name_field"
                            name='name'
                            value={name}
                            onChange={onChange}
                        />
                    </div>

                    <div className="group">
                        <label htmlFor="phonenumber_field">Phone Number</label>
                        <input
                            type="phonenumber"
                            id="phonenumber_field"
                            name='phonenumber'
                            value={phonenumber}
                            onChange={onChange}
                        />
                    </div>

                    <div className="group">
                        <label htmlFor="email_field">Email</label>
                        <input
                            type="email"
                            id="email_field"
                            name='email'
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="group">
                        <label htmlFor="password_field">Password</label>
                        <input
                            type="password"
                            id="password_field"
                            name='password'
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    {/* <div className="group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input 
                        type="confirmPassword" 
                        name="confirmPassword" 
                        />
                    </div> */}

                    <div className='group'>
                        <label htmlFor='avatar_upload'>Avatar</label>
                        <div className='d-flex align-items-center'>
                            <div>
                                <figure className='avatar mr-3 item-rtl'>
                                    <img
                                        src={avatarPreview}
                                        className='rounded-circle'
                                        alt='Avatar Preview'
                                    />
                                </figure>
                            </div>
                            <div className='custom-file' style={{marginRight:"75px"}}>
                                <input
                                    type='file'
                                    name='avatar'
                                    className='custom-file-input'
                                    id='customFile'
                                    accept="images/*"
                                    onChange={onChange}
                                />
                                <label className='custom-file-label' htmlFor='customFile'>
                                    Choose Avatars
                                </label>
                            </div>
                        </div>
                    </div>

                    <button
                        id="button"
                        type="submit"
                        className="primary"
                        disabled={loading ? true : false}
                    >
                        REGISTER
                    </button>
                </form>
            </div>

        </Fragment>
    )
}

export default Register