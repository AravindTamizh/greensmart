'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "2ce1626cd12fe1b6ae721ed51391bef5",
"assets/AssetManifest.smcbin": "be6964033f51e013e7bd2ec8b90ac535",
"assets/assets/gif/admin.gif": "2ce859aab716ea046fb7e49bc0d57e6e",
"assets/assets/gif/animatedLogin.gif": "06ea23d3c420a00ea99ccf6ef6c4978a",
"assets/assets/gif/animatedLogin1.gif": "a0e2780971735ca873f79950cad129b9",
"assets/assets/gif/erpSolutionsHOme.gif": "f9051d0645f06b0410284eebd2758e5a",
"assets/assets/gif/home.gif": "d3ffe18829f96a8116b54d3ba04fb49e",
"assets/assets/gif/login.gif": "ebaf1a9b47dfe306a989b17cb6034d44",
"assets/assets/gif/notification.gif": "264f9bf34cbd753528e4a2ba6e58b48b",
"assets/assets/gif/success.gif": "ad56fb628a38435f7ccf8776c47b796d",
"assets/assets/gif/trialImage.gif": "8b603fd22787ab583b6124c32de9ad3c",
"assets/assets/gif/waterdrope.gif": "1526630a6d06da770818851d07ba3dc3",
"assets/assets/gif/water_drope_slow.gif": "1586f0e38f771c5742608b01c5ef8250",
"assets/assets/gif/water_gif.gif": "981572617a1436ecbd91801613823681",
"assets/assets/gif/water_new.gif": "852cb4105ebb7b897dda32a2bed4a316",
"assets/assets/gif/water_test.gif": "618daa53fd98236c0016de33c413dc0c",
"assets/assets/images/borweller_white_logo.png": "c224ad3d80d50f383369e5213b52d143",
"assets/assets/images/cakeimage.png": "bedbe9ad4e3d51b74ac53b9ef8579e77",
"assets/assets/images/cardBackground.png": "59e34498133f1e414315a02af4998241",
"assets/assets/images/centered_logo.png": "ed262c30dd756d6b1f6c05772a9f95dc",
"assets/assets/images/chakra_inner.png": "955d45321962bce496732777a57cee7b",
"assets/assets/images/chakra_outer.png": "1f862552d47150a40a20e21278e8c4e0",
"assets/assets/images/clockwise_image.png": "f5d430fa7a036d7166d5f55ab9f17abc",
"assets/assets/images/design_background.png": "120f249763458dfb9ffdbcf14662361c",
"assets/assets/images/expiredImage.png": "78dc6aaafc054536771462da31c01e00",
"assets/assets/images/girlprofile.jpg": "553ac870900418714882d835f291917b",
"assets/assets/images/gross_weight.png": "0dcd9e490be77e2cdb0cf5e2a679264d",
"assets/assets/images/inside_clockwise.png": "48633c4c5e5b3608f6b17b9a33b7e76b",
"assets/assets/images/inside_logo.png": "6209bf5ee7b1aa26defa4a34a360e726",
"assets/assets/images/loginBack.jpg": "d53dfbb807684546fbf5b316ffdae833",
"assets/assets/images/login_background.png": "b0389eb6d89b9b5bd2f58a6e0de359e2",
"assets/assets/images/logo.png": "8a8a2dc7af405c71126a392914366893",
"assets/assets/images/logoimg.png": "0dd3bf9a3bb2f17e8f4d43f4413ae4e0",
"assets/assets/images/logo_inner.png": "f3bc50717ea9fa8cba0fb5f3fbc692e3",
"assets/assets/images/map.png": "155e198c24cd6971b2ec510d1883870c",
"assets/assets/images/nextvee.png": "2684ba2be8d2d2ec302b07bdd693e133",
"assets/assets/images/nextvee_favicon.png": "48fcb12997c1a89454e7f31f8ea421c0",
"assets/assets/images/no_slot.png": "d1408bb2d686c32baa8df8dd6d277122",
"assets/assets/images/profilepick.png": "29479ba0435741580ca9f4a467be6207",
"assets/assets/images/smallLogo.png": "ef375372670d265c4041410652655e24",
"assets/assets/images/splash_background.png": "a1c8445563bebf8306a6b9f9ea9b3357",
"assets/assets/images/tare_weight.png": "2e227df90a7de9b69ebe9604f77c5893",
"assets/assets/images/tea_background.jpg": "67d23e50a93870a5faf589cc69dec747",
"assets/assets/images/total_weight.png": "1165c4059fb585b180f2d35458317e80",
"assets/assets/images/typing.mp4": "fcaccf234452f9258cd14dc892d7042f",
"assets/assets/images/water_weight.png": "5b528821e89f9ed60d62b54d43e85e13",
"assets/assets/images/wave.png": "49a7756bebb098d38fba3ba568ec07f7",
"assets/assets/svgs/404.svg": "fcd3ecfa458901976a0174c9ab5454e8",
"assets/assets/svgs/500.svg": "ec85f13d02e873c0a5ce8470ad301217",
"assets/assets/svgs/appointment.svg": "0d9776e8ac5e052c42840927a9d710f6",
"assets/assets/svgs/az.svg": "d68b7cd1e638bb161a8c96e1b14981e3",
"assets/assets/svgs/completed.svg": "b66c9bf25128de35106b629d063768db",
"assets/assets/svgs/config.svg": "977f48adfd9fb26ab29167f3d87aed30",
"assets/assets/svgs/creat.svg": "e253c7e86e87b8d3dca191f90486b940",
"assets/assets/svgs/hamburger.svg": "72f776f47c4155c7b789111b2163eb90",
"assets/assets/svgs/home.svg": "89aeb9f804d2f47197d43846ca7d4ea5",
"assets/assets/svgs/login.svg": "fb17c84def8512b8c32eda7a60f81df8",
"assets/assets/svgs/menu.svg": "d068f68d45e3695bd855522b34ba7495",
"assets/assets/svgs/notification.svg": "00b88441f490491b3079d7d13174854c",
"assets/assets/svgs/no_astro.svg": "c28389356403259470a1a1c873abf132",
"assets/assets/svgs/no_data.svg": "891398da3f3c92e22c6ad38e2502dfa0",
"assets/assets/svgs/payout.svg": "500f401cdea298ba1d975828c5fe41dc",
"assets/assets/svgs/payroll.svg": "21c1a79bfaa6a5a6132009f0280fa870",
"assets/assets/svgs/schedule.svg": "22709f708a2679d283d8b08c89cab167",
"assets/assets/svgs/search.svg": "43f97d9a3f89b916c00e52993c685b2c",
"assets/assets/svgs/slot.svg": "c6ed2797d7cd4e64a99d3879f4dbbd08",
"assets/assets/svgs/tick.svg": "f7eba197ae14dac5bdb1eb4e51593175",
"assets/FontManifest.json": "e024588c84b5d20cb7869d6f908130e8",
"assets/fonts/MaterialIcons-Regular.otf": "018e3d469bb6e7f90190998bcce99427",
"assets/NOTICES": "6bcff86abdb14b98583edaec62043d6e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4d726b473b40e32ddc8f7b0318831529",
"/": "4d726b473b40e32ddc8f7b0318831529",
"main.dart.js": "dca6094a1bd2b1b9dbe0aace549124e2",
"manifest.json": "cf6f528d70a1a3e2913f643e200a57ed",
"version.json": "5759327530613eb34b69857da056b26c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
