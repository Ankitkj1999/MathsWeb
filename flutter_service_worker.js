'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7d0c482c8996a6fdfd49a1c0d436a370",
"assets/assets/images/addition.png": "2597057d723f8e627b38cfd9db066a2f",
"assets/assets/images/addition_subtraction.png": "578086a667f4f32fa7f9736ec17e324f",
"assets/assets/images/audience.png": "b4f5e8c8f01b4ccf68deb436f55f8602",
"assets/assets/images/boxing_gloves.png": "81f1b75076fcabb19f468a36c5188e0e",
"assets/assets/images/checkmark.png": "5a9a40b64e587b2fa75c8b9959d54f6c",
"assets/assets/images/coin.png": "c9192b7bcf655546c068de869212fd8d",
"assets/assets/images/coins_home.png": "67c8531eaede8c374036acad80e6af09",
"assets/assets/images/coins_home_old.png": "8c911f33cbffbffd15610a87772dae24",
"assets/assets/images/coin_black_home.png": "88fdc531d58ce08c4a1e0d5cf8a110f0",
"assets/assets/images/coin_home.png": "67c8531eaede8c374036acad80e6af09",
"assets/assets/images/cube.png": "46680468a12f4cfb25fdc7dd22a1bf37",
"assets/assets/images/cube_root.png": "2cf347d05bb5d16dca55373c09e33e92",
"assets/assets/images/division.png": "7bc998268abebf1de9217cacfc650881",
"assets/assets/images/drawer_icon.png": "6508b96698b8e4e1b7edb043cfac1bf4",
"assets/assets/images/dual.png": "c86a639e25ab386e30c93e108d66fc13",
"assets/assets/images/factorial.png": "38a7e705b5db4418b6e524730e3cd6a3",
"assets/assets/images/fify.png": "a366eca5e306c8f33ef288c41b13d014",
"assets/assets/images/info.png": "52668ab469cc76c2c585ae968e4b117c",
"assets/assets/images/input.png": "905c8e3c133f0443e33768b43e68f42b",
"assets/assets/images/learn.png": "f23a96749823b614a3de349fce6d1490",
"assets/assets/images/missing.png": "9ea3afe08ed0f61c9da8ffc994b2a99f",
"assets/assets/images/mix.png": "9feac1a5a19d6c894233ea108030a753",
"assets/assets/images/multiplication.png": "873a5763ed7f2f34bc46b89b74f1018a",
"assets/assets/images/notification.png": "f2634b392b6edf67b8d7f373d23b482a",
"assets/assets/images/option.png": "fbfd74970122a05409914b69f2b451fa",
"assets/assets/images/pause.png": "b2ed73067ab81bf5117adde3b6fc6641",
"assets/assets/images/quiz.png": "3d27d8b7b1a01026eba78a04853152d0",
"assets/assets/images/right.png": "fe422974ec389521f3091bd01a89f64b",
"assets/assets/images/speed.png": "3306dbdad9ff05a8163bc6eb14bb86a2",
"assets/assets/images/square.png": "5c0a3dac3e4ecf30592c6c63a107d0d3",
"assets/assets/images/square_root.png": "28c50a9af5b6ede7ade136622d51a31c",
"assets/assets/images/stopwatch.png": "94d7c6af52cb58085c82b47c51dc7821",
"assets/assets/images/subtraction.png": "7fd4a8350870a55d6693adedd69052fc",
"assets/assets/images/timer.png": "ffec826ba3b9c0e3090438b76613b664",
"assets/assets/images/true_false.png": "baa4c5b0a4c5562ac9179fbaeefdccca",
"assets/assets/images/video_icon.png": "d55e4f52b4064d0baa299143e1f56d4f",
"assets/assets/images/winner.png": "6c75b9d2541066311c8b0f50c4a09219",
"assets/assets/images/wrong.mp3": "07ee0261fed5bd9c86f0507ce9f34bee",
"assets/assets/images/wrong.png": "48d30e0e24f758ad3fa45ea142d821bf",
"assets/assets/MathsLearn.db": "4237ac84a379d0cd845dce4d16f016aa",
"assets/assets/right.mp3": "2dcbd2729b17587f832b91d2cc491284",
"assets/assets/tack_voice.mp3": "e182776a59c05013c34992bd70079ecc",
"assets/assets/wrong.mp3": "ba8d86f4ddecf5bff44cf6f737dc82ab",
"assets/FontManifest.json": "481f6e97f5fa5471ac561999ee82bce7",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/SFProText-Bold.otf": "5b6c7cdfe0acd0fcc93cef7984a08740",
"assets/fonts/SFProText-Medium.otf": "9491854a8b6ec3a0c915668083f18fde",
"assets/fonts/SFProText-Regular.otf": "404e4373cba1344d28a4a257152ac8b8",
"assets/NOTICES": "65fe70b395839dfc98c64a8d1c62604c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/sn_progress_dialog/assets/completed.png": "4f4ec717f6bb773c80db76261bb367c3",
"assets/packages/sn_progress_dialog/example/assets/completed.png": "3e65bf4ed5f8b0f808b57fecdb26b7d1",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fcfcf4a697f9a7232464ada40c695e7f",
"/": "fcfcf4a697f9a7232464ada40c695e7f",
"main.dart.js": "497cbeece3f222be53786245e12854d1",
"manifest.json": "47213a2fa48c5736898135fa5f4b97fb",
"version.json": "e9f7c3c2ddb9f9e688ab233b4950cd3f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
