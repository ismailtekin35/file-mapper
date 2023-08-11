const http = require('http');
const helper = require("../file-mapper/helpers/helper");
const hostname = '127.0.0.1';
const port = 3000;
const source = [
  {
    "DisplayName": "Adana-1"
  },
  {
    "DisplayName": "Adana-2"
  },
  {
    "DisplayName": "Adana-3"
  },
  {
    "DisplayName": "Adana-4"
  },
  {
    "DisplayName": "Adana-5"
  },
  {
    "DisplayName": "Adana-6"
  },
  {
    "DisplayName": "Adana-7"
  },
  {
    "DisplayName": "Adana-other"
  },
  {
    "DisplayName": "Afyon"
  },
  {
    "DisplayName": "Aksaray"
  },
  {
    "DisplayName": "Ankara"
  },
  {
    "DisplayName": "Antalya-1"
  },
  {
    "DisplayName": "Antalya-2"
  },
  {
    "DisplayName": "Antalya-3"
  },
  {
    "DisplayName": "Antalya-4"
  },
  {
    "DisplayName": "Antalya-5"
  },
  {
    "DisplayName": "Antalya-6"
  },
  {
    "DisplayName": "Antalya-7"
  },
  {
    "DisplayName": "Diyarbakır-1"
  },
  {
    "DisplayName": "Diyarbakır-2"
  },
  {
    "DisplayName": "Doğu Marmara"
  },
  {
    "DisplayName": "Ege-1"
  },
  {
    "DisplayName": "Ege-10"
  },
  {
    "DisplayName": "Ege-2"
  },
  {
    "DisplayName": "Ege-3"
  },
  {
    "DisplayName": "Ege-4"
  },
  {
    "DisplayName": "Ege-5"
  },
  {
    "DisplayName": "Ege-6"
  },
  {
    "DisplayName": "Ege-7"
  },
  {
    "DisplayName": "Ege-8"
  },
  {
    "DisplayName": "Ege-9"
  },
  {
    "DisplayName": "Eskişehir"
  },
  {
    "DisplayName": "Gap Doğu"
  },
  {
    "DisplayName": "Gaziantep-Kilis"
  },
  {
    "DisplayName": "Güney Marmara-1"
  },
  {
    "DisplayName": "Güney Marmara-2"
  },
  {
    "DisplayName": "Güney Marmara-3"
  },
  {
    "DisplayName": "Güney Marmara-4"
  },
  {
    "DisplayName": "Hatay-1"
  },
  {
    "DisplayName": "Isparta"
  },
  {
    "DisplayName": "Kahramanmaras"
  },
  {
    "DisplayName": "Karadeniz-1"
  },
  {
    "DisplayName": "Karadeniz-2"
  },
  {
    "DisplayName": "Karadeniz-3"
  },
  {
    "DisplayName": "Karadeniz-4"
  },
  {
    "DisplayName": "Karaman"
  },
  {
    "DisplayName": "Kayseri"
  },
  {
    "DisplayName": "Konya-1"
  },
  {
    "DisplayName": "Konya-2"
  },
  {
    "DisplayName": "Konya-3"
  },
  {
    "DisplayName": "Konya-4"
  },
  {
    "DisplayName": "Konya-5"
  },
  {
    "DisplayName": "Malatya-1"
  },
  {
    "DisplayName": "Malatya-2"
  },
  {
    "DisplayName": "Mardin-1"
  },
  {
    "DisplayName": "Mardin-2"
  },
  {
    "DisplayName": "Mersin-1"
  },
  {
    "DisplayName": "Mersin-2"
  },
  {
    "DisplayName": "Niğde"
  },
  {
    "DisplayName": "Osmaniye-Hatay"
  },
  {
    "DisplayName": "Other"
  },
  {
    "DisplayName": "Trakya-1"
  },
  {
    "DisplayName": "Trakya-2"
  },
  {
    "DisplayName": "Trakya-3"
  },
  {
    "DisplayName": "Trakya-4"
  },
  {
    "DisplayName": "Trakya-5"
  },
  {
    "DisplayName": "Urfa-1"
  },
  {
    "DisplayName": "Urfa-2"
  },
  {
    "DisplayName": "Urfa-3"
  },
  {
    "DisplayName": "Urfa-4"
  }
]

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  helper.mapToCsv2("en.csv");
  // helper.mappingToTranslateJson(); 
  // const value = helper.mapToCityModel(source);
  // console.log(JSON.stringify(value));
  // res.end(JSON.stringify(value),"ascii");
});

server.listen(port, hostname, () => { 
  console.log(`Server running at http://${hostname}:${port}/`);
});