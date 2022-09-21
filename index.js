// Code your solution in this file!
function distanceFromHqInBlocks(currentLocation) {
    let hqLocation = 42;
    return(Math.abs(hqLocation - currentLocation));
}

function distanceFromHqInFeet(currentLocation) {
    let hqLocation = 42
    distanceFromHqInBlocks(currentLocation);
    return(Math.abs((hqLocation - currentLocation) * 264))
}

function distanceTravelledInFeet(start, destination) {
    return(Math.abs((destination - start) * 264))
}

function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start, destination)
    if (distanceTravelledInFeet(start, destination) < 400) {
        return(Math.abs(distanceTravelledInFeet(start, destination) * 0));
    } else if (distanceTravelledInFeet(start, destination) >= 400, distanceTravelledInFeet(start, destination) < 2000) {
        return (Math.abs((distanceTravelledInFeet(start, destination) - 400) * 0.02));          
    } else if (distanceTravelledInFeet(start, destination) > 2000, distanceTravelledInFeet(start, destination) < 2500) {
        return(25);
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return("cannot travel that far")
    }
}