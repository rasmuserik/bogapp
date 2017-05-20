export function isClient() {
  return typeof window !== 'undefined'
}

export function parseQuery(q) {
  q = q.split('&');
  let result = {};
  for(let s of q) {
    s = decodeURIComponent(s);
    let pos = s.indexOf('=');
    if(pos >= 0) {
      let key = s.slice(0, pos);
      let val = s.slice(pos + 1);
      try {
        val = JSON.parse(s);
      } catch(e) {
        // no-op: use as string, if not json
      }
      result[key] = val;
    } else {
      result[s] = true;
    }
  }
  return result;
}

