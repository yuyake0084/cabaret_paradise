const express = require('express');
const router = express.Router();
const cheerio = require('cheerio-httpcli');

router.get('/', async (req, res, next) => {
  let data = [];

  const { err, $ } = await cheerio.fetch('https://luline.jp/ranking/cast/');

  $('img[data-original]').each(function() {
    data.push({
      name: $(this)[0].attribs.alt,
      src: `https:${$(this)[0].attribs['data-original']}`
    });
  });

  res.json({ data });
});

module.exports = router;
