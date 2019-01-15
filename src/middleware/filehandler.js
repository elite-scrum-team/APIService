const multer = require('multer');
const multerGoogleStorage = require('@igorivaniuk/multer-google-storage');

let upload = null;

try {
    const storage = multerGoogleStorage.storageEngine();

    const multerInit = multer({
        storage,

        fileFilter: (req, file, cb) => {
            if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
                cb(null, true);
            else cb(null, false);
        },

        fileName: (req, file, cb) => {
            let datenow = Date.now().toString();
            cb(null, datenow + file.getOriginalFilename());
        },

        limits: {
            fileSize: 1024 * 1024 * 5,
        },
    });

    upload = multerInit;
} catch (err) {
    console.log(err);
    throw err;
}

module.exports = upload;
