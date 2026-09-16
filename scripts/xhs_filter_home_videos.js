// Xiaohongshu homefeed/trending video filter for Loon.
// Primary intent: .data |= map(select(.type != "video"))

let body = $response.body;

try {
  const obj = JSON.parse(body);
  let changed = false;

  if (Array.isArray(obj.data)) {
    const before = obj.data.length;
    obj.data = obj.data.filter(item => !(item && item.type === "video"));
    changed = obj.data.length !== before;
  }

  // Fallback for versions where feed entries are nested under data.items.
  if (obj.data && Array.isArray(obj.data.items)) {
    const before = obj.data.items.length;
    obj.data.items = obj.data.items.filter(item => !(item && item.type === "video"));
    changed = changed || obj.data.items.length !== before;
  }

  console.log(`[XHS filter] ${$request.url} changed=${changed}`);
  body = JSON.stringify(obj);
} catch (e) {
  console.log(`[XHS filter] JSON parse failed: ${String(e)}`);
}

$done({ body });
