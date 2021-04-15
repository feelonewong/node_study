const path = require("path");
const fs = require("fs");

function getFileContent(filename, callback) {
  const fullName = path.resolve(__dirname, "./files", filename);

  fs.readFile(fullName, (err, data) => {
    if (err) {
      console.err(err);
    }
    callback(
        JSON.parse(data.toString())
    )
  });
}

getFileContent( "a.json", (cb)=>{
    console.log(cb);
    getFileContent(cb.next, bData=>{
        console.log(bData);
        getFileContent( bData.next, (cData)=>{
            console.log(cData);
        })
    });

})