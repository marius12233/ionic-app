import { __awaiter, __generator } from "tslib";
var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color, cssClassMap) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? Object.assign((_a = { 'ion-color': true }, _a["ion-color-" + color] = true, _a), cssClassMap) : cssClassMap;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction, animation) { return __awaiter(void 0, void 0, void 0, function () {
    var router;
    return __generator(this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction, animation)];
            }
        }
        return [2 /*return*/, false];
    });
}); };
export { createColorClasses as c, getClassMap as g, hostContext as h, openURL as o };
