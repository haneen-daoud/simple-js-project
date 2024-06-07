let resetbtn = document.getElementById('reset');
let msg = document.getElementById('title')
let turn = 'X';
let arr = []
let flag = false
let j = 0
let audio = document.getElementById('audio');
let audio1 = document.getElementById('audio1')
let count = loadCountFromLocalStorage();
let c = loadCFromLocalStorage();
let initial = 0.05
function saveCToLocalStorage(c) {
    localStorage.setItem('c', c);
}
function loadCFromLocalStorage() {
    return localStorage.getItem('c') ? parseInt(localStorage.getItem('c')) : 0;
}
window.onload = function () {
    if (c % 2 != 0) {
        initial = 0
        audio1.volume = initial;
        document.getElementById('voice-img').style.background = 'rgb(255, 208, 0)'
    }
    else {
        initial = 0.05
        audio1.volume = initial;
        document.getElementById('voice-img').style.background = 'none'
    }
}
// Function to change the volume
function changeVolume() {
    c++;
    if (c % 2 != 0) {
        initial = 0
        audio1.volume = initial;

        document.getElementById('voice-img').style.background = 'rgb(255, 208, 0)'


    }
    else {
        initial = 0.05
        audio1.volume = initial;

        document.getElementById('voice-img').style.background = 'none'

    }
    saveCToLocalStorage(c)
}

function saveCountToLocalStorage(count) {
    localStorage.setItem('count', count);
}
function loadCountFromLocalStorage() {
    return localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0;
}

function print(a, b, c) {
    let win = document.getElementById(`item${a}`)
    msg.style.color = 'yellow'
    msg.innerHTML = `player ${win.innerHTML} is win`;
    document.getElementById(`item${a}`).style.color = 'yellow';
    document.getElementById(`item${b}`).style.color = 'yellow';
    document.getElementById(`item${c}`).style.color = 'yellow';

    setInterval(function () { msg.innerHTML += '.' }, 1000);
    setTimeout(function () { reset() }, 4000);
    for (let i = 1; i < 10; i++) {
        document.getElementById("item" + i).style.pointerEvents = 'none';

    }
    document.getElementById('moving-element').style.display = 'unset'
    document.getElementById('moving-element').classList.add('animate')
    document.getElementById('birth').style.visibility = 'visible'
    audio.play();
    saveCountToLocalStorage(0);

}
function winner() {
    for (let i = 1; i < 10; i++) {
        arr[i] = document.getElementById(`item${i}`).innerHTML
    }
    j++
    if (arr[1] == arr[2] && arr[2] == arr[3] && arr[1] != '') {
        flag = true;
        print(1, 2, 3)

    }
    else if (arr[4] == arr[5] && arr[4] == arr[6] && arr[4] != '') {
        flag = true;
        print(4, 5, 6)

    }
    else if (arr[7] == arr[8] && arr[7] == arr[9] && arr[7] != '') {
        flag = true;
        print(7, 8, 9)
    }
    else if (arr[3] == arr[6] && arr[6] == arr[9] && arr[3] != '') {
        flag = true;
        print(3, 6, 9)

    }
    else if (arr[2] == arr[5] && arr[5] == arr[8] && arr[2] != '') {
        flag = true;
        print(2, 5, 8)
    }
    else if (arr[1] == arr[4] && arr[4] == arr[7] && arr[1] != '') {
        flag = true;
        print(1, 4, 7)
    }
    else if (arr[1] == arr[5] && arr[5] == arr[9] && arr[1] != '') {
        flag = true;
        print(1, 5, 9)
    }
    else if (arr[3] == arr[5] && arr[5] == arr[7] && arr[3] != '') {
        flag = true;
        print(3, 5, 7)
    }
    if (j == 9) {

        if (flag == false) {
            msg.innerHTML = 'no win'
            setInterval(function () { msg.innerHTML += '.' }, 1000);
            setTimeout(function () { reset() }, 3000);
            document.getElementById('moving-element').style.display = 'unset'
            document.getElementById('moving-element').classList.add('animate')
            document.getElementById('move-img').src = 'assets/img/Screenshot-sarsor-removebg-preview.png'
            audio.src = 'assets/Audio/spongebob-fail.mp3'
            audio.play();
            count += 1;
            saveCountToLocalStorage(count);
        }
    }
    if (count > 2) {
        audio.src = 'assets/Audio/spongebob-two-hours-later-2019-download-link.mp3'
        audio.play();
        saveCountToLocalStorage(0);
    }
}

function game(id) {
    let player = document.getElementById(id);
    if (player.innerHTML === '') {
        player.innerHTML = turn;
        player.style.pointerEvents = 'none';

        turn = (turn === 'X') ? 'O' : 'X';
    }
    winner()
}
function reset() {
    for (let i = 1; i < 10; i++) {
        document.getElementById("item" + i).innerHTML = ' '

    }
    location.reload();
}
