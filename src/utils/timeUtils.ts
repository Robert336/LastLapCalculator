
// output MM:SS.mmm
function formatTime(timeStr: string): string {
    let formattedTime = timeStr.padStart(7, '0');
    formattedTime = formattedTime.slice(0, 2) + ':' + formattedTime.slice(2, 4) + '.' + formattedTime.slice(4,7);
    return formattedTime;
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

export {formatTime, addTimeDigit, removeTimeDigit};