module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  isEqual: (val1, val2) => {
    if(val1 === val2){return true;}else{return false;}
  },
  // isUserLoggedIn: async ()=> {
  //   user = await fetch("http://localhost:3001/api/user");
  //   if(!user){return false;}else{return true;}
    
  // }
};
