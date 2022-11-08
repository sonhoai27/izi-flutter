'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "81370bd491dee2cdb18b5b02b7bf2f98",
"index.html": "4277a760fe26394f247da06770dcee54",
"/": "4277a760fe26394f247da06770dcee54",
"main.dart.js": "e8c25835908870bd2f46ad958d2bf2d2",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e20809ecb729d9661b4d3fd7b2fed720",
"assets/resources/lang/en.json": "aef4579cb8a0863ac31624c699778417",
"assets/resources/lang/vi.json": "06b9341598299db747a94ab21f438e00",
"assets/AssetManifest.json": "7bdb89665390b3a6c3bef6d2fe4fda7d",
"assets/NOTICES": "33a45a53e271343710626f218c331e75",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "0f6992fd046a31956213f0b99d7fe099",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/smoke_explosin.png": "555a8a42b72e662af232dc2092103c2a",
"assets/assets/images/tiled/Map%2520category%25203_new3.tmx": "59de4155f1f8f1efe8c1a0f2f55b7ddb",
"assets/assets/images/tiled/TilesetHouse%25202.tsx": "d92311484683196f6d2e8f3664310e65",
"assets/assets/images/tiled/Houses.tsx": "973c76d29ade8b7bfec44703c3ff0088",
"assets/assets/images/tiled/TilesetWallSimple.tsx": "4f9fb6b4f28e86c7106f9b845b123a13",
"assets/assets/images/tiled/Map%2520interior.tmx": "9e9b7a7d2d7ba56615287d98b9a91af4",
"assets/assets/images/tiled/TilesetNature%25202.png": "abf5c3f529033b24f102007ffe9a7ee5",
"assets/assets/images/tiled/tile_set.png": "ee2500bc8bfdbfab012db5018b3969e2",
"assets/assets/images/tiled/Category%25204.tmx": "c539098c02f77cb7fc5b74e2868f4862",
"assets/assets/images/tiled/Map%2520category%25202_new1.tmx": "f08de98ce28486b59ba8a2b10263bd40",
"assets/assets/images/tiled/Map%2520category%25203_new.tmx": "347736b4c2af23f912b199b07671e9ee",
"assets/assets/images/tiled/TilesetNature.png": "304cab91d061dc49086ba698b85780ad",
"assets/assets/images/tiled/TilesetWallSimple.png": "a088c263f70a1ce0e4d5c73aa6a62d1f",
"assets/assets/images/tiled/TilesetHouse%25202.png": "62d1d963bc802f3cff4bf7b3ed61ea16",
"assets/assets/images/tiled/Map%2520category%25202_new.tmx": "d65b811b37d246b842fa3dcace98d98e",
"assets/assets/images/tiled/Map%2520category%25201_ver6.tmx": "1257e95920c715c278007eb1256917f4",
"assets/assets/images/tiled/Map%2520category%25201_ver4.tmx": "014d0b77d981181cf3b0d30044ecc864",
"assets/assets/images/tiled/TilesetNature.tsx": "993a964684e2803594dae44574b6eb88",
"assets/assets/images/tiled/TilesetFloorDetail.json": "e458ea16076046433fa4a7bc0162dfa7",
"assets/assets/images/tiled/TilesetNature%25202.tsx": "ee818a6a035c4340a08c9d35abf36327",
"assets/assets/images/tiled/Map%2520category%25205_new5.tmx": "7a26f4d49aaa1c54c2dc49e2a2346fe9",
"assets/assets/images/tiled/TilesetElement.png": "ab1df74ec83d4deec6634f6d5971f19f",
"assets/assets/images/tiled/Map%2520Category%25204_new4.tmx": "253f3135f8f8f1dc2f5c670f2dc2a28e",
"assets/assets/images/tiled/Bang%2520logo.png": "240794dde6c1114b53e47c78a396df38",
"assets/assets/images/tiled/TilesetHouse.tsx": "e996743c92344446eed463e319164a44",
"assets/assets/images/tiled/TilesetFloor2.json": "4a03c1ff571540675a580ce688f2fec9",
"assets/assets/images/tiled/TilesetHouse%25202.json": "a8d0c193488ce7465d55cae4f1b8d157",
"assets/assets/images/tiled/Bang%2520logo.tsx": "c175087da5cc0abdcce24a62466e7e38",
"assets/assets/images/tiled/TilesetElement.json": "b7c1c208b39beaba4b6a5c1cbcf57510",
"assets/assets/images/tiled/TilesetElement.tsx": "93a842f528814c9d9ef1a0fec7a18608",
"assets/assets/images/tiled/Map%2520turnip_new.tmx": "51c2c59c9707dcdabed0ad67bebb7487",
"assets/assets/images/tiled/tileSet.json": "9facbfcc6501b75e510defc058fe1797",
"assets/assets/images/tiled/TilesetWallSimple.json": "f24dd81af5f623a7969c5115eeec2d98",
"assets/assets/images/tiled/TilesetInteriorFloor.json": "6717afc74fb9907587aa94e2f3aca31b",
"assets/assets/images/tiled/TilesetReliefDetail.json": "abbafa8af340abdb2a02e08f0de3cc5c",
"assets/assets/images/tiled/TilesetNature.json": "339d93d5b41a28fce5afd504a1651373",
"assets/assets/images/tiled/TilesetHouse.png": "71008de19d672ecc9ba4803dc24ff452",
"assets/assets/images/tiled/Map%2520category%25201_new.tmx": "d1d5af9674e59f6221ec9fa531628f03",
"assets/assets/images/tiled/map_home.json": "d4d101f766c5b6c33c0dd2047bef7a61",
"assets/assets/images/tiled/Map%2520category%25202_ver4.tmx": "367121293ef00d475e22ca631b1d672e",
"assets/assets/images/tiled/Map%2520Category%25204_new.tmx": "0a313d09691ac09ea11304bf643926c3",
"assets/assets/images/tiled/Map%2520turnip_ver6.tmx": "f5d541ea92f023fde4755421c9e2bf28",
"assets/assets/images/tiled/tree.tsx": "a7a6cc3815924c5eb96f6867b22c06fe",
"assets/assets/images/tiled/TilesetWater.tsx": "fb6d68b41fa3aabc0e432460f004ba5c",
"assets/assets/images/tiled/TilesetNature%25202.json": "9e5373495a91431ae44a6b95a907cfd2",
"assets/assets/images/tiled/TilesetFloor.json": "aa454e0863d38facd6fafdc95de8f505",
"assets/assets/images/tiled/TilesetFloorDetail.png": "ccb85188c30e8ebc466b7f7c4101b0ed",
"assets/assets/images/tiled/TilesetHouse.json": "2f1a9c6c3ea71f27aa66ce4028cf99de",
"assets/assets/images/tiled/zeldatrees1.json": "e6080a409a5eb5dc392c8122a91505ec",
"assets/assets/images/tiled/TilesetFloor.tsx": "541fd3ba1f73236c4097462b782a22f7",
"assets/assets/images/tiled/Map%2520turnip_ver4.tmx": "d98fb998f76be15a6755c5ae88f3cc18",
"assets/assets/images/tiled/Map%2520category%25202_ver6.tmx": "e3708983800cb199bba9ebcb636e179c",
"assets/assets/images/tiled/TilesetWater.png": "374601fa8c46ea01bfdaf9bb5664f00c",
"assets/assets/images/tiled/TilesetRelief.json": "346ec84e5984e225413567ce29cacf41",
"assets/assets/images/tiled/Map%2520category%25205_new.tmx": "73781db240c6f34b84ee9ab8cef3057e",
"assets/assets/images/tiled/TilesetFloor2.tsx": "f34d20293e1ee5d023f1fd18c2fdc82e",
"assets/assets/images/tiled/TilesetFloor.png": "e255465c923258e5485487a32b6faf2e",
"assets/assets/images/tiled/Map%2520turnip_old.tmx": "63b88e75a240fa1d2621c33015007c40",
"assets/assets/images/tiled/new_tree.png": "d4da66a2a14a0a6764bf94ae1df86415",
"assets/assets/images/tiled/TilesetFloorDetail.tsx": "bca268010b1c31b65f24e54cf30e8a07",
"assets/assets/images/tiled/Map%2520interior%2520new.tmx": "cf13cd585327abd002f14e31214be86a",
"assets/assets/images/tiled/TilesetReliefDetail.tsx": "12afe562b7f7235c726bcd3e735bacd1",
"assets/assets/images/tiled/zeldatrees_green2.json": "d65b3f77683c04cc745adc49e09513df",
"assets/assets/images/tiled/Map%2520category%25201.tmx": "82d1b678348271196f621c6e8737550c",
"assets/assets/images/tiled/zeldatrees1.tsx": "f8557f7c40f766af267106fb8de4e9bd",
"assets/assets/images/tiled/Map%2520category%25203.tmx": "894cfbe16e98678ecef8c145baf019a6",
"assets/assets/images/tiled/zeldatrees_green.png": "f0a1b105ebefd58388a2c4d42f51f99f",
"assets/assets/images/tiled/zeldatrees_green.json": "6fbd4574d3b40d1b1bf17fee1d79cca4",
"assets/assets/images/tiled/TilesetWater.json": "51393805fa0421803a5e52ac815b93dd",
"assets/assets/images/tiled/Map%2520turnip.tmx": "276f3df0482dafccc9a9f520f79a4ca5",
"assets/assets/images/tiled/Overworld.png": "d38acfe461888720759655f49cc1c6bf",
"assets/assets/images/tiled/TilesetInteriorFloor.png": "177e37f4c3cf553b2c525072d5b160d4",
"assets/assets/images/tiled/Map%2520category%25202.tmx": "ae396311b5e01cd518ad404e13ca8da1",
"assets/assets/images/tiled/TilesetRelief.tsx": "0dde5366802166792fd350229433e541",
"assets/assets/images/tiled/Map%2520category%25206_new6.tmx": "35c2fadd10446d0e4bed90a3d46bebb7",
"assets/assets/images/tiled/Map%2520category%25205_ver4.tmx": "a31f6ceddb862ff2582f7fa658732342",
"assets/assets/images/tiled/Map%2520category%25206.tmx": "0df403948277c33a22ac9c7129864eef",
"assets/assets/images/tiled/Map%2520demo.tmx": "c32ade900fea5d53721d378f9b0655e4",
"assets/assets/images/tiled/Map%2520category%25206_new.tmx": "5fa0f6c1368ac8a13bc24513a0292fb6",
"assets/assets/images/tiled/zeldatrees.png": "277f81e54e6d3811f692d8df573e06ef",
"assets/assets/images/tiled/map.json": "ba844b1df694159dda29388afd596da1",
"assets/assets/images/tiled/zeldatrees_green2.tsx": "890861c74a71ac205ad7b6a57b391669",
"assets/assets/images/tiled/TilesetReliefDetail.png": "2d075348f9ca78fc76db15255a0e7114",
"assets/assets/images/tiled/TilesetRelief.png": "6ebac2a6cfd81ee826c07c80e455f442",
"assets/assets/images/tiled/tree.json": "f9f59efcd85c69118f46b87978f99b49",
"assets/assets/images/tiled/Map%2520category%25205.tmx": "18ed28ec14578ca1f71386fa31ae3eab",
"assets/assets/images/tiled/TilesetInteriorFloor.tsx": "4d9d5d19de4e9f05d66c10b8ee50ffa7",
"assets/assets/images/tiled/Overworld.tsx": "8c8f239b07cfe14da26c3b740c79e3f6",
"assets/assets/images/tiled/zeldatrees_green.tsx": "e9fbb30d54f19106262504886f38cfcf",
"assets/assets/images/tiled/Map%2520category%25205_ver6.tmx": "5c78578b62c082f92b4a85dc2206d6ec",
"assets/assets/images/joystick_background.png": "2eef7b32e484d81f07eeb405b39c83a4",
"assets/assets/images/keyboard_tip.png": "3cb49ccd23380c09b95e1784d6c5b837",
"assets/assets/images/emote/emote_interregacao.png": "9afe746a2fdb43b7d126270712911544",
"assets/assets/images/emote/emote_dots.png": "be3fbdff0238dc988be233225c230e75",
"assets/assets/images/emote/emote_love.png": "16913278e27883e8075a9b58af09e5f0",
"assets/assets/images/emote/emote_exclamacao.png": "8b1897ae92f3a077e0aadaef2626d65a",
"assets/assets/images/joystick_atack.png": "a525ebd6bd0a9014c513884b7811f019",
"assets/assets/images/health_ui.png": "219e39516312f2f6bc264357497b99cb",
"assets/assets/images/enemy/imp/imp_run_right.png": "c309ba53677834ee89b49b2ca809f19a",
"assets/assets/images/enemy/imp/imp_idle.png": "fd0a267c699d58df27658a67a1df9c98",
"assets/assets/images/enemy/imp/imp_run_left.png": "f92f71d23122eea1b6de55830f2f5dcc",
"assets/assets/images/enemy/imp/imp_idle_left.png": "6f2711ec02e91aeec1e74c0d0978c117",
"assets/assets/images/enemy/atack_effect_top.png": "df3eeb246450bf06de6dfc325d0bdbd0",
"assets/assets/images/enemy/goblin/goblin_run_right.png": "565c2f9a0bb01a9c56975664f8cd375c",
"assets/assets/images/enemy/goblin/goblin_run_left.png": "05863189b562610b17a062114c7849a9",
"assets/assets/images/enemy/goblin/goblin_idle.png": "8c97e935786b994c3cff4008212381b9",
"assets/assets/images/enemy/goblin/goblin_idle_left.png": "a7563675f85ed259b2d0aae50ded196b",
"assets/assets/images/enemy/atack_effect_left.png": "9c99ad913fcc75ce253f8db53faa846f",
"assets/assets/images/enemy/atack_effect_bottom.png": "aaeb1a8e791a0f15ba911e1d2540ab32",
"assets/assets/images/enemy/boss/boss_run_left.png": "ed663ba496619ace977619bacf9ba60b",
"assets/assets/images/enemy/boss/boss_idle_left.png": "2c676458b5c2c1f4c835d3a29bceeb4f",
"assets/assets/images/enemy/boss/boss_run_right.png": "e7509da7b9d5aa375ec12c916c6731bc",
"assets/assets/images/enemy/boss/boss_idle.png": "f722e5ea7c26f7613b885c0421a1922d",
"assets/assets/images/enemy/atack_effect_right.png": "15831f9ccee22a845e854ccb3d18f6e5",
"assets/assets/images/enemy/mini_boss/mini_boss_run_right.png": "0c646c8bd124d0ccb516160a34442f53",
"assets/assets/images/enemy/mini_boss/mini_boss_idle.png": "c209ff336493312f3ac00bf473b9f059",
"assets/assets/images/enemy/mini_boss/mini_boss_idle_left.png": "bb3328289e788dc55212923e8636bcc6",
"assets/assets/images/enemy/mini_boss/mini_boss_run_left.png": "f3ad68ec82c01c8c637594eee1410dcf",
"assets/assets/images/enemy/smile/slime_run_right.png": "0e4ab1eddf11f37ba40603c5a5beda89",
"assets/assets/images/enemy/smile/slime_idle.png": "f22a626f3261287a268bd95857fc0ed4",
"assets/assets/images/logo.png": "b3f2781dd2622e938cc9ee0bad39f89f",
"assets/assets/images/joystick_atack_selected.png": "5196050c562862a670e7757392710c4d",
"assets/assets/images/crypt.png": "8e55febc1e2563a9d7ba4b48625ba88d",
"assets/assets/images/items/bomb_anim_spritesheet.png": "da3b744bbf6d70d8d82c717ca7bf0078",
"assets/assets/images/items/stair_nextlevel.png": "779e0df7810b0e8b4fdbf49ab3aab96b",
"assets/assets/images/items/potion_red.png": "49cc98d9207a350b8266765ee890d09e",
"assets/assets/images/items/door_closed.png": "c6ede55672762276cc71eca8cfe8a3e9",
"assets/assets/images/items/key_silver.png": "7a3dc96e5dfb0e5000bad51da22e9fa7",
"assets/assets/images/items/torch_spritesheet.png": "858f57abd642f0303de50d719532f198",
"assets/assets/images/items/door_open.png": "430f6d0439652b87ce68ed84af5fb8c7",
"assets/assets/images/items/tree.png": "373b98c4cf13e3eba31aeb556e10d8d9",
"assets/assets/images/items/spikes.png": "17b9e2041471cf40cc10cf4357e33bed",
"assets/assets/images/items/chest_spritesheet.png": "bcc8785d27d816e23eca114dd4e708ed",
"assets/assets/images/items/chat.png": "6106a1dbb4c750b081b93a04256f183a",
"assets/assets/images/joystick_atack_range.png": "ff4ce744c80e383080ad2316ba0a9b9b",
"assets/assets/images/logo.svg": "45b30ce544fd32d09e679acee8a8b4c8",
"assets/assets/images/joystick_atack_range_selected.png": "06f85cdc0deaf633e544f0ad9f0c75f8",
"assets/assets/images/explosion.png": "6969a53851107eb6c133a49cddbad3c3",
"assets/assets/images/npc/wizard.png": "a8b090d2853a2035fc48c9fd78ca9a71",
"assets/assets/images/npc/kid_idle_left.png": "de8286bb5fe4f2284391197ceaef0361",
"assets/assets/images/npc/wizard_idle_left.png": "d007579b66fc0760964f6e894ab245ab",
"assets/assets/images/npc/li_idle.png": "3292a908db7cc5557589fb0b5f2aca00",
"assets/assets/images/npc/kid_idle_right.png": "43e730b096bc0165a0ac3fa87e42e61f",
"assets/assets/images/joystick_knob.png": "c088b1ce385c20537c22dc2d4d39245a",
"assets/assets/images/player/knight_idle_left.png": "e4ddca181210b0cf9555331aaf2af512",
"assets/assets/images/player/fireball_top.png": "e9a76f3ea950d6bc22f8f4cd3a22d7e3",
"assets/assets/images/player/knight_run_left.png": "ce9f3ad71135b459f6b66c892b5b9e30",
"assets/assets/images/player/explosion_fire.png": "81a3691935a18a30572870b759ad1683",
"assets/assets/images/player/atack_effect_top.png": "7b01845d595c3803a07567ee87710658",
"assets/assets/images/player/atack_effect_left.png": "5b5475da758d76f79c34429f70f7f6af",
"assets/assets/images/player/atack_effect_bottom.png": "e2406062be291971a034123fdd1757f9",
"assets/assets/images/player/fireball_right.png": "aaa2c18fe241c16e95be131619693b80",
"assets/assets/images/player/fireball_left.png": "cb3370c9039ec112af7bee6edf3e342d",
"assets/assets/images/player/atack_effect_right.png": "39b3d8583205c90284cd60f0e018f29d",
"assets/assets/images/player/knight_run.png": "9cac5c91f943ba81915573bd93060d4d",
"assets/assets/images/player/crypt.png": "8e55febc1e2563a9d7ba4b48625ba88d",
"assets/assets/images/player/knight_idle.png": "191737282656dd3c8851a2dd3dfc1c0c",
"assets/assets/images/player/fireball_bottom.png": "05522f950d8d60e15615ee9705ff2ef0",
"assets/assets/audio/attack_enemy.mp3": "95c6ab8e9515377506e4f88ed660fa14",
"assets/assets/audio/battle_boss.mp3": "5c10fe38fddf586c9d694d8a28aa8a57",
"assets/assets/audio/attack_player.mp3": "ecb761207d8dccc6ff5814906211d47c",
"assets/assets/audio/explosion.wav": "4ca7bc18a6487c7f43ddc9f739691c9a",
"assets/assets/audio/sound_interaction.wav": "02583765123656547a68bcb7dc7ebcc3",
"assets/assets/audio/sound_bg.mp3": "603c391173ab8f849d737d0fa4fa0261",
"assets/assets/audio/attack_fire_ball.wav": "49601c8eb5ba3a0148d60a178cd6a06f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
