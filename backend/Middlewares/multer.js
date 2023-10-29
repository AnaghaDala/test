const multer = require('multer');

const storage = multer.diskStorage({
    destination: (res, file, cb) => cb(null, './complaint-images'),
    filename: (res, file, cb) => cb(null, Date.now() + file.originalname)
})

module.exports = multer({storage})