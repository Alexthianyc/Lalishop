import { useState, useEffect } from 'react'; //Se importa desde react
import axios from 'axios'; //Con axios vamos a realizar las peticiones

const useFetch = (endpoint) => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(endpoint);
            const data = response.data;
            setDatos(data);
        }

        try {
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, [endpoint]);

    return datos;
};

export default useFetch;
