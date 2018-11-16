// 25 - всего
// 12 - 1  48%
// 6 - 3   24%
// 4 -5    16%
// 2 - 10  8%
// 1 - 20  4%
let fortuneWheelArr = [1, 3, 1, 5, 1, 3, 1, 10, 1, 3, 1, 5, 1, 5, 3, 1, 10, 1, 3, 1, 5, 1, 3, 1, 20];
let userBalance = 100;
let activeBtn = 0;

$(window).on('load', function () {
    $('#userCash')[0].innerText = userBalance + '$'
});

$('#bettingInput').on('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1')
});

$('.userChoose').on('click', function () {
    activeBtn = event.target.id
});

function randomSpin() {
    return fortuneWheelArr[Math.floor(Math.random() * (25))];
}

$('#spin').on('click', function () {
    let bid = $('#bettingInput')[0].value;
    if (activeBtn == 0) {
        alert('Choose a bet')
    } else {
        if (bid.length < 1) {
            alert('Make your bid')
        } else {
            bid = parseInt(bid);
            if (bid > userBalance) {
                alert('Insufficient funds on balance')
            } else {
                let thisSpin = randomSpin();
                userBalance -= bid;
                if (activeBtn != thisSpin) {
                    alert('Lose')
                } else {
                    alert('Won');
                    userBalance += bid + (bid * activeBtn);
                }
                $('#spinResult')[0].innerText = 'x' + thisSpin;
                $('#userCash')[0].innerText = userBalance + '$'
            }
        }
    }
});