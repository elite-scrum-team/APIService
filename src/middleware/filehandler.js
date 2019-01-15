const multer = require('multer');
const multerGoogleStorage = require('multer-google-storage');

const upload = multer({
    storage: multerGoogleStorage.storageEngine(),

    /*  fileFilter: (req, file, cb) => {
        console.log("Body: ", req.body);
        console.log("File: ", req.file);
        console.log("Files: ", req.files);
        // reject a file
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(null, false);
        }
    },

    filename: (req, file, cb) => {
        let datenow = Date.now().toString();
        cb(null, datenow + file.getOriginalFilename());
    }, */
});

let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + ' - ' + Date.now());
    },
});

module.exports = upload; //multer({storage: storage}); //;
