import React from 'react'
// types 
import { LaunchesQuery } from '../../generated/graphql'
// route
import { Link } from 'react-router-dom'
// css 
import './styles.css'


// specfic types 
interface Props {
    data: LaunchesQuery
}

const Launch: React.FC<Props> = ({ data }) => {

    // maping data 
    const displayData = data.launches?.map((launch, i) => {
        return (
            <div key={launch?.flight_number} className='launch-box'>
                <div className='launch-mission'>
                    <h2>{`${launch?.flight_number}. `}Mission: {launch?.mission_name}</h2>
                </div>
                <div className='launch-site'>
                    <h5>LaunchSite: {launch?.launch_site?.site_name}</h5>
                </div>
                <div>
                    <h6>{launch?.launch_date_local?.toString()}</h6>
                </div>
                <div>
                    <span>status: <span className={launch?.launch_success ? 'true' : 'false'}>{launch?.launch_success ? 'sucessful' : 'failed'}</span></span>
                </div>
                <div>
                    <button>
                        <Link to={`launch/${launch?.flight_number}`}>Details</Link>
                    </button>
                </div>
            </div>
        )
    })


    return (
        <div className='display-div-launch'>
            <div className='heading-space'>
                <h1>Launches</h1>
            </div>
            <div className='display-data-launch'>
                {displayData}
            </div>
        </div >
    )
}
export default Launch;