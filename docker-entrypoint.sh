#!/bin/sh
API_URL="${API_URL:-http://backend:8081}"
echo "window.__env = { API_URL: '$API_URL' };" > /usr/share/nginx/html/env.js
exec "$@"
