import React,{Fragment,useContext,useState} from 'react'
import AuthContext from '../../components/context/auth/AuthContext' 
import Calendar from 'react-calendar';
import moment from 'moment';
import ProfileContext from '../../components/context/profile/ProfileContext';
import './EduFrom.css';
import {Animated} from "react-animated-css";

const EduForm = (props) => {
    const [formData,setFormData] = useState({
        school:'',
        degree:'',
        fieldofStudy:'',
        from:'',
        to:'',
        description:''
    })
    const authContext = useContext(AuthContext);
    const profileContext = useContext(ProfileContext)

    const {setAlert,isAuthenticated, errorState,removeAlert} = authContext
    const {addEdu}=profileContext

    const {school,degree,fieldofStudy,from,to,description} = formData

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
            addEdu({
                school,
                fieldofStudy,
                degree,
                from: moment(from).format('MM/DD/YYYY'),
                to: moment(to).format('MM/DD/YYYY'),
                description
            })
            props.history.push('/dashboard');
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Fragment>
        <div className='education-wrapper'>
        <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
            <form  className='education-form-container' onSubmit={e=>onSubmit(e)}>
            <h1>Education</h1>
                <input type="text" name='school' id='school' placeholder="School" value={school} onChange={e => onChange(e)}/>
                <input type="text" name='degree' value ={degree} onChange={e => onChange(e)} id='degree' placeholder="Degree" />
                <input type="text" name='fieldofStudy' value={fieldofStudy}id='fieldofStudy' placeholder="Major" onChange={e => onChange(e)} />
                <label htmlFor="">From</label>
                <Calendar onChange={e => fromDate(e)} value={from}/>
                <label htmlFor="">To</label>
                <Calendar onChange={e => toDate(e)} value={to}/>

                <input type="text" name='description' id='description' value={description} placeholder="Description"  onChange={e => onChange(e)}/>
                <button className='education-btn'>submit</button>

            </form>
            </Animated>
            </div>
        </Fragment>
    )
}

export default EduForm
