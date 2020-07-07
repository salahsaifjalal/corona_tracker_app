import axios from axios;


const Corona_Api_url = 'https://covid19.mathdro.id/api';

export const fetchdata = async () => {
    try {
        
        const response = await axios.get(Corona_Api_url);
        return response;
        console.log(response);


        
    } catch (error) {
        
    }


}