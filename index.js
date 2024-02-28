const http = require("http");
const helper = require("../file-mapper/helpers/helper");
const hostname = "127.0.0.1";
const port = 3000;
const source = [
  "Ad Daqahliyah",
  "Al Buhayrah",
  "Al Fayyum",
  "Al Gharbiyah",
  "Al Iskandariyah",
  "Al Isma`iliyah",
  "Al Jizah",
  "Al Minufiyah",
  "Al Minya",
  "Al Qahirah",
  "Al Qalyubiyah",
  "Al Uqsur",
  "Al Wadi al Jadid",
  "As Suways",
  "Ash Sharqiyah",
  "Aswan",
  "Asyut",
  "Bani Suwayf",
  "Bur Sa`id",
  "Dumyat",
  "Kafr ash Shaykh",
  "Matrouh",
  "Qina",
  "Shamal Sina'",
  "Suhaj",
];

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
   //helper.mapToCsv2("en.json");
  //helper.mappingToTranslateJson();
  helper.jsonToCsv("en.json");
  //const value = helper.mapToCityModel(source);
  //console.log(JSON.stringify(value));
  // res.end(JSON.stringify(value),"ascii");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
