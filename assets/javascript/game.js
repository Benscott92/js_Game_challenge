// // How should this game work?
// Clicking either "SHOOT" button represents a shot for that team.
// Shots should have a random chance of succeeding or failing. (Sounds like Internet research time! How do you determine a random chance in JavaScript?)
// The number of shots taken should increase for every click of the "SHOOT" button.
// The number of goals should only increase when the shot is successful.
// Clicking the "RESET" button should reset all the shot and goal counters and add 1 to the number of resets.
// Bonus
// Play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element and how to use it in JS. You will also need to find a sound file to use.
// Use what you know about HTML and CSS to make the page look better!
// Upon reset, display who won the game.

let teamOneShots = document.querySelector('#teamone-numshots')
let teamTwoShots = document.querySelector('#teamtwo-numshots')
const teamOneShoot = document.querySelector('#teamone-shoot-button')
const teamTwoShoot = document.querySelector('#teamtwo-shoot-button')
const teamOneGoals = document.querySelector('#teamone-numgoals')
const teamTwoGoals = document.querySelector('#teamtwo-numgoals')
const tableFlip = document.querySelector('#reset-button')
let resets = document.querySelector('#num-resets')
let shotSound = document.querySelector('.shot-sound')
let resetSound = document.querySelector("#reset-sound")

teamOneShoot.addEventListener('click', function(){
    shotSound.play();
    let teamOneAttempts = Number(teamOneShots.innerHTML) + 1;
    teamOneShots.innerHTML = teamOneAttempts;
    let goalChance = Math.random();
    if (goalChance < 0.5){
        goals = Number(teamOneGoals.innerHTML);
        goals += 1;
        teamOneGoals.innerHTML = goals;
    }
})

teamTwoShoot.addEventListener('click', function(){
    shotSound.play();
    let teamTwoAttempts = Number(teamTwoShots.innerHTML) + 1;
    teamTwoShots.innerHTML = teamTwoAttempts;
    let goalChance = Math.random();
    if (goalChance < 0.5){
        goals = Number(teamTwoGoals.innerHTML);
        goals += 1;
        teamTwoGoals.innerHTML = goals;
    }
})

// <button TABLEFLIPS
// NUMBER OF RESETS: RESETS

tableFlip.addEventListener('click', function(){
    resetSound.play();
    let totalResets = Number(resets.innerHTML) + 1;
    resets.innerHTML = totalResets;
    if (teamOneGoals.innerHTML > teamTwoGoals.innerHTML){
        alert('Team One Is Victorious!');}
    else if(teamTwoGoals.innerHTML > teamOneGoals.innerHTML){
        alert('Team Two Is Victorious!');
    }
    else{
        alert('There are no winners in a tie...')
    }
    teamOneShots.innerHTML = 0;
    teamTwoShots.innerHTML = 0;
    teamOneGoals.innerHTML = 0;
    teamTwoGoals.innerHTML = 0;
})