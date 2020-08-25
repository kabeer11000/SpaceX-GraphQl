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
                    <span>{launch?.flight_number}. Mission : </span><span className={launch?.launch_success ? 'true' : 'false'}>{launch?.mission_name}</span>
                </div>
                <div>
                    <h6>{launch?.launch_date_local?.toString()}</h6>
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
                <h1>space x</h1>
            </div>
            <div className='display-data-launch'>
                {displayData}
            </div>
        </div >
    )
}
export default Launch;