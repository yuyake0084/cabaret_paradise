const express = require('express');
const router = express.Router();
const cheerio = require('cheerio-httpcli');

router.get('/', async (req, res) => {
  let data = [];

  const { err, $ } = await cheerio.fetch('https://luline.jp/ranking/cast/');

  $('img[data-original]').each(function() {
    const src = `https:${$(this)[0].attribs['data-original']}`;
    const group = src.split(/\/(\d+)\/[a-zA-Z]+_[a-zA-Z]+_\d+/);

    data.push({
      id: group.slice(1, -1)[0],
      name: $(this)[0].attribs.alt,
      src
    });
  });

  res.json({ data });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { err, $ } = await cheerio.fetch(`https://luline.jp/cast/view/${id}`);
  const data = {};
  const arr = [];

  $('.image img[data-original]').each(function() {
    const src = `https:${$(this)[0].attribs['data-original']}`;

    Object.assign(data, { src })
  });

  $('table.profTable tr td div').each(function() {
    $(this)[0].children.forEach((data, i)  => {

      arr.push(data.data);
    });

    Object.assign(data, {
      name: arr[0],
      store: arr[1],
      dob: arr[2],
      bloodType: arr[3],
      height: arr[4],
      bust: arr[5],
      graduate: arr[6]
    })
  });

  res.json({ data });
});

module.exports = router;
