const express = require('express');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const path = require('path');

/**
 * express.Router() creates modular, mountable route handlers
 * A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
 */
const router = express.Router();

/**
 * AWS_ACCESS_KEY_ID = 'AKIAIU6P7LQY54TLM3SQ'
AWS_SECRET_ACCESS_KEY = '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'
 */
const s3 = new aws.S3({
	Bucket: 'mkt.viwip.com.ar',
	accessKeyId: 'AKIAIU6P7LQY54TLM3SQ',
	secretAccessKey: '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',
});


/**
 * Single Upload
 */
const profileImgUpload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'mkt.viwip.com.ar/esteban',
        acl: 'public-read',
        key: function (req, file, cb) {
            cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname))
        }
    }),
    limits: {
        fileSize: 9000000
    }, // In bytes: 2000000 bytes = 2 MB
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('profileImage');

/**
 * Check File Type
 * @param file
 * @param cb
 * @return {*}
 */
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif|mp4/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

/**
 * @route POST api/profile/business-img-upload
 * @desc Upload post image
 * @access public
 */
router.post('/profile-img-upload', (req, res) => {
    console.log("REQ:"+req);
    profileImgUpload(req, res, (error) => {
        console.log( 'requestOkokok', req.file );
        console.log( 'error', error );
        if (error) {
            console.log('errors', error);
            res.json({
                error: error
            });
        } else {
            // If File not found
            if (req.file === undefined) {
                console.log('Error: No File Selected!');
                res.json('Error: No File Selected');
            } else {
                // If Success
                const imageName = req.file.key;
                const imageLocation = req.file.location;

                // Save the file name into database into profile model

                res.json({
                    image: imageName,
                    location: imageLocation
                });
            }
        }
    });
});

// We export the router so that the server.js file can pick it up
module.exports = router;
