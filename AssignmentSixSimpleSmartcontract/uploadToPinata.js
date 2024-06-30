const pinataSDK = require('@pinata/sdk');
// const fs = require('fs');
// const path = require('path');

// const pinata = pinataSDK(f0f0a0e38304d925540f, 597309bfe6d797dc937bc5efb5dcc6d04755b51f0fab23d34426742dc136e832);

// const readableStreamForFile = fs.createReadStream(path.join(__dirname, ));

// const options = {
//     pinataMetadata: {
//         name: 'MyFile',
//         keyvalues: {
//             customKey: 'customValue'
//         }
//     },
//     pinataOptions: {
//         cidVersion: 0
//     }
// };

// pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
//     // Handle the result here
//     console.log(result);
// }).catch((err) => {
//     // Handle error here
//     console.error(err);
// });


// const axios = require('axios');
// const fs = require('fs');
// const FormData = require('form-data');

// const PINATA_API_KEY = f0f0a0e38304d925540f;
// const PINATA_SECRET_API_KEY = 597309bfe6d797dc937bc5efb5dcc6d04755b51f0fab23d34426742dc136e832;

// async function uploadFileToPinata() {
//     const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

//     // Replace 'path/to/your/file' with the actual file path
//     const filePath = /Users/laurarobertsonhatch/Downloads/Content/awakenings.jpeg;

//     const formData = new FormData();
//     formData.append('file', fs.createReadStream(filePath));

//     const headers = {
//         'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
//         'pinata_api_key': PINATA_API_KEY,
//         'pinata_secret_api_key': PINATA_SECRET_API_KEY
//     };

//     try {
//         const response = await axios.post(url, formData, { headers });
//         console.log('File uploaded successfully:', response.data);
//     } catch (error) {
//         console.error('Error uploading file:', error);
//     }
// }

// uploadFileToPinata();

