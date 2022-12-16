import React, { useEffect,useState } from 'react';
import { getAllActivities } from '../services/activitiesService';

function Checklist() {
    const [activities,setActivities] = useState([]);
    const [loading,setLoading] = useState(true);
    
    const getActivities = () => {
        const response = getAllActivities()
                        .then(response => {
                            setActivities(response.data);
                            setLoading(false);
                            console.log(response.data);
                        })
                        .catch(err => {
                            console.error(err)
                        })     
        

    }
    useEffect(() => {
        getActivities()
    },[])
  
  
    return (
    <div>
        {loading ? (
            <div>Loading Data...</div>
        ) : (
            <div class="content">
	<div class="content-wrapper">
		<h2 class="heading">Le choix des Activités</h2>
		<p>Veuillez choisir la liste des activités à entreprendre le jour J</p>
	</div>
    <div className='activities-list'>
    {activities.map(activity => (
        <div class="item">
            <label class="toggle" for="uniqueID">
                <input type="checkbox" class="toggle__input" id="uniqueID" />
                <span class="toggle-track">
                    <span class="toggle-indicator">
                        <span class="checkMark">
                            <svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                                <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                            </svg>
                        </span>
                    </span>
                </span>
                {activity.name}
            </label>
	    </div>
    ))}
    </div>
	
</div>
           
        )}
        <img className="logo" src='logo.png'/>
    </div>
  )
}

export default Checklist