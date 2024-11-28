import axios from 'axios';
import { useEffect, useState } from 'react';

function useFetch(url) {
    const [data, setData] = useState([]);

    // reponse.json()메서드를 호출하면 json 데이터를 javescript 객체로 변환한다.
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                console.error("Error : ", error);
            }
        };

        fetchData();
    },[url]);
    return data;
}
export default useFetch;