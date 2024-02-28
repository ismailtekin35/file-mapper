let fs = require("fs");

module.exports = {
  mapToCityModel(value) {
    const retval = [
      ...value.map((element, index, arr) => {
        return {
          Color: "#FFF",
          Value: element,
          DisplayName: element,
          Country: "Ukraine",
          Selected: false,
        };
      }),
    ];
    const schema = {
      Id: "4",
      Title: "Locations",
      Description: "All Ukraine",
      Type: "checkbox",
      Selected: [
        {
          Color: "#FFF",
          Value: "reset",
          DisplayName: "All Ukraine",
          Country: "Ukraine",
        },
      ],
      FilterItem: [],
    };
    retval.unshift({
      Color: "#FFF",
      Value: "reset",
      DisplayName: "All Ukraine",
      Selected: false,
    });
    schema.FilterItem = retval;
    return schema;
  },

  mappingToTranslateJson() {
    let filename = "/assets/en.json";
    let content = fs.readFileSync(process.cwd() + "/" + filename).toString();
    console.log("Process Start Read File...");
    let jsonContetn = JSON.parse(content);
    let retval = "";
    let resultObj = {};
    Object.keys(jsonContetn).forEach((upperKey) => {
      Object.keys(jsonContetn[upperKey]).forEach(async (innerKey) => {
        resultObj[upperKey][innerKey] = await translate.translate(
          jsonContetn[upperKey][innerKey],
          "tr"
        );
        // retval = retval + upperKey + ";" + innerKey + ";" + jsonContetn[upperKey][innerKey] + ";" + "\n";
      });
    });
    let path = "language.json";
    var stream = fs.createWriteStream(path);
    stream.once("open", function (fd) {
      stream.write(resultObj);
      stream.end();
      console.log("Process End Write File...");
    });
  },

  mapToCsv(fileNameParam) {
    let filename = "/assets/targets/" + fileNameParam;
    let content = fs.readFileSync(process.cwd() + "/" + filename).toString();
    console.log("Process Start Read File...");
    let retval = {};
    let sourceArr = content.split(";");
    for (let index = 0; index < sourceArr.length; index++) {
      // {
      //     "general": {
      //         "aasdasd":"adasd"
      //     }
      // }
      if (index % 3 == 0) {
        console.log("index", index);
        console.log(
          sourceArr[index].replace("\r\n", ""),
          sourceArr[index + 1],
          [sourceArr[index + 2]]
        );
        let value = sourceArr[index + 1] + ":" + sourceArr[index + 2];
        let mainKey = sourceArr[index].replace("\r\n", "");
        if (!retval[mainKey]) {
          retval[mainKey] = "{" + value;
        } else {
          retval[mainKey] = retval[mainKey] + "," + value;
        }
      }
    }

    let mainData = "{";
    Object.keys(retval).forEach((e) => {
      retval[e] = retval[e];
      // console.log(e)
      mainData = mainData + '{"' + e + '":' + retval[e] + "},";
      // console.log("Key", e);
    });
    mainData = mainData + "}";
    // console.log('mainData',mainData)
    // console.log("adadsasdasd", JSON.stringify({
    //     "Duygu": {
    //         "att": "bok",
    //         "btt": "boq"
    //     }
    // }))
    //  "console.log("RRR", retval);
  },

  jsonToCsv(fileNameParam) {
    let filename = "/assets/targets/" + fileNameParam;
    let content = fs.readFileSync(process.cwd() + "/" + filename).toString();
    console.log("Process Start Read File...");
    let result = JSON.parse(content);
    let retval = [];
    Object.keys(result).forEach(key => {
        Object.keys(result[key]).forEach(subKey=>{
          retval.push(key +";"+ subKey +";"+ result[key][subKey]);
        });
    });
   let aa = retval.join('\n');
   console.log(aa);
    let path = fileNameParam.replace(".json", "") + ".csv";
    var stream = fs.createWriteStream(path);
    stream.once("open", function (fd) {
      stream.write(aa);
      stream.end();
      console.log("Process End Write File...");
    });
  },

  mapToCsv2(fileNameParam) {
    let filename = "/assets/targets/" + fileNameParam;
    let content = fs.readFileSync(process.cwd() + "/" + filename).toString();
    console.log("Process Start Read File...");
    let mainCode = {};
    let sourceArr = content.split(";;");
    sourceArr.forEach((element, index) => {
      let vals = element.replace("\r\n", "");
      let splitedElement = vals.split(";");
      // if (mainCode[splitedElement[0]] != "") {
      if (mainCode[splitedElement[0]]) {
      } else {
        mainCode[splitedElement[0]] = [];
      }
      mainCode[splitedElement[0]].push({
        key: splitedElement[1],
        value: splitedElement[2],
      });
      // }
    });
    let retval = {};
    // mainCode.forEach(e => {
    //     console.log("item",e);
    //     // retval.push();
    // });
    Object.keys(mainCode).forEach((e) => {
      retval[e] = {};
      mainCode[e].forEach((subItems) => {
        retval[e][subItems.key] = subItems.value;
      });
    });

    let path = fileNameParam.replace(".csv", "") + ".json";
    var stream = fs.createWriteStream(path);
    stream.once("open", function (fd) {
      stream.write(JSON.stringify(retval));
      stream.end();
      console.log("Process End Write File...");
    });
  },
};
