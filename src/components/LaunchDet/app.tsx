import React from 'react'
import { useLaunhDetailQuery } from '../../generated/graphql'
import LaunchDet from './launchdet'

const LaunchDetFunction = () => {
    const { data, loading, error  } = useLaunhDetailQuery({variables : {id : '1'}})

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