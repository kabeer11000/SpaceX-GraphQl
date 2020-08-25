import React from  'react'
import { useLaunchesQuery } from '../../generated/graphql'


import Launch from './launch'
import Loading from '../loading'

export default function  LaunchFunction(){
    const {data, loading, error } = useLaunchesQuery()
    if (loading){
        return <Loading />
    }
    if (error || !data){
        console.log(error);
        return <div>error</div>
    }

    return <Launch data={data} />
}
