function timeToWalk(steps, stepLength, speed) {
    let distanceInMeters=steps*stepLength;
    let speedInMetersPerSecond = speed/3.6;
    let rest = Math.floor(distanceInMeters /500)*60;
    let time = distanceInMeters /speedInMetersPerSecond+rest;
    let hours = Math.floor(time /3600);
    let mins = Math.floor(time/60);
    let secs = Math.round(time%60);

    console.log(`${hours <10?'0':''}${hours}:${mins <10?'0':''}${mins}:${secs <10?'0':''}${secs}`);
}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);