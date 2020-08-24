import React from 'react'
import { LaunchesQuery } from '../../generated/graphql'

interface Props {
    data: LaunchesQuery
}

const Launch: React.FC<Props> = ({ data }) => {

    const displayData = data.launches?.map((launch, i) => {
        return (
            <div key={i}>
                <h2>{launch?.mission_name}</h2>
                <h6>{launch?.launch_year}</h6>
                <h6>{launch?.launch_success === true ? 'Success' : 'Failed'}</h6>
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