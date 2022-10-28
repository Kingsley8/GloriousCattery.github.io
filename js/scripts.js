const countToDate = new Date('Aug 18 2000 12:00');
let previousTimeBetweenDates
setInterval(() => {
  const currentDate = new Date()
  const timeBetweenDates = Math.ceil((currentDate - countToDate ) / 1000)
  flipAllCards(timeBetweenDates)

  previousTimeBetweenDates = timeBetweenDates
}, 250)

function flipAllCards(time) {
  // const seconds = time % 60
  // const minutes = Math.floor(time / 60) % 60
  // const hours = Math.floor(time / 3600)
  // const days = Math.floor(time / 60 / 60 / 24);
  // const days = Math.floor(time / 60 / 60 / 24);
  // const hours = Math.floor(time / 60 / 60 % 24);
  // const minutes = Math.floor(time / 60 % 60);
  // const seconds = Math.floor(time % 60);
  // const milliseconds =
  //       Math.round((time - Math.floor( time)) * 1000);
  // const weeks = Math.floor(days / 7);
  // const months = Math.floor(days / 30);
  // const years = Math.floor(months / 12);

  var a = moment('2000-08-18 00:00:00');
        var b = moment();
        diff = moment.preciseDiff(a,b,true);

        intervals = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];
        output = [];
        
        for(var i=0; i< intervals.length; i++){
            var d = diff[intervals[i]]; 
            var d = d < 10 ? '0' + d : d;
            output.push(d + ' ');
          
        }

        document.getElementById("output").innerHTML = output;

  flip(document.querySelector("[data-years-tens]"), Math.floor(output[0] / 10))
  flip(document.querySelector("[data-years-ones]"), output[0] % 10)
  flip(document.querySelector("[data-months-tens]"), Math.floor(output[1] / 10))
  flip(document.querySelector("[data-months-ones]"), output[1] % 10)
  flip(document.querySelector("[data-days-tens]"), Math.floor(output[2] / 10))
  flip(document.querySelector("[data-days-ones]"), output[2] % 10)
  flip(document.querySelector("[data-hours-tens]"), Math.floor(output[3] / 10))
  flip(document.querySelector("[data-hours-ones]"), output[3] % 10)
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(output[4] / 10))
  flip(document.querySelector("[data-minutes-ones]"), output[4] % 10)
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(output[5] / 10))
  flip(document.querySelector("[data-seconds-ones]"), output[5] % 10)

}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top")
  const startNumber = parseInt(topHalf.textContent)
  if (newNumber === startNumber) return

  const bottomHalf = flipCard.querySelector(".bottom")
  const topFlip = document.createElement("div")
  topFlip.classList.add("top-flip")
  const bottomFlip = document.createElement("div")
  bottomFlip.classList.add("bottom-flip")

  top.textContent = startNumber
  bottomHalf.textContent = startNumber
  topFlip.textContent = startNumber
  bottomFlip.textContent = newNumber

  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = newNumber
  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = newNumber
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}


    function diff(){
        var a = moment('2000-08-18 00:00:00');
        var b = moment();
        diff = moment.preciseDiff(a,b,true);

        intervals = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];
        output = [];
        
        for(var i=0; i< intervals.length; i++){
            var d = diff[intervals[i]]; var d = d < 10 ? '0' + d : d;
            output.push(d + ' ' );
        }

        document.getElementById("output").innerHTML = output;
    }
    
    setInterval(diff, 1000);


