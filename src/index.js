export const validate = (password) => {
   if(password.length === 0) {
      return false;
   } else {
      const hasMayus = new RegExp('[A-Z]');
      const hasMinus = new RegExp('[a-z]');
      const hasNumber = new RegExp('[0-9]');
      return hasMayus.test(password) && 
            hasMinus.test(password) && 
            hasNumber.test(password);
   }
     
} 