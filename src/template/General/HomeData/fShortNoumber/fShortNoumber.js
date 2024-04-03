import numeral from 'numeral';

export function result(format, key = '.00') {
    const isInteger = format.includes(key);
  
    return isInteger ? format.replace(key, '') : format;
  }
  
export function fShortNoumber(number) {
    const format = number ? numeral(number).format('0.00a') : '';
    return result(format, '.00');
    
};
export function fNumber(number) {
  return numeral(number).format();
}

