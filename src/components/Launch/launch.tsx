import React from 'react'
import { LaunchesQuery } from '../../generated/graphql'
import { Link } from 'react-router-dom'

interface Props {
    data: LaunchesQuery
}

const Launch: React.FC<Props> = ({ data }) => {

    const displayData = data.launches?.map((launch) => {
        return (
            <div key={launch?.flight_number}>
                <h2>{launch?.mission_name}</h2>
                <h6>{launch?.launch_year}</h6>
                <h6>{launch?.launch_success === true ? 'Success' : 'Failed'}</h6>
                {/* <div>
                    <Link to={`${launch?.flight_number}`} />
                </div> */}
            </div>
        )
    })


    return (
        <div>
            <div>
                <h1>SpaceX Launhes</h1>
            </div>
            <div>
                {displayData}
            </div>

        </div>
    )
}
export default Launch;