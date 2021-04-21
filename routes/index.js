const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res) {
  let data =fs.readFileSync('./public/doc/' + req.body.filename + '.pdf');
  res.contentType("application/pdf");
  res.status(200).send(data);
});

/* POST home page. */
router.post('/', function(req, res) {
  let pdfDOc = new PDFDocument;

  pdfDOc.pipe(fs.createWriteStream('./public/doc/' + req.body.filename + '.pdf'));
  pdfDOc.text(req.body.content);
  pdfDOc.end();

  res.status(200).send("success to created");
});

module.exports = router;
