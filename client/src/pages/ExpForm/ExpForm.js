import React,{Fragment,useContext,useState,useEffect} from 'react'
import AuthContext from '../../components/context/auth/AuthContext' 
import Calendar from 'react-calendar';
import moment from 'moment';
import ProfileContext from '../../components/context/profile/ProfileContext';
import './ExpForm.css';
import {Animated} from "react-animated-css";

const ExpForm = (props) => {
    const [formData,setFormData] = useState({
        title:'',
        company:'',
        location:'',
        from:'',
        to:'',
        description:''
    })

  

    const authContext = useContext(AuthContext);
    const profileContext = useContext(ProfileContext)

    const {user,loadUser} = authContext
    const {addExp,getCurrentProfile}=profileContext

    useEffect(()=>{
        if(localStorage.token){
            loadUser()
        }
    })

    const {title,company,location,from,to,description} = formData

    const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const fromDate =  (e) =>{
       let formatedDate=  moment(e).format('MM-DD-YY')
        console.log(formatedDate)
        setFormData({...formData,from:e})
    }
    const toDate = e =>{
        setFormData({...formData,to:e})
    }
    const onSubmit= (e)=>{
        e.preventDefault()
        try {
            addExp(formData)
            props.history.push(`/dashboard`);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Fragment>
        <div className='experience-wrapper'>
        <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
            <form className='experience-form-container' onSubmit={e=>onSubmit(e)}>
            <h1>Experience</h1>
                <input type="text" name='title' id='title' placeholder="title" value={title} onChange={e => onChange(e)}/>
                <input type="text" name='company' value ={company} onChange={e => onChange(e)} id='company' placeholder="company" />
                <input type="text" name='location' value={location}id='location' placeholder="Location" onChange={e => onChange(e)} />
                <label htmlFor="">From</label>
                <Calendar onChange={e => fromDate(e)} value={from}/>
                <label htmlFor="">To</label>
                <Calendar onChange={e => toDate(e)} value={to}/>

                <input type="text" name='description' id='description' value={description} placeholder="Description"  onChange={e => onChange(e)}/>
                <button className='experience-btn'>submit</button>

            </form>
            </Animated>
            </div>
        </Fragment>
    )
}

export default ExpForm
