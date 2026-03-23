/**
 * Copyright (c) 2006-2024, JGraph Holdings Ltd
 * Copyright (c) 2006-2024, draw.io AG
 */
// null'ing of global vars need to be after init.js
window.ICONSEARCH_PATH = null;

// Aggressive menu item hiding after app initialization
(function() {
    // List of menu items to hide
    var hiddenMenuTexts = [
        'Open from',
        'Open Recent',
        'Google Drive',
        'OneDrive',
        'Microsoft 365',
        'Dropbox',
        'GitHub',
        'GitLab',
        'Trello',
        'Browser',
        'Device',
        'URL',
        'Share',
        'Share...',
        'Files'
    ];

    // Run aggressive hiding multiple times
    function hideMenuItems() {
        // Query all possible menu elements
        var allElements = document.querySelectorAll('[class*="MenuItem"], [class*="Menu"], [class*="Popup"], td, div, span, li');
        
        allElements.forEach(function(el) {
            var text = (el.textContent || el.innerText || '').trim();
            
            // Check if element should be hidden
            hiddenMenuTexts.forEach(function(hiddenText) {
                if (text === hiddenText || text.startsWith(hiddenText)) {
                    el.style.cssText = 'display: none !important; visibility: hidden !important; height: 0 !important; overflow: hidden !important; margin: 0 !important; padding: 0 !important;';
                }
            });
        });

        // Hide popup menus that contain these texts
        var popups = document.querySelectorAll('div[style*="position"], div[style*="absolute"], div[style*="fixed"]');
        popups.forEach(function(popup) {
            var content = popup.textContent || '';
            hiddenMenuTexts.forEach(function(hiddenText) {
                if (content.includes(hiddenText)) {
                    popup.style.cssText = 'display: none !important; visibility: hidden !important;';
                }
            });
        });
    }

    // Run multiple times to catch dynamic elements
    setTimeout(hideMenuItems, 500);
    setTimeout(hideMenuItems, 1000);
    setTimeout(hideMenuItems, 2000);
    setInterval(hideMenuItems, 1500);
})();
