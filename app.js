
const express = require("express")
const expressFileUpload = require("express-fileupload");
const app = express()
const fileConvertor = require('./modules/convertor/routes')
const ffmpeg = require("fluent-ffmpeg")

ffmpeg.setFfmpegPath("./ffmpeg/bin/ffmpeg.exe");
ffmpeg.setFfprobePath("./ffmpeg/bin/ffprobe.exe");
ffmpeg.setFlvtoolPath("./ffmpeg/bin/ffplay.exe");

// console.log(ffmpeg);

// middleware
app.use(express.json())
app.use(expressFileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

// Routes
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});
app.use('/upload', fileConvertor)

app.listen(3000, () => {
    console.log("port running successfully in port 3000")
})