
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/aggregate');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Top Customers</h1>
            
            <ul>
                {data.map(customer => (
                    <li key={customer._id}>
                        Customer ID: {customer._id}, Total Spent: {customer.totalSpent}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
