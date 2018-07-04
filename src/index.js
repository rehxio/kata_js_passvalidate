export const validate = (password) => {
   if(password.length === 0) {
      return false;
   } else {
      let re = new RegExp('[A-Z]')
      if(re.test(password)) {
         return true;
      } else {
         return false;
      }
   }
     
} 