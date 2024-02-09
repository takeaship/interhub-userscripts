// ==UserScript==
// @name         Hide Hubspot Button in Intercom Editor
// @version      2024-02-09
// @author       takeaship
// @match        https://scout.lapras.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function onElementLoaded() {
        const iframeContainer = document.getElementById("hubspot-messages-iframe-container");
        if (iframeContainer) {
            iframeContainer.style['z-index'] = "5";
        }
    }
    function onTimeout() {
        observer.disconnect();
    }
    const observer = new MutationObserver(function(mutations) {
        if (document.querySelector('#intersection-container')) {
            onElementLoaded();
            observer.disconnect();
        }
    });
    const config = { childList: true, subtree: true };
    observer.observe(document.body, config);
    setTimeout(onTimeout, 10000);
})();