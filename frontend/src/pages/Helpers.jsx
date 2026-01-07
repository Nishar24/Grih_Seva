import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HelperCard from '../components/HelperCard';


export default function Helpers(){
const [helpers, setHelpers] = useState([]);
useEffect(() => {
axios.get((process.env.REACT_APP_API_URL || 'http://localhost:5000') + '/api/helpers')
.then(r => setHelpers(r.data)).catch(() => {

// sample data fallback
setHelpers([

    {
        _id:1,
        name:'Aarti Sharma',
        category:'Cook',
        location: 'New Delhi',
        salaryExpectation: 7000,
        experience:5
    },

    {
        _id:2,
        name:'Kavita',
        category:'Maid',
        location: 'Gurgaon',
        salaryExpectation: 8500,
        experience:3
    },

    { 
        _id: 3, 
        name: 'Priya Singh', 
        category: 'Cook', 
        experience: 4,
        location: 'Noida',
        salaryExpectation: 7500
    }
])
})
},[])


return (
<div className="min-h-[80vh] p-6">
<h2 className="text-2xl font-semibold mb-4">Helpers near you</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
{helpers.map(h=> <HelperCard key={h._id} helper={h} />)}
</div>
</div>
);
}