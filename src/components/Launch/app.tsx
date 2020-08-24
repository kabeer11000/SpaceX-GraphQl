import React from  'react'
import { useLaunchesQuery } from '../../generated/graphql'
import Launch from './launch'

export default function  LaunchFunction(){
    const {data, loading, error } = useLaunchesQuery()
    if (loading){
        return <div>loading</div>
    }
    if (error || !data){
        console.log(error);
        return <div>error</div>
    }

    return <Launch data={data} />
}
