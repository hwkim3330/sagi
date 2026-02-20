// No-op service worker — replaced COI headers version
// This file exists so the browser can update the old SW to this harmless version
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
