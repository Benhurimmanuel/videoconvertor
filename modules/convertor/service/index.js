const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs")
const fileConvertorService = (to, file, fileName) => {
    // console.log("to=", to)
    // console.log("file=", file)
    // console.log("fileName=", fileName)



    ffmpeg("../../../tmp/" + file.name).withOutputFormat(to)
        .on('end', (stdout, stderr) => {
            console.log("finished")
            res.download(__dirname + fileName, function (err) {
                if (err) throw err;

                fs.unlink(__dirname + fileName, function (err) {
                    if (err) throw err;
                    console.log("File deleted");
                });
            });
            fs.unlink("../../../tmp/" + file.name, function (err) {
                if (err) throw err;
                console.log("File deleted");
            });
        })
        .on('error', (err) => {
            console.log("in on erorr")
            fs.unlink("tmp/" + file.name, function (err) {
                if (err) throw err;
                console.log("File deleted");
            });
        })
        .saveToFile(__dirname + fileName)

};

module.exports = { fileConvertorService };



