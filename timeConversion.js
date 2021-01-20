time = '07:05:45PM'

function timeConversion(s) {
  if (s.substring(8, 10) == 'AM') {
    return s.substring(0, 2) == '12'
    ? s.substring(0, 8).replace('12', '00')
    : s.substring(0, 8)
  }
  else
    return s.substring(0, 2) == '12' 
    ? s.substring(0, 8)
    : parseInt(s.substring(0, 2), 10) + 12 + s.substring(2, 8)
}

console.log(timeConversion(time))