'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7bbffbc61d6e9cc6eedc99a1e92cf853",
"version.json": "d725723ad34fa583fee029f8ad46721f",
"splash/img/light-2x.png": "a318ace9a5e5311ffa8ec95f2577fcea",
"splash/img/dark-4x.png": "d850888160c9eaa7105467496f7999ef",
"splash/img/light-3x.png": "0a3bfa2dc3a3603545505f61119eb8ec",
"splash/img/dark-3x.png": "0a3bfa2dc3a3603545505f61119eb8ec",
"splash/img/light-4x.png": "d850888160c9eaa7105467496f7999ef",
"splash/img/dark-2x.png": "a318ace9a5e5311ffa8ec95f2577fcea",
"splash/img/dark-1x.png": "fefde95b62cd1742ba8867eca596dce5",
"splash/img/light-1x.png": "fefde95b62cd1742ba8867eca596dce5",
"index.html": "6cc77f0e46321d5dd3f1e6b3658596e1",
"/": "6cc77f0e46321d5dd3f1e6b3658596e1",
"main.dart.js": "9a27ef49524d9814f9c87daedfd4eac0",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "39bbbf13753de289d79939a7603da9ce",
"icons/Icon-192.png": "ea1bc6b78746610654a0e8ecb1614a92",
"icons/Icon-maskable-192.png": "ea1bc6b78746610654a0e8ecb1614a92",
"icons/Icon-maskable-512.png": "d57c43e5271b60c154006f6ab590c067",
"icons/Icon-512.png": "d57c43e5271b60c154006f6ab590c067",
"manifest.json": "41123e61751a8407492707a10d73f645",
"assets/AssetManifest.json": "7a925d99ee00d9a0495edb7fa49c45d2",
"assets/NOTICES": "dec8d2aba5f5a8435587cda498f7b986",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "ec0c0b7c512758a5ba2e67ac0691281c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "91f8f99d008a28beb83bff0735234f2a",
"assets/fonts/MaterialIcons-Regular.otf": "1e48b47984e4a943f64497728381aebf",
"assets/assets/images/icon-background-1024x1024.png": "0fef144003e19e83e9e5e88f8cffa4bb",
"assets/assets/images/icon-foreground-1024x1024.png": "f7b289b77e8e95df39348c9136db0e05",
"assets/assets/images/loading_check_dui.png": "51c238e2a501a186e8031f5774adb908",
"assets/assets/images/guide_kuang_bg.png": "9e6f9feb523a3f1315397351a2c234fb",
"assets/assets/images/loading_tip_bg.png": "b3b1733be87bef685b841b636b8291b8",
"assets/assets/images/guide_select_dian.png": "3acc7da82050263e94475965266d96f0",
"assets/assets/images/daily_orage_bg.png": "b63bc9dd37ab62f743a7795304acf730",
"assets/assets/images/guide_san_jiao.png": "fa1467ec9a0a078171e08276b7004928",
"assets/assets/images/org.svg": "30ecfb82fd8bef385ac562e4e443fe82",
"assets/assets/images/icon-1024x1024.png": "873782e3099f12760af189307f031409",
"assets/assets/images/guide_shou.png": "836818624287e75e993196c341098b05",
"assets/assets/images/daily_popup.png": "280e8ae2545f78f5696011674abd92d0",
"assets/assets/images/guide_xian_duan.png": "d85f56e978bdbc4edbe9d79059eec71a",
"assets/assets/images/loading_input_bg.png": "170dd2f2a8c827dcb7669e774d779c11",
"assets/assets/images/loading_checkbox.png": "ce1a878f60012303f1659ff398ecc6cd",
"assets/assets/images/loading_you_ke.png": "769898b0dc4b9d33174facde4db40aad",
"assets/assets/images/home_xian.png": "fe22334c76784ff1f6720599b80f70bf",
"assets/assets/images/home_logo.png": "8029f9cf539b199c837ea18dc1e1ac04",
"assets/assets/images/loading_tip_icon.png": "f1810ea0264cc4a4af2dd05d833effcd",
"assets/assets/images/icon-borderless-1024x1024.png": "2710edda50e719696e9536ee3f18baa1",
"assets/assets/images/loading_intput_password_zheng_yan.png": "5648e45d737c480ecbd6391851329466",
"assets/assets/images/home_challenge.png": "16e785980f7b4357dbb6ab6f532f3170",
"assets/assets/images/loading_input_password_yan.png": "55d1f746d0fdc8d66273c3490b353643",
"assets/assets/images/home_leaderboard.png": "50f06e6e1df51e7a0491a8f8998521eb",
"assets/assets/images/home_bottom_kuang.png": "eef7f17092dc7aacd6e9e64463295f72",
"assets/assets/images/home_daily.png": "ac6e1c68b9508d8a155f55929614ad79",
"assets/assets/images/daily_blue_bg.png": "2b70669e3b606bc5b3ebb236d43aa250",
"assets/assets/images/guide_xian_chang.png": "3e720a6c91260ba794662a813655e4a1",
"assets/assets/images/home_setting.png": "aa6c234c19646f5c5186de9e8e801779",
"assets/assets/images/loading_button_blue_bg.png": "8971e65d668d32a5cacc863e5986e02c",
"assets/assets/images/input_close.png": "2caa46ed833640ac578b2e9445ee55f2",
"assets/assets/images/loading_center.png": "3ba69cef4923ce8aa1de17fb576a167c",
"assets/assets/images/close.png": "a560d7d4f93ade4f016aacfd69840769",
"assets/assets/images/home_head.png": "5285409db54a8b0d7c3afc7ab3707f61",
"assets/assets/dictionary/ru.json": "39e71fcdab498a7b7a822237655ca262",
"assets/assets/dictionary/en.json": "2b2c5bcda77c753aee7276a01b797098",
"assets/assets/fonts/Nunito-Medium.ttf": "d26cecc95cdc8327b337357e6c5c1f5b",
"assets/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/assets/fonts/Nunito-ExtraBold.ttf": "5b5a206f5cd32fa496c93925d0caf609",
"assets/assets/fonts/Nunito-Regular.ttf": "b83ce9c59c73ade26bb7871143fd76bb",
"assets/assets/fonts/Nunito-Bold.ttf": "ba43cdecf9625c0dcec567ba29555e15",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
