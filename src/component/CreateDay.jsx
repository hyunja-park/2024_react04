import React from 'react';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateDay(props) {
    const days = useFetch("http://localhost:3010/days")
    const history = useNavigate();

    async function addDay(params) {
        try {
            const response = await axios.post(`http://localhost:3010/days`,{
                day : (Array.isArray(days) ? days.length : 0) + 1    
            });
            if(response.status === 201){ // 리소스 생성 성공(POST)
                alert("생성완료");
                history('/')
            }
        } catch (error) {
            console.error("Error 발생 : ", error)
        }


        // fetch(`http://localhost:3010/days`,{
        //     method : 'POST',
        //     headers : {
        //         "Content-Type" : "application/json"
        //     },
        //     body : JSON.stringify({
        //         day : day && day.length + 1
                
        //     })
        // })
        // .then(res =>{
        //     if(res.ok){
        //         alert("생성완료");
        //         history('/')
        //     }
        // })
    }
    return (
        <div>
           <h3>현재 일수 : {days && days.length}일</h3> 
           <button onClick={addDay}>Day 추가</button>
        </div>
    );
}

export default CreateDay;