cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-flashlight/www/Flashlight.js",
        "id": "cordova-plugin-flashlight.Flashlight",
        "pluginId": "cordova-plugin-flashlight",
        "clobbers": [
            "window.plugins.flashlight"
        ]
    },
    {
        "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
        "id": "cordova-plugin-x-toast.Toast",
        "pluginId": "cordova-plugin-x-toast",
        "clobbers": [
            "window.plugins.toast"
        ]
    },
    {
        "file": "plugins/cordova-plugin-x-toast/test/tests.js",
        "id": "cordova-plugin-x-toast.tests",
        "pluginId": "cordova-plugin-x-toast"
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-flashlight": "3.0.0",
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-x-toast": "2.5.2"
}
// BOTTOM OF METADATA
});