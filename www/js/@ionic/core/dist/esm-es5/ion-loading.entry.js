import { __awaiter, __generator } from "tslib";
import { r as registerInstance, e as createEvent, h, H as Host, i as getElement } from './index-92848855.js';
import { b as getIonMode, c as config } from './ionic-global-23e7365a.js';
import './helpers-5c745fbd.js';
import { c as createAnimation } from './animation-a635a2fc.js';
import { s as sanitizeDOMString } from './index-79d74e0b.js';
import './hardware-back-button-7b6ede21.js';
import { B as BACKDROP, e as prepareOverlay, d as present, f as dismiss, g as eventMethod } from './overlays-c5d9d644.js';
import { g as getClassMap } from './theme-5641d27f.js';
/**
 * iOS Loading Enter Animation
 */
var iosEnterAnimation = function (baseEl) {
    var baseAnimation = createAnimation();
    var backdropAnimation = createAnimation();
    var wrapperAnimation = createAnimation();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
        .beforeStyles({
        'pointer-events': 'none'
    })
        .afterClearStyles(['pointer-events']);
    wrapperAnimation
        .addElement(baseEl.querySelector('.loading-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.01, transform: 'scale(1.1)' },
        { offset: 1, opacity: 1, transform: 'scale(1)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * iOS Loading Leave Animation
 */
var iosLeaveAnimation = function (baseEl) {
    var baseAnimation = createAnimation();
    var backdropAnimation = createAnimation();
    var wrapperAnimation = createAnimation();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 'var(--backdrop-opacity)', 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.loading-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.99, transform: 'scale(1)' },
        { offset: 1, opacity: 0, transform: 'scale(0.9)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Loading Enter Animation
 */
var mdEnterAnimation = function (baseEl) {
    var baseAnimation = createAnimation();
    var backdropAnimation = createAnimation();
    var wrapperAnimation = createAnimation();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
        .beforeStyles({
        'pointer-events': 'none'
    })
        .afterClearStyles(['pointer-events']);
    wrapperAnimation
        .addElement(baseEl.querySelector('.loading-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.01, transform: 'scale(1.1)' },
        { offset: 1, opacity: 1, transform: 'scale(1)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Loading Leave Animation
 */
var mdLeaveAnimation = function (baseEl) {
    var baseAnimation = createAnimation();
    var backdropAnimation = createAnimation();
    var wrapperAnimation = createAnimation();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 'var(--backdrop-opacity)', 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.loading-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.99, transform: 'scale(1)' },
        { offset: 1, opacity: 0, transform: 'scale(0.9)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
var loadingIosCss = ".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-ios,.spinner-lines-small.sc-ion-loading-ios,.spinner-bubbles.sc-ion-loading-ios,.spinner-circles.sc-ion-loading-ios,.spinner-crescent.sc-ion-loading-ios,.spinner-dots.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}";
var loadingMdCss = ".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-md,.spinner-lines-small.sc-ion-loading-md,.spinner-bubbles.sc-ion-loading-md,.spinner-circles.sc-ion-loading-md,.spinner-crescent.sc-ion-loading-md,.spinner-dots.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}";
var Loading = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.didPresent = createEvent(this, "ionLoadingDidPresent", 7);
        this.willPresent = createEvent(this, "ionLoadingWillPresent", 7);
        this.willDismiss = createEvent(this, "ionLoadingWillDismiss", 7);
        this.didDismiss = createEvent(this, "ionLoadingDidDismiss", 7);
        this.presented = false;
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = true;
        /**
         * Number of milliseconds to wait before dismissing the loading indicator.
         */
        this.duration = 0;
        /**
         * If `true`, the loading indicator will be dismissed when the backdrop is clicked.
         */
        this.backdropDismiss = false;
        /**
         * If `true`, a backdrop will be displayed behind the loading indicator.
         */
        this.showBackdrop = true;
        /**
         * If `true`, the loading indicator will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        /**
         * If `true`, the loading indicator will animate.
         */
        this.animated = true;
        this.onBackdropTap = function () {
            _this.dismiss(undefined, BACKDROP);
        };
    }
    class_1.prototype.connectedCallback = function () {
        prepareOverlay(this.el);
    };
    class_1.prototype.componentWillLoad = function () {
        if (this.spinner === undefined) {
            var mode = getIonMode(this);
            this.spinner = config.get('loadingSpinner', config.get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
        }
    };
    /**
     * Present the loading overlay after it has been created.
     */
    class_1.prototype.present = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, present(this, 'loadingEnter', iosEnterAnimation, mdEnterAnimation, undefined)];
                    case 1:
                        _a.sent();
                        if (this.duration > 0) {
                            this.durationTimeout = setTimeout(function () { return _this.dismiss(); }, this.duration + 10);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Dismiss the loading overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the loading.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the loading.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */
    class_1.prototype.dismiss = function (data, role) {
        if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
        }
        return dismiss(this, data, role, 'loadingLeave', iosLeaveAnimation, mdLeaveAnimation);
    };
    /**
     * Returns a promise that resolves when the loading did dismiss.
     */
    class_1.prototype.onDidDismiss = function () {
        return eventMethod(this.el, 'ionLoadingDidDismiss');
    };
    /**
     * Returns a promise that resolves when the loading will dismiss.
     */
    class_1.prototype.onWillDismiss = function () {
        return eventMethod(this.el, 'ionLoadingWillDismiss');
    };
    class_1.prototype.render = function () {
        var _a;
        var _b = this, message = _b.message, spinner = _b.spinner;
        var mode = getIonMode(this);
        return (h(Host, { onIonBackdropTap: this.onBackdropTap, tabindex: "-1", style: {
                zIndex: "" + (40000 + this.overlayIndex)
            }, class: Object.assign(Object.assign({}, getClassMap(this.cssClass)), (_a = {}, _a[mode] = true, _a['loading-translucent'] = this.translucent, _a)) }, h("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }), h("div", { tabindex: "0" }), h("div", { class: "loading-wrapper ion-overlay-wrapper", role: "dialog" }, spinner && (h("div", { class: "loading-spinner" }, h("ion-spinner", { name: spinner, "aria-hidden": "true" }))), message && h("div", { class: "loading-content", innerHTML: sanitizeDOMString(message) })), h("div", { tabindex: "0" })));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
Loading.style = {
    ios: loadingIosCss,
    md: loadingMdCss
};
export { Loading as ion_loading };
