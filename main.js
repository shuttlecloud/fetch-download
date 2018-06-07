"use strict";

const FileSaver = require('file-saver');

function getHeaderFilename(headers) {
    try{
        const rawFilename = headers.get("Content-Disposition").split("filename=")[1];
        return rawFilename.trim().slice(1, -1); // Removes "
    }catch(err) {
        return "";
    }
}

function generateErrorData(response) {
    return {
        status: response.status
    };
}

function fetchDownload(url, options={}) {
    return fetch(url, Object.assign({
        credentials: "same-origin"
    }, options)).then((res) => {
        if(!res.ok) return Promise.reject(generateErrorData(res));
        return res.blob().then((blobData) => {
            FileSaver.saveAs(blobData, getHeaderFilename(res.headers));
        });
    });
}


module.exports = fetchDownload;
