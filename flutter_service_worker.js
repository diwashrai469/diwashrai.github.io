'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "f7146b73ed2889802792af9d85c2ab53",
"/": "f7146b73ed2889802792af9d85c2ab53",
"main.dart.js": "073fc8aaa4fc3f850b5413a542da8fc8",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "ea48c3d7086d70c0709ef95d3bc6ad53",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "b0d05f4401e29a2555cb0a572c88ffa2",
".git/objects/61/84ea6a6a5e502224cf2ee832824a3b62a3fe04": "b62dbab05b2957a5634202766eefa645",
".git/objects/61/9628b5e8795830485d836db5e5f2dd0c9f43fa": "b830bec654a28d099e5246512c2b7aae",
".git/objects/0d/a1b0d6875aaf6051d7a986631aebeee003da03": "2a423ca42fa317b584b9df4a81182c50",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/92/ea714f032322c18c05252ea888fc7aee7d3028": "0ee2ff1c9c19eada370e8dee23c46332",
".git/objects/68/2cf1c2dc1a4344cc7dfda80586256cf63d0a68": "f267d3cb4f30de3e2ffcb78fcf8aee15",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/69/c8cac678fbeafe065d474fbfdf461bcf7abf8e": "b50c13d1e5df1ccaba09a9177ab7b415",
".git/objects/58/62813c118ec16ecbc06e2671b84738daff5731": "9f83eed8a1782982d25a80723fca75c2",
".git/objects/67/d27457367065f156da0cca27e09910f4e7779b": "a2f85fe8fd4fc42c1e56f20b196acfa1",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/6ab30577565a008f31f3c61032df4799e6f29e": "eadbebc269c2ced234b5f4a8930de0e9",
".git/objects/05/bad284dfde7eeb2be506c867695f2fa37f6360": "42a252f6f69d82b0d53e3ac4b1b598fe",
".git/objects/9c/988592e5220a70d43f02ab9884ff6195c08b67": "b9612d52b4a490e3d6159856cfc4e7f5",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/eb631aa59fe5224e2deb054d694029f7e2ca40": "1d443d600583a5b14bebfa207f00b655",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/4124b214ab33c33b6493fc34351a9ca121a673": "44dc28d2e217968d9c81757f2e1d47f6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/7d/75a114cd6a4a3e9a3569bdd7dfc466b4c2a21c": "13e38f0b77197fbfd8793886f48a4482",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/28/4c4f4f3191fb2b04f289d156f81f51f3ad1887": "e964418d1a06a36560eab9d9755fa8b7",
".git/objects/8a/bbf058852fab3b0c930b7a4aa71eef6ce377e9": "3ad5efa885b4e27946742d3621e5419e",
".git/objects/86/644448c39c0b13ff7cae4dda2c8a49c324afb5": "e328540eb484d99db358e7a9a767b936",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/00/059ec69faced0ea87a923dc6f17e8c02502a49": "35d3793881db857ff2efc9e9e735633c",
".git/objects/36/7d9c33faac4997f6fa71c84e11023a57df3759": "f0c3c94f72e0ec6fee537962e684a800",
".git/objects/96/6e3da186cac7af20f35906c1efb234e424ef21": "00add6779376ffac998c5aef88eaac95",
".git/objects/96/09ccedce21d692d51c335d2718236e08801192": "e7ba74731d438f67d0ffd094f854e0c7",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/52f3042d1eca73eb33ad8ed8210d31acab2390": "1ac83176bed411fd307f62cf787da0d2",
".git/objects/01/ba4c305d1325c3098bc9cedcf3e042a367881c": "4d1e8d2dd64eb3fa50377258deeb14a6",
".git/objects/39/46a4d4344f9b167be788560b5d8f6a2f219065": "b4827dff41f31849b15cc48114155940",
".git/objects/0f/c066ab604cd2d2da50242787437cd050bda454": "9188b7787ae4665e3d91a2dea7f31fbe",
".git/objects/bf/c98fdc062eae555e8c6e001a515a969273f779": "dad3052e1a578ca332671bf3790e71c6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/e7675d0a020bf7e89184b5903b161aeaa4d5e6": "4d2a56497b4d3e3bac6cabb69a40bd81",
".git/objects/a0/3ddc91d3e95c50f7f4dae437379ef77dbe90ae": "3629744ccefb0e747242702f5d095e2e",
".git/objects/a0/2cfd444aff199854971bc1954d904398641c26": "5616a6dedc9447e1e4237e7eab350595",
".git/objects/aa/66c9b16d9f0f1e83688a6b43827613ad1d551a": "3bdc122ef4ef2fc0d9b61e163dce7eec",
".git/objects/af/4b84e581e7fd8d23ac0bd7bf92feffd946b8a4": "d1ed1e389f7f8e2353d29c3741e6769d",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/d1c75dfc1d3e1e6163dea9c1fe129014d59239": "9d6f053bd1af0841025fdb5e61de30d6",
".git/objects/db/21dedee08faa18b4149b19ab5f0ccd40de4566": "dd4f378b895105fd50d5612a678e9c72",
".git/objects/b0/5c6b7097af3da485fa82b2f4548676f8c29062": "4947c9a236bcb4dc5235848ca104a776",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/801d7d37619dfdc9c11c79e9ec0d287a42fa95": "88121834b50152d8f89737cd6acb04a5",
".git/objects/b9/bf3b0ea273e3cd8a7e773a08ca3e17468310e7": "1c412e9dd6dd28446826eea56b429dd3",
".git/objects/c3/090b3d17ec8b53628b053fa9e2b6872750dfb5": "04d8ecd9a3bd67abaaa9cc5b3a85bd7d",
".git/objects/ea/fdefadaa79e78e6a110f7486b3f276a674d6e3": "6293af4da05506c564ee2dde24e8c759",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/d790c40dfcae595ee41feb1e31f76abe583d3d": "7073a93d3f5583541ad6ce145a3be0c2",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/e7/605b02fcf0bb4f1e34aa9effb7faa82bcc1696": "a9967d4baf8ad20f00c432a7c74d068f",
".git/objects/1b/b33bfcd8e3c41165ca12fc3517528fdc9a4319": "761dd570d4adea9d89e3abb1637cbf27",
".git/objects/4a/ac269f74d2512fe5af88f92d66f8e21e6a6e3d": "215878487c02c59f29e8d4142472e03b",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/24/df71036787c6ab7bba9eae39d9c9483caab19f": "16ddf47c86b558bcfaff1f63fde3d40e",
".git/objects/23/2dc8bf73470f0793ea82ac4706ba7a788607b9": "dd3b4571dacb3fd22a7aa79524fc2540",
".git/objects/4f/097fc70cc651b735a272471bb12dbe6cdfa53f": "92a628952f6e051b73ad4eb143a63c11",
".git/objects/85/c5eeb4fe94d91b6cc183fe2115cedcbe7a4bc5": "3b3f78197ae19bb299a586d1c50fc2af",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/49/56fdb43881228075082ce43548a19913015a24": "9a7cf153b7bf7dead83344239bd2bb21",
".git/objects/2b/dbe30d06077262b3aa3231f87ee277d4e99aa1": "fa17ce13f1343387bda6c9fcb1fcc1ff",
".git/objects/47/b5f5862ad5e192df41b3bc877f1cf41eb2dca6": "d99c86ecf50a83acb00e6e215ee0f7bf",
".git/objects/7a/82dc5176e211a019580b4b978961913c820cca": "0621c867ad3ff3705737ed6e754eaf8b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "16a7962ebc00090a10196b1d6f701249",
".git/logs/refs/heads/main": "16a7962ebc00090a10196b1d6f701249",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "8bdecfab6d49323f80a3b45db9485f52",
".git/index": "8ec1cd8b92e094fd68c71572753107fb",
".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
"assets/AssetManifest.json": "1b52fde45c134416b3642b3d200d3e38",
"assets/NOTICES": "2f890299ce0f44bcf4264810342a382f",
"assets/FontManifest.json": "1b26e5063baa9ea55987860e01de4f5a",
"assets/AssetManifest.bin.json": "6b56a67d3a8509ab74a935fdde66664f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c2ed79038fa25d5173c35efd5325968a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "ffbd517fac41dbb65af9ba97a4e2230f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "095960cc92d38f0f74a9f26e25a20a92",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/MaterialIcons-Regular.otf": "61e988325145c9ad06d73d7e362d8cfb",
"assets/assets/dynoteams.png": "cfed7890529711825b200ccc1a3de75e",
"assets/assets/myimage-removebg.png": "aaa0fcd9ebe1033228ed55d4dcab9551",
"assets/assets/crm.png": "a7aa058485126c1aee6ec105fd073b47",
"assets/assets/chibihr.png": "a3c562a8a74e4c97e3ab74c518942aa5",
"assets/assets/tailwind.png": "02d8ac344042438f03d4d6860475fddd",
"assets/assets/flutter.png": "280061a25e491cd2ab4a6ffd889bc66c",
"assets/assets/moury_mobiles.png": "7294a199c70546dc3b7d18b289aaf23c",
"assets/assets/about_me.png": "74d6cd35aa02b93fcffe4e105f02b049",
"assets/assets/github.png": "0b5a08329908daddeca171aa8d85a084",
"assets/assets/crm_front.png": "350bd8557b7ddb54737b0f515f8ecc68",
"assets/assets/firebase.png": "970f12067f61fda90f8aa177b3de9518",
"assets/assets/myimage-removebg.svg": "06a3423d53e692b56c6193bd4374fffd",
"assets/assets/javascript.png": "2834b874e1e8e4d412fa4ef102545d71",
"assets/assets/platform.png": "7924d226bdc28e8ce100a3a305a6d7c5",
"assets/assets/appstore.png": "423917533f94334bc9e50c46cd967d30",
"assets/assets/splashnamewithBackground.png": "02f0aeeb04b6a6d3e3351b32b95e7766",
"assets/assets/myimage.jpg": "b982d6263a85d38bfb4b884e87199d68",
"assets/assets/reactjs.png": "aa1e952e48fac475484fed4fab433c28",
"assets/assets/html.png": "0fb257d1dbd1f8258e6bdca7b02230a8",
"assets/assets/splashnamewithoutbackGround.png": "c46e384cba404483b7bb8dce76ed507e",
"assets/assets/postman.png": "1045eeba915f377a55c258bd1c1e6aba",
"assets/assets/playstore.png": "5b7057a8210224461e0c304b35d47652",
"assets/assets/imageLotti.json": "5d1edcd8589d1f13b70ca73b6207b01c",
"assets/assets/css.png": "1fcf13fa04009c29fcc43eb54e157cd6",
"assets/assets/myskilllotti.json": "b0a35f0414c533421d490c20335f7b53",
"assets/assets/dart.png": "9f161049a8023b9cbb5c374c51be1534",
"assets/assets/moury_mobile.png": "61d02e6fa1b5c9cdc144620a4e198d57",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
