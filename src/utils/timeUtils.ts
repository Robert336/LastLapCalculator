
// output MM:SS.mmm
function formatTime(timeStr: string): string {
    let formattedTime = timeStr.padStart(7, '0');
    formattedTime = formattedTime.slice(0, 2) + ':' + formattedTime.slice(2, 4) + '.' + formattedTime.slice(4,7);
    return formattedTime;
  }


/*
  Takes time string in format MM:SS.mmm and converts it to milliseconds as a number.
*/
function timeStrToNumber(str: string): number {
  
  const mins = Number(str.slice(0, 2)) * 60000;
  const secs = Number(str.slice(3, 5)) * 1000;
  const ms = mins + secs + Number(str.slice(6));

  return ms;
}

function millisecondsToTimeStr(ms: number): string {
  
  // 100 ms = 1 sec
  // 60 sec = 1 min
  // 6000 ms = 1 min

  const mins = Math.floor(ms / 60000);
  const secs_remaining = Math.floor(((ms - mins * 60000) / 6000));
  const ms_remaining = Math.floor((ms - secs_remaining * 6000 - mins * 60000));

  const unformattedTimeStr = String(mins) + String(secs_remaining) + String(ms_remaining);

  return formatTime(unformattedTimeStr);
}

function addTimeDigit(timeStr: string, digit: string): string {

  let tempStr = timeStr.replaceAll(':', '');
  tempStr = tempStr.replaceAll('.', '');
  
  tempStr = tempStr + digit;

  // need to adjust : and .
  const tempLength = tempStr.length;
  const milisec = tempStr.slice(tempLength - 3, tempLength);
  const sec = tempStr.slice(tempLength - 5, tempLength - 3);
  const min = tempStr.slice(tempLength - 7, tempLength - 5);

  return min + ':' + sec + '.' + milisec;
}

function removeTimeDigit(timeStr: string): string {

  let tempStr = timeStr.replaceAll(':', '');
  tempStr = tempStr.replaceAll('.', '');
  
  tempStr = '0' + tempStr.substring(0,7);

  return formatTime(tempStr);
}

function timeStrAddition(str1: string, str2: string): string {
  // convert both strings into milliseconds as a number
  // compute addition in ms
  // convert ms back to formatted time str
  const strNum1 = timeStrToNumber(str1);
  const strNum2 = timeStrToNumber(str2);

  const sumInMS = strNum1 + strNum2;

  return millisecondsToTimeStr(sumInMS);
}

function timeStrMultiply(str: string, factor: number): string {
  // convert both strings into milliseconds as number
  // compute multiplication in ms
  // convert ms back to formatted time str

  const strNum = timeStrToNumber(str) * factor;

  return millisecondsToTimeStr(strNum);
}


export {
  formatTime,
  addTimeDigit,
  removeTimeDigit,
  timeStrAddition,
  timeStrMultiply,
  timeStrToNumber,
};