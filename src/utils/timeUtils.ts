
// output MM:SS
function formatTime(timeStr: string): string {
  let formattedTime = timeStr.padStart(4, '0');
  formattedTime = formattedTime.slice(0, 2) + ':' + formattedTime.slice(2, 4)
  return formattedTime;
}

function pad(num: number): string {
  return num < 10 ? '0' + String(num) : String(num);
}

/*
  Takes time string in format MM:SS.mmm and converts it to milliseconds as a number.
  // TODO: Change to just MM:SS
*/
function timeStrToNumber(str: string): number {
  
  const mins = Number(str.slice(0, 2)) * 60000;
  const secs = Number(str.slice(3, 4)) * 1000;
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


function addTimeDigit(timeStr: string, digit: string): string {

  let tempStr = timeStr.replaceAll(':', '');

  tempStr = tempStr + digit;

  const tempLength = tempStr.length;
  // const milisec = tempStr.slice(tempLength - 3, tempLength);
  const sec = tempStr.slice(tempLength - 2, tempLength);
  const min = tempStr.slice(tempLength - 4, tempLength - 2);

  return min + ':' + sec;
}


function removeTimeDigit(timeStr: string): string {

  let tempStr = timeStr.replaceAll(':', '');
  //tempStr = tempStr.replaceAll('.', '');
  
  tempStr = '0' + tempStr.substring(0,4);

  return formatTime(tempStr);
}


export {
  formatTime,
  addTimeDigit,
  millisecondsToTimeStr,
  removeTimeDigit,
  timeStrToNumber,
};