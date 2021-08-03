const fs = require('fs');
const saveTextFile=(filePath,fileName,txt)=>{

    if (!fs.existsSync(filePath)){
        fs.mkdirSync(filePath);
    }

    fs.writeFile(`${filePath}/${fileName}`, txt, 'utf8', function (err) {
        if (err) return console.log(err);
    });
}
module.exports=saveTextFile;