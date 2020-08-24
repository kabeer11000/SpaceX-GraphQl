import React from 'react'
import { LaunhDetailQuery } from '../../generated/graphql'

interface Props {
    data: LaunhDetailQuery
}

const LaunchDet: React.FC<Props> = ({ data }) => {

    return (
        <div>
            <div>
                <div>
                    <h4>Flight : {data.launch?.flight_number}</h4>
                </div>
                <div>
                    <h2>Mission Name : {data.launch?.mission_name}</h2>
                </div>
                <div>
                    <h3>Rocket : {data.launch?.rocket?.rocket_name}</h3>
                </div>
                <div>
                    <h6>Date : {data.launch?.launch_date_local}</h6>
                </div>
                <div>
                    <h6>Launch Site : {data.launch?.launch_site?.site_name}</h6>
                </div>
                <div>
                    <p>{data.launch?.details}</p>
                </div>
                {!!data.launch?.links && !!data.launch.links.flickr_images && (
                    <div>
                        {data.launch.links.flickr_images.map(image => 
                         image ? <img src={image} /> : null
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
export default LaunchDet;