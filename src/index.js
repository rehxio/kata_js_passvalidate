export const validate = (password) => {
   if(password.length === 0) {
      return false;
   } else {
      const hasMayus = new RegExp('[A-Z]');
      const hasMinus = new RegExp('[a-z]');
      return hasMayus.test(password) && hasMinus.test(password);
   }
     
} 