import { useState, useEffect } from 'react'; //Se importa desde react
import axios from 'axios'; //Con axios vamos a realizar las peticiones

const useFetch = (endpoint) => {
    const [datos, setDatos] = useState([]);

    async function fetchData() {
        const response = await axios.get(endpoint);
        setDatos(response.data);
    }

    useEffect(() => {
        try {
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return datos;
};

export default useFetch;
