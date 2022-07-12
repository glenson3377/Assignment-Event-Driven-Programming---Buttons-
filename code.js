//button enabler disabler
function begin(){ // executes when the start button is pushed
        document.getElementById('go').disabled = true; // disable the start button
        document.getElementById('stop').disabled = false; // enable the stop button
        console.log('start button disabled');
        document.getElementById('rocket').style.display = "inline-block";
        console.log('rocket being displayed');
}

function stop(){ //executed when the stop button is pushed
        console.log('stop button disabled')
        document.getElementById('go').disabled = false; // enable the start button
        document.getElementById('stop').disabled = true; // disable the stop button
        document.getElementById('rocket').style.display = "none";
}