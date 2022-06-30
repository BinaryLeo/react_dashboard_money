
const timeOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  };

export function usecanadianTime(){
  const  date = new Date()
  return date.toLocaleString('en-CA', timeOptions);


}