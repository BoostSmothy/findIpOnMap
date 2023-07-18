export function validatIp(ip){
   if(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(ip)){
      return true;
   }

   alert('You have to enter a valid IP address');
   return false;  
}