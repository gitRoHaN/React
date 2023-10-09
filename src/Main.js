import React,{useReducer} from 'react'
import BookingForm from './BookingForm'
import { useNavigate } from 'react-router-dom';
export const Main = () => {
    const seedRandom= function(seed){
        var m=2**35-31;
        var a=136716;
        var s=seed%m;
        return function(){
            return(s=s*a%m)/m
        }
    }
    const fetchAPI=function(date){
        let result=[];
        let random=seedRandom(date.getDate());
        for(let i=15;i<=25;i++){
            if(random()<0.5){
                result.push(i+':00')
            }
            if(random()>0.5){
                result.push(i+':30')
            }
            return result;
        }
    }
    const submitAPI=function(formData){
        return true;
    }
    const initialState={availableTimes:fetchAPI(new Date())};
    const [state,dispatch]=useReducer(updateTime, initialState);
    function updateTime(state,date){
        return{availableTimes:fetchAPI(new Date())}
    }
    const navigate =useNavigate();
    function SubmitForm(formData){
        if(submitAPI(formData)){
            navigate("/ConfirmedBooking");
        }
    }
  return (
    <div>
        <BookingForm availableTimes={state} dispatatch={dispatch} SubmitForm={SubmitForm} />
    </div>
  )
}
export default Main;
