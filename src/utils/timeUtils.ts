
// formatTime will return a newly formatted time string:
// xx:xy, where y is the new value.
// output MM:SS
function formatTime(timeStr: string): string {
  
  const cleanedInput = timeStr.replace(/\D/g, '');

  // Ensure the input has at least 2 digits
  const paddedInput = cleanedInput.padStart(4, '0');

  // Extract minutes and seconds
  const minutes = paddedInput.slice(paddedInput.length - 4, paddedInput.length - 2);
  const seconds = paddedInput.slice(paddedInput.length - 2, paddedInput.length);

  return `${minutes}:${seconds}`;
}

function pad(num: number): string {
  return num < 10 ? '0' + String(num) : String(num);
}

/*
  Takes time string in format MM:SS and converts it to milliseconds as a number.
*/
function timeStrToNumber(str: string): number {
  
  const mins = Number(str.slice(0, 2)) * 60000;
  const secs = Number(str.slice(3, 5)) * 1000;
  const ms = mins + secs;
  return ms;
}


function millisecondsToTimeStr(ms: number): string {
  
  // 1000 ms = 1 sec
  // 60 sec = 1 min
  // 60000 ms = 1 min
  let carry = 0;
  const mins = Math.floor(ms / 60000);
  // left over ms from calculating mins
  carry = ms - mins * 60000
  
  const secs_remaining = Math.floor(carry / 1000);
  carry = carry - secs_remaining * 1000
  
  return pad(mins) + ':' + pad(secs_remaining);
}

export {
  formatTime,
  millisecondsToTimeStr,
  timeStrToNumber,
};