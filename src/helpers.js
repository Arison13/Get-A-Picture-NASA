
const handleDate = () => {
    let currentDate;
    const Today = new Date();
    let month = Today.getMonth() + 1;
    let day = Today.getDate();
    let year = Today.getFullYear();
      if(month < 10) {
        month = `0${month.toString()}`
      }
      if(day < 10 ){
        day = `0${day.toString()}`
      }
    return currentDate = `${year}-${month}-${day}`
  
}

export {
    handleDate, 
}