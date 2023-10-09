import React, {useState} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
const BookingForm=(props)=>{
    const[date,setDate]=useState("");
    const[time,setTime]=useState("");
    const[guests,setGuests]=useState("");
    const[occasion,setOccasion]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.SubmitForm(e)
    }
    const handleChange=(e)=>{
        setDate(e.target.value);
    }
    const formik = useFormik({
        initalValues: {
          date: '',
          time: '',
          guests: '',
          occasion: ''
        },
        validationSchema: Yup.object({
          date: Yup.string()
            .required('Required'),
          time: Yup.string()
            .required('Required'),
          guests: Yup.string().required('Required').max(10,'Maximum 10 guests are allowed'),
          occasion: Yup.string().required('Required')
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="book-date">Choose Date</label>
                    <input type="date" id="date" name="date" value={date} onChange={handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.date && formik.errors.date ? (<div>{formik.errors.date}</div>) : null}
                </div>
                <div>
                    <label htmlFor="book-time">Choose Time</label>
                    <select name="time" id="time" value={time} onChange={e=>setTime(e.target.value)} onBlur={formik.handleBlur}>
                        <option value="">Select a Time</option>
                        {
                            props.availableTimes.availableTimes.map(availableTimes=>{
                                return <option key={availableTimes}>{availableTimes}</option>
                            })
                        }
                    </select>
                    {formik.touched.time && formik.errors.time ? (<div>{formik.errors.time}</div>) : null}
                </div>
                <div>
                    <label htmlFor="book-guests">Number of Guests</label>
                    <input name="guests" id="book-guests" type="number" min="1" max="10" value={guests} onChange={e=>setGuests(e.target.value)} onBlur={formik.handleBlur}/>
                    {formik.touched.guests && formik.errors.guests ? (<div>{formik.errors.guests}</div>) : null}
                </div>
                <div>
                    <label htmlFor="book-occasion">Occasion</label>
                    <select name="occasion" id="book-occasion" value={occasion} onChange={e=>setOccasion(e.target.value)} onBlur={formik.handleBlur}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    {formik.touched.occasion && formik.errors.occasion ? (<div>{formik.errors.occasion}</div>) : null}
                </div>
                <div className='btnReceive'>
                    <input aria-label="onClick" type="submit" value="Make your Reservation"/>
                </div>
            </form>
        </div>
    )
}
export default BookingForm;