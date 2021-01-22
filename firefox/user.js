/*#####################*/
/*## privacytools.io ##*/
/*#####################*/
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.resistFingerprinting", false); // Setting to true screws up per site zoom levels
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("browser.send_pings", false); // disable "Hyperlink Auditing"
user_pref("browser.send_pings.require_same_host", true); // defense-in-depth
user_pref("browser.sessionstore.max_tabs_undo", 10);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("network.IDN_show_punycode", true);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
// Disable Firefox prefetching pages it thinks you will visit next
user_pref("network.dns.disablePrefetch", true); // Prefetching causes cookies from the prefetched site to be loaded and other potentially unwanted behavior
user_pref("network.dns.disablePrefetchFromHTTPS", true); // Prefetching causes cookies from the prefetched site to be loaded and other potentially unwanted behavior
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.prefetch-next", false); // link prefetching
user_pref("network.IDN_show_punycode", true); // Not rendering IDNs as their Punycode equivalent leaves you open to phishing attacks that can be very difficult to notice.
user_pref("network.http.speculative-parallel-limit", 0); // disable link-mouseover opening connection to linked server

/*###########*/
/*## Other ##*/
/*###########*/

user_pref("privacy.donottrackheader.enabled", false); // Sets "Do Not Track" 
user_pref("browser.geolocation.warning.infoURL", "https://location.services.mozilla.com/v1/geolocate?key=test"); // geolocation backend
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%"); // use Mozilla geolocation service instead of Google when geolocation is enabled [FF74+]
user_pref("geo.provider.use_gpsd", false); // disable using the OS's geolocation service [LINUX]
user_pref("browser.region.network.url", ""); // Disable region updates [FF78+]
user_pref("browser.region.update.enabled", false); // Disable region updates [[FF79+]
user_pref("browser.search.region", "US"); // set default search region

// disable about:config warning
user_pref("general.warnOnAboutConfig", false); // XUL/XHTML version
user_pref("browser.aboutConfig.showWarning", false); // HTML version [FF71+]

// Updates
user_pref("extensions.update.enabled", true); // enable checks for extenstion update
user_pref("extensions.update.autoUpdateDefault", false);
user_pref("app.update.auto", false); // Disable Firefox AutoUpdates
user_pref("browser.search.update", false); // disable search engine updates (e.g. OpenSearch)
user_pref("extensions.getAddons.showPane", false); // disable addons recommendations pan (uses google analytics)
user_pref("extensions.systemAddon.update.enabled", false); // disable system add-on updates [FF62+]
user_pref("extensions.systemAddon.update.url", ""); // disable system add-on updates [FF44+]

// Telemetry
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); 
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]
user_pref("browser.ping-centre.telemetry", false); // disable pingcentre telemetry 
// telemetry coverage
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("extensions.webcompat-reporter.enabled", false); // Disable web compatibility reporter

// Health Reports
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("app.shield.optoutstudies.enabled", false); // Disable ff studies

// Crash Reports
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false); // [FF44+]
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // [FF51+]
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [FF58+] // backlog crash reports
user_pref("dom.ipc.plugins.reportCrashURL", false); // disable sending the URL of the website where a plugin crashes

// Disable Captive Portal Detection
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false); // [FF52+]

user_pref("network.connectivity-service.enabled", false); // Disable network connectivity checks

// Blocklists and Safe Browsing
user_pref("browser.safebrowsing.malware.enabled", false); // [WARNING] turn off master switches for SB
user_pref("browser.safebrowsing.phishing.enabled", false); // [WARNING] turn off master switches for SB
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);  // disable SB checks for downloads
user_pref("browser.safebrowsing.downloads.remote.url", ""); // disable SB checks for downloads
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false); // Warn you about unwanted and uncommon software
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false); // Warn you about unwanted and uncommon software

// System Add-Ons / Experiments
user_pref("app.normandy.enabled", false); // another telemetry system
user_pref("app.normandy.api_url", ""); // another telemetry system




user_pref("network.dns.disableIPv6", true);


/*##########################*/
/*## NON PRIVACY SETTINGS ##*/
/*##########################*/

// Touchpad/Smoothscroll
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 250);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 250);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 450);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 50);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "0.4");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 5000);
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.82");
user_pref("gfx.blacklist.layers.opengl.failureid", "FEATURE_FAILURE_SOFTWARE_GL");
user_pref("gfx.canvas.azure.accelerated", true);
user_pref("gfx.use_text_smoothing_setting", true);
user_pref("gfx.webrender.all", true);
//user_pref("gfx.xrender.enabled", true);
user_pref("gfx.webrender.enabled", true);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 4);
user_pref("toolkit.scrollbox.verticalScrollDistance", 5);

// Mouse
user_pref("layers.acceleration.force-enabled", true);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 250);
user_pref("mousewheel.default.delta_multiplier_x", 30);
user_pref("mousewheel.default.delta_multiplier_y", 18);
user_pref("mousewheel.min_line_scroll_amount", 200);

// Other
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", ''); // default is google,amazon

// disable Form Autofill
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.available", "off"); // [FF56+]
user_pref("extensions.formautofill.creditCards.available", false); // [FF57+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
user_pref("extensions.formautofill.heuristics.enabled", false); // [FF55+]

// URL Bar
user_pref("browser.urlbar.suggest.searches", false);
user_pref("keyword.enabled", false); // Disable autosearching when firefox does not detect a valid url
user_pref("browser.fixup.alternate.enabled", false); // disable location bar domain guessing
user_pref("browser.urlbar.trimURLs", false); // display all parts of the url in the location bar
user_pref("browser.search.suggest.enabled", false); // disable live search suggestions (both must be disabled)
user_pref("browser.urlbar.suggest.searches", false); // disable live search suggestions (both must be disabled)
user_pref("browser.urlbar.speculativeConnect.enabled", false);
/* disable location bar leaking single words to a DNS provider **after searching** [FF78+]
 * 0=never resolve single words, 1=heuristic (default), 2=always resolve
*/
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);

user_pref("browser.urlbar.autoFill", false);
/* URL Bar suggestions */
// user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.openpage", false);
// user_pref("browser.urlbar.suggest.topsites", false); // [FF78+]


// Passwords
user_pref("signon.rememberSignons", false);
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);


/** CACHE ***/
/* 1001: disable disk cache
 * [SETUP-PERF] If you think disk cache may help (heavy tab user, high-res video),
 * or you use a hardened Temporary Containers, then feel free to override this
//user_pref("browser.cache.disk.enable", false);
/* 1003: disable memory cache
 * capacity: -1=determine dynamically (default), 0=none, n=memory capacity in kibibytes ***/
   // user_pref("browser.cache.memory.enable", false);
   // user_pref("browser.cache.memory.capacity", 0);
/* 1006: disable permissions manager from writing to disk [RESTART]
 * [NOTE] This means any permission changes are session only
 * [1] https://bugzilla.mozilla.org/967812 ***/
   // user_pref("permissions.memory_only", true); // [HIDDEN PREF]
/* 1007: disable media cache from writing to disk in Private Browsing
 * [NOTE] MSE (Media Source Extensions) are already stored in-memory in PB
 * [SETUP-WEB] ESR78: playback might break on subsequent loading (1650281) ***/
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true); // [FF75+]
user_pref("media.memory_cache_max_size", 65536);


/** FAVICONS ***/
/* 1030: disable favicons in shortcuts
 * URL shortcuts use a cached randomly named .ico file which is stored in your
 * profile/shortcutCache directory. The .ico remains after the shortcut is deleted.
 * If set to false then the shortcuts use a generic Firefox icon ***/
user_pref("browser.shell.shortcutFavicons", false);
/* 1031: disable favicons in history and bookmarks
 * Stored as data blobs in favicons.sqlite, these don't reveal anything that your
 * actual history (and bookmarks) already do. Your history is more detailed, so
 * control that instead; e.g. disable history, clear history on close, use PB mode
 * [NOTE] favicons.sqlite is sanitized on Firefox close, not in-session ***/
   // user_pref("browser.chrome.site_icons", false);
/* 1032: disable favicons in web notifications ***/
   // user_pref("alerts.showFavicons", false); // [DEFAULT: false]


/*** [SECTION 1400]: FONTS ***/
user_pref("_user.js.parrot", "1400 syntax error: the parrot's bereft of life!");
user_pref("gfx.font_rendering.opentype_svg.enabled", false); // disable rendering of SVG OpenType fonts
user_pref("gfx.font_rendering.graphite.enabled", false); // disable graphite - Graphite has had many critical security issues in the past

/*** [SECTION 1700]: CONTAINERS
     If you want to *really* leverage containers, we highly recommend Temporary Containers [2].
     Read the article by the extension author [3], and check out the github wiki/repo [4].
     [1] https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers
     [2] https://addons.mozilla.org/firefox/addon/temporary-containers/
     [3] https://medium.com/@stoically/enhance-your-privacy-in-firefox-with-temporary-containers-33925cd6cd21
     [4] https://github.com/stoically/temporary-containers/wiki
***/
user_pref("_user.js.parrot", "1700 syntax error: the parrot's bit the dust!");
user_pref("privacy.userContext.ui.enabled", true); // enable Container Tabs setting in preferences
user_pref("privacy.userContext.enabled", true); // enable Container Tabs
/* 1703: set behaviour on "+ Tab" button to display container menu on left click [FF74+]
 * [NOTE] The menu is always shown on long press and right click
 * [SETTING] General>Tabs>Enable Container Tabs>Settings>Select a container for each new tab ***/
   // user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);

/*** [SECTION 1800]: PLUGINS ***/
user_pref("_user.js.parrot", "1800 syntax error: the parrot's pushing up daisies!");
/* 1803: disable Flash plugin
 * 0=deactivated, 1=ask, 2=enabled
 * ESR52.x is the last branch to *fully* support NPAPI, FF52+ stable only supports Flash
 * [NOTE] You can still override individual sites via site permissions ***/
user_pref("plugin.state.flash", 0);
/* 1820: disable GMP (Gecko Media Plugins)
 * [1] https://wiki.mozilla.org/GeckoMediaPlugins ***/
   // user_pref("media.gmp-provider.enabled", false);
/* 1825: disable widevine CDM (Content Decryption Module)
 * [SETUP-WEB] if you *need* CDM, e.g. Netflix, Amazon Prime, Hulu, whatever ***/
user_pref("media.gmp-widevinecdm.visible", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.eme.enabled", false); // disable DRM


/*** [SECTION 2000]: MEDIA / CAMERA / MIC ***/
user_pref("_user.js.parrot", "2000 syntax error: the parrot's snuffed it!");
/* 2001: disable WebRTC (Web Real-Time Communication)
 * [SETUP-WEB] WebRTC can leak your IP address from behind your VPN, but if this is not
 * in your threat model, and you want Real-Time Communication, this is the pref for you
 * [1] https://www.privacytools.io/#webrtc ***/
user_pref("media.peerconnection.enabled", false);
/* 2002: limit WebRTC IP leaks if using WebRTC ***/
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true); // [FF51+]
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true); // [FF70+]
/* 2010: disable WebGL (Web Graphics Library)
 * [SETUP-WEB] When disabled, may break some websites. When enabled, provides high entropy,
 * especially with readPixels(). Some of the other entropy is lessened with RFP (see 4501)
 * [1] https://www.contextis.com/resources/blog/webgl-new-dimension-browser-exploitation/
 * [2] https://security.stackexchange.com/questions/13799/is-webgl-a-security-concern ***/
user_pref("webgl.disabled", true);
user_pref("webgl.enable-webgl2", false);
/* 2012: limit WebGL ***/
user_pref("webgl.min_capability_mode", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
/* 2022: disable screensharing ***/
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("media.autoplay.default", 5); // disable autoplay of HTML5 media [FF63+]
user_pref("media.autoplay.blocking_policy", 2); // disable autoplay of HTML5 media if you interacted with the site [FF78+]

/*** [SECTION 2500]: HARDWARE FINGERPRINTING ***/
user_pref("dom.battery.enabled", false); // disable Battery Status API
/* 2505: disable media device enumeration [FF29+]
 * [NOTE] media.peerconnection.enabled should also be set to false (see 2001)
 * [1] https://wiki.mozilla.org/Media/getUserMedia
 * [2] https://developer.mozilla.org/docs/Web/API/MediaDevices/enumerateDevices ***/
user_pref("media.navigator.enabled", false);
/* 2508: disable hardware acceleration to reduce graphics fingerprinting [SETUP-HARDEN]
 * [WARNING] Affects text rendering (fonts will look different), impacts video performance,
 * and parts of Quantum that utilize the GPU will also be affected as they are rolled out
 * [SETTING] General>Performance>Custom>Use hardware acceleration when available
 * [1] https://wiki.mozilla.org/Platform/GFX/HardwareAcceleration ***/
   // user_pref("gfx.direct2d.disabled", true); // [WINDOWS]
   // user_pref("layers.acceleration.disabled", true);
/* 2510: disable Web Audio API [FF51+]
 * [1] https://bugzilla.mozilla.org/1288359 ***/
user_pref("dom.webaudio.enabled", false);
/* 2517: disable Media Capabilities API [FF63+]
 * [WARNING] This *may* affect media performance if disabled, no one is sure
 * [1] https://github.com/WICG/media-capabilities
 * [2] https://wicg.github.io/media-capabilities/#security-privacy-considerations ***/
   // user_pref("media.media-capabilities.enabled", false);
user_pref("dom.vr.enabled", false);
user_pref("permissions.default.xr", 2); // set a default permission for Virtual Reality[FF73+]


/*** [SECTION 2600]: MISCELLANEOUS ***/
user_pref("_user.js.parrot", "2600 syntax error: the parrot's run down the curtain!");
/* 2601: prevent accessibility services from accessing your browser [RESTART]
 * [SETTING] Privacy & Security>Permissions>Prevent accessibility services from accessing your browser (FF80 or lower)
 * [1] https://support.mozilla.org/kb/accessibility-services ***/
user_pref("accessibility.force_disabled", 1);
/* 2602: disable sending additional analytics to web servers
 * [1] https://developer.mozilla.org/docs/Web/API/Navigator/sendBeacon ***/
user_pref("beacon.enabled", false);
/* 2603: remove temp files opened with an external application
 * [1] https://bugzilla.mozilla.org/302433 ***/
user_pref("browser.helperApps.deleteTempFileOnExit", true);
/* 2604: disable page thumbnail collection
 * look in profile/thumbnails directory - you may want to clean that out ***/
user_pref("browser.pagethumbnails.capturing_disabled", true); // [HIDDEN PREF]
/* 2606: disable UITour backend so there is no chance that a remote page can use it ***/
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
/* 2607: disable various developer tools in browser context
 * [SETTING] Devtools>Advanced Settings>Enable browser chrome and add-on debugging toolboxes
 * [1] https://github.com/pyllyukko/user.js/issues/179#issuecomment-246468676 ***/
user_pref("devtools.chrome.enabled", false);
/* 2608: reset remote debugging to disabled
 * [1] https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/16222 ***/
user_pref("devtools.debugger.remote-enabled", false); // [DEFAULT: false]
user_pref("middlemouse.contentLoadURL", false); // disable middle mouse click opening links from clipboard
/* 2614: limit HTTP redirects (this does not control redirects with HTML meta tags or JS)
 * [NOTE] A low setting of 5 or under will probably break some sites (e.g. gmail logins)
 * To control HTML Meta tag and JS redirects, use an extension. Default is 20 ***/
user_pref("network.http.redirection-limit", 10);
/* 2615: disable websites overriding Firefox's keyboard shortcuts [FF58+]
 * 0 (default) or 1=allow, 2=block
 * [SETTING] to add site exceptions: Page Info>Permissions>Override Keyboard Shortcuts ***/
user_pref("permissions.default.shortcuts", 2);
/* 2616: remove special permissions for certain mozilla domains [FF35+]
 * [1] resource://app/defaults/permissions ***/
user_pref("permissions.manager.defaultsUrl", "");
/* 2617: remove webchannel whitelist ***/
user_pref("webchannel.allowObject.urlWhitelist", "");
user_pref("pdfjs.disabled", false); // [DEFAULT: false]
/* 2622: enforce no system colors; they can be fingerprinted
 * [SETTING] General>Language and Appearance>Fonts and Colors>Colors>Use system colors ***/
user_pref("browser.display.use_system_colors", false); // [DEFAULT: false]
/* 2623: disable permissions delegation [FF73+]
 * Currently applies to cross-origin geolocation, camera, mic and screen-sharing
 * permissions, and fullscreen requests. Disabling delegation means any prompts
 * for these will show/use their correct 3rd party origin
 * [1] https://groups.google.com/forum/#!topic/mozilla.dev.platform/BdFOMAuCGW8/discussion */
user_pref("permissions.delegation.enabled", false);
/* 2624: enable "window.name" protection [FF82+]
 * If a new page from another domain is loaded into a tab, then window.name is set to an empty string. The original
 * string is restored if the tab reverts back to the original page. This change prevents some cross-site attacks ***/
user_pref("privacy.window.name.update.enabled", true); // [DEFAULT: true FF86+]
/* 2625: disable bypassing 3rd party extension install prompts [FF82+]
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1659530,1681331 ***/
user_pref("extensions.postDownloadThirdPartyPrompt", false);


/** EXTENSIONS ***/
/* 2660: lock down allowed extension directories
 * [SETUP-CHROME] This will break extensions, language packs, themes and any other
 * XPI files which are installed outside of profile and application directories
 * [1] https://mike.kaply.com/2012/02/21/understanding-add-on-scopes/
 * [1] archived: https://archive.is/DYjAM ***/
 user_pref("extensions.enabledScopes", 5); // [HIDDEN PREF]
 user_pref("extensions.autoDisableScopes", 15); // [DEFAULT: 15]
 /* 2662: disable webextension restrictions on certain mozilla domains (you also need 4503) [FF60+]
  * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1384330,1406795,1415644,1453988 ***/
    // user_pref("extensions.webextensions.restrictedDomains", "");

// New tab page
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false); // [FF66+]
user_pref("browser.newtabpage.activity-stream.topSitesRows", 5);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.default.sites", ""); // disable default new-tab sites

user_pref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", false); // Show firefox logo

// Set ctrl + q to warn before closing entire browser 
user_pref("browser.tabs.warnOnClose", true);
user_pref("browser.warnOnQuit", true);
user_pref("browser.sessionstore.warnOnQuit", true);

// Don't reccomend extensions
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// STARTUP
user_pref("browser.shell.checkDefaultBrowser", false);
