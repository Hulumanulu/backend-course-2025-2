
const date = "20160101";       
const time_period = "m";       


const baseUrl = "https://bank.gov.ua/";
const apiPath = "/NBUStatService/v1/statdirectory/banksincexp";

const url = new URL(apiPath, baseUrl);


url.searchParams.append('date', date);
url.searchParams.append('period', time_period);
url.searchParams.append('json', '');  


console.log(url.toString());