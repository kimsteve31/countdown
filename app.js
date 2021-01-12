const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const targetDate = '17 Feb 2021'

function countdown() {
  const target = new Date(targetDate)
  const currentDate = new Date()

  const difference = (target - currentDate) / 1000

  const sec = Math.floor(difference % 60)
  const min = Math.floor((difference / 60) % 60)
  const hour = Math.floor((difference / 3600) % 24)
  const day = Math.floor(difference / 3600 / 24)

  console.log(sec)

  days.innerHTML = day
  hours.innerHTML = hour
  minutes.innerHTML = min
  seconds.innerHTML = sec
}

countdown()

setInterval(countdown, 1000)
