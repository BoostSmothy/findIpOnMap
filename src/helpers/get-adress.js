export async function gerAddress(ip = '8.8.8.8'){
   const response = await fetch(`
   https://geo.ipify.org/api/v2/country,city?apiKey=at_hRbQuL4TwmygOZdAMKbC5aZ8EIFJw&ipAddress=${ip}`);
   return await response.json();
}