// Set any date you want (my birthday date as an example)
let newYearDate = new Date(2022, 8, 30, 0, 0, 0, 0);


function counter() {
   let now = new Date();
   let diff = newYearDate.getTime() - now.getTime();
   // Count days, hours, minutes and seconds
   let days = Math.floor(diff / (1000 * 3600 * 24));
   let hours = Math.floor(diff / (1000 * 3600) - (days * 24));
   let minutes = Math.floor(diff / (1000 * 60) - (days * 24 * 60) - (hours * 60));
   let seconds = Math.floor(diff / (1000) - (days * 24 * 3600) - (hours * 3600) - (minutes * 60));
   // switch number for days, hours, minutes and seconds
   numSwitcher(days, 'days');
   numSwitcher(hours, 'hours');
   numSwitcher(minutes, 'minutes');
   numSwitcher(seconds, 'seconds');


   setTimeout(counter, 500);
}

// initialize
counter();

// Function add zero to number if number < 10
function numSwitcher(num, str) {
   if (num < 10) {
      document.querySelector('.' + str).innerText = '0' + num;
   } else {
      document.querySelector('.' + str).innerText = num;
   }
}