//#################
// privacytools.io
//#################
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("browser.send_pings", false);
user_pref("browser.sessionstore.max_tabs_undo", 10);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("media.eme.enabled", true); // enable/disable DRM
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("webgl.disabled", true);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("network.IDN_show_punycode", true);
user_pref("browser.geolocation.warning.infoURL", "https://location.services.mozilla.com/v1/geolocate?key=test"); // geolocation backend
user_pref("media.eme.enabled", false); // Disables playback of DRM-controlled HTML5 content, which, if enabled, automatically downloads the Widevine Content Decryption Module provided by Google Inc.
user_pref("beacon.enabled", false); // Disables sending additional analytics to web servers
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
// Disable Firefox prefetching pages it thinks you will visit next
user_pref("network.dns.disablePrefetch", true); // Prefetching causes cookies from the prefetched site to be loaded and other potentially unwanted behavior
user_pref("network.dns.disablePrefetchFromHTTPS", true); // Prefetching causes cookies from the prefetched site to be loaded and other potentially unwanted behavior
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.prefetch-next", false);
user_pref("network.IDN_show_punycode", true); // Not rendering IDNs as their Punycode equivalent leaves you open to phishing attacks that can be very difficult to notice.

//#################
// Other
//#################
user_pref("privacy.donottrackheader.enabled", false); // Sets "Do Not Track" 
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%"); // use Mozilla geolocation service instead of Google when geolocation is enabled [FF74+]
user_pref("geo.provider.use_gpsd", false); // disable using the OS's geolocation service [LINUX]
user_pref("browser.region.network.url", ""); // [FF78+]
user_pref("browser.region.update.enabled", false); // [[FF79+]

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

// New urlbar changes 
user_pref("browser.urlbar.suggest.searches", false);

// New tab page
user_pref("browser.newtabpage.activity-stream.topSitesRows", 5);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);

// Show firefox logo
user_pref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", true);

// Set ctrl + q to warn before closing entire browser 
user_pref("browser.tabs.warnOnClose", true);
user_pref("browser.warnOnQuit", true);
user_pref("browser.sessionstore.warnOnQuit", true);

// Don't reccomend extensions
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
