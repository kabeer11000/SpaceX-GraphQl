import React from 'react'
import { useLaunhDetailQuery } from '../../generated/graphql'
import LaunchDet from './launchdet'

// router 
import { useParams } from 'react-router-dom'

const LaunchDetFunction = () => {

    const { id } = useParams()
    const { data, loading, error  } = useLaunhDetailQuery({variables : { id : id }})

    if (loading){
        return <div>loading ...</div>
    }
    if(error || !data){
        console.log(error);
        return <div>error</div>
    }
    return <LaunchDet data={data} />
}


export default LaunchDetFunction