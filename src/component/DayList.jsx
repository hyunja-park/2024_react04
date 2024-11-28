import { data, Link } from "react-router-dom";
import dummy from "../db/data.json"
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";


function DayList(props) {
    
    const days = useFetch('http://localhost:3010/days');

    return (
        <ul className="list_day">
           {days.map(k => {
            return <li kry={k.id}> 
                <Link to={`/day/${k.day}`}>Day {k.day} </Link>
            </li>
           })}
        </ul>
    );
}

export default DayList;