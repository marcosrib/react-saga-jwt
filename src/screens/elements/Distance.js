import React from 'react'

const Distance = ({ distance, metric }) => {
    let distanceStr = '';
    if (metric === 'metric') {
        distanceStr = distance + 'km'
    } else {
        const distaneMi = distance * 0.621371
        distanceStr = distaneMi.toFixed(2) + 'mi'
    }
    return <span>{distanceStr}</span>
}

export default Distance;