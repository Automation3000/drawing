/**
 * Copyright (c) 2006-2024, JGraph Holdings Ltd
 * Copyright (c) 2006-2024, draw.io AG
 */
// Overrides of global vars need to be pre-loaded
window.DRAWIO_PUBLIC_BUILD = true;
window.EXPORT_URL = 'REPLACE_WITH_YOUR_IMAGE_SERVER';
window.PLANT_URL = 'REPLACE_WITH_YOUR_PLANTUML_SERVER';
window.DRAWIO_BASE_URL = window.location.protocol + '//' + window.location.host;
window.DRAWIO_VIEWER_URL = null; // Replace your path to the viewer js, e.g. https://www.example.com/js/viewer.min.js
window.DRAWIO_LIGHTBOX_URL = null; // Replace with your lightbox URL, eg. https://www.example.com
window.DRAW_MATH_URL = 'math4/es5';

// Personal Drawing Tool Configuration - Disable Online Storage & Sharing
window.DRAWIO_CONFIG = {
    defaultMode: 'browser',
    disableGoogleDrive: true,
    disableOneDrive: true,
    disableGitHub: true,
    disableGitLab: true,
    disableDropbox: true,
    disableTrello: true,
    disableFileSync: true,
    disableExport: false,  // Allow local export but hide file operations
    disableImport: false,  // Keep import but via local browser only
    openFile: false        // Disable "Open from" cloud services
};

if (typeof urlParams !== 'undefined') {
    urlParams['sync'] = 'manual';
}
