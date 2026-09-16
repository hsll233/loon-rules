// Filter video entries from Xiaohongshu homefeed/trending responses.
// Equivalent intent: .data |= map(select(.type != "video"))

let body = $response.body;

try {
  const obj = JSON.parse(body);
  if (Array.isArray(obj.data)) {
    obj.data = obj.data.filter(item => item && item.type !== "video");
    body = JSON.stringify(obj);
  }
} catch (e) {
  // Keep the original body if the response is not JSON or its structure changed.
}

$done({ body });
