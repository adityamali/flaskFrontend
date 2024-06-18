// import {useEffect, useState} from "react";

// function Connection(connectFor){
//     let baseURL = 'http://localhost:5000/api/'
//     const [data, setData] = useState([]);
//     const url = baseURL + connectFor;
//     console.log(url);
//     useEffect(() => {
//         fetch( url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         })
//             .then(response => response.json()) // or .text() for text data.
//             .then(data => setData(data))
//             .catch((error) => {
//                 console.error('Error:', error);
//             });
//     }, [url]);
//     return data;
// }

// export default Connection;