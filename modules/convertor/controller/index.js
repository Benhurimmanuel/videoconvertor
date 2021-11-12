const fileUpload = require('express-fileupload');
const { fileConvertorService } = require('../service/index');


const fileConvertorController = (req, res, next) => {
    try {
        let to = req.body.to;
        let file = req.files.file;
        let fileName = `output.${to}`
        file.mv("tmp/" + file.name, (error) => {
            if (error) throw error;
            console.log("fileUpload successful");
            const result = fileConvertorService(to, file, fileName)
        })
    } catch (error) {

    }
}

module.exports = { fileConvertorController }

