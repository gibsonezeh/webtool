const r = {
  i: 'getElementById',
  l: 'addEventListener',
  p: 'preventDefault',
  k: 'click',
  sy: 'style',
  d: 'display',
  o: 'block',
  n: 'none',
  t: 'innerHTML'
},
id = [
  'hamburge',
  'dropdown_content'
],
gst = (p) => {
  let st = '<svg';
  for (const [k, v] of Object.entries(p)) {
    if (typeof v === 'object') {
      st += '>';
      if (Array.isArray(v)) {
        v.forEach(r => {
          st += `<rect `;
          for (const [pr, va] of Object.entries(r)) {
            st += `${pr}="${va}" `;
          }
          st += '/>';
        });
      } else {
        for (const [pr, va] of Object.entries(v)) {
          st += `<path ${pr}="${va}" `;
        }
      }
    } else {
      st += ` ${k}="${v}"`;
    }
  }
  st += '</svg>';
  return st;
},
op = {
  close: () => {
    return gst({
      width: 24,
      height: 24,
      viewBox: '-1 -1 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      path: {
        d: 'M18 6L6 18M6 6l12 12',
        stroke: 'currentColor',
        'stroke-width': 4,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      }
    });
  },
  open: () => {
    return gst({
      width: 24,
      height: 24,
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      rects: [
        { x: 4, y: 5, width: 17, height: 3, fill: 'currentColor' }
       ,{ x: 4, y: 12, width: 17, height: 3, fill: 'currentColor' }
       ,{ x: 4, y: 19, width: 17, height: 3, fill: 'currentColor' }
      ]
    });
  }
};
document[r.i](id[0])[r.t] = op.open(),
mth = {
  td: function() {
    const dB = document[r.i](id[0]);
    const dC = document[r.i](id[1]);
    dB[r.l](r.k, (e) => {
      e[r.p]();
      dC[r.sy][r.d] = dC[r.sy][r.d] === r.n ? r.o : r.n;
      dB[r.t] = dC[r.sy][r.d] === r.n ? op.open() : op.close();
    });
    return undefined;
  }
};

mth.td();
