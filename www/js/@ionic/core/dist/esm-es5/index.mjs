import './index-92848855.js';
export { g as getPlatforms, i as isPlatform } from './ionic-global-23e7365a.js';
import './helpers-5c745fbd.js';
export { c as createAnimation } from './animation-a635a2fc.js';
export { a as LIFECYCLE_DID_ENTER, c as LIFECYCLE_DID_LEAVE, L as LIFECYCLE_WILL_ENTER, b as LIFECYCLE_WILL_LEAVE, d as LIFECYCLE_WILL_UNLOAD } from './index-9b2fc761.js';
export { iosTransitionAnimation } from './ios.transition-587709a3.js';
export { mdTransitionAnimation } from './md.transition-4ff6b28e.js';
export { g as getTimeGivenProgression } from './cubic-bezier-685f606a.js';
import './gesture-controller-89173521.js';
export { createGesture } from './index-eea61379.js';
export { I as IonicSafeString } from './index-79d74e0b.js';
import './hardware-back-button-7b6ede21.js';
export { m as menuController } from './index-52d51fad.js';
export { b as actionSheetController, a as alertController, l as loadingController, m as modalController, p as pickerController, c as popoverController, t as toastController } from './overlays-c5d9d644.js';
var setupConfig = function (config) {
    var win = window;
    var Ionic = win.Ionic;
    if (Ionic && Ionic.config && Ionic.config.constructor.name !== 'Object') {
        console.error('ionic config was already initialized');
        return;
    }
    win.Ionic = win.Ionic || {};
    win.Ionic.config = Object.assign(Object.assign({}, win.Ionic.config), config);
    return win.Ionic.config;
};
var getMode = function () {
    var win = window;
    var config = win && win.Ionic && win.Ionic.config;
    if (config) {
        if (config.mode) {
            return config.mode;
        }
        else {
            return config.get('mode');
        }
    }
    return 'md';
};
export { getMode, setupConfig };
