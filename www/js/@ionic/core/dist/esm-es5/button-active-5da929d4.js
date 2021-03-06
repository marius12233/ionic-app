import { c as writeTask } from './index-92848855.js';
import { createGesture } from './index-eea61379.js';
import { h as hapticSelectionEnd, a as hapticSelectionStart, b as hapticSelectionChanged } from './haptic-7b8ba70a.js';
var createButtonActiveGesture = function (el, isButton) {
    var currentTouchedButton;
    var initialTouchedButton;
    var activateButtonAtPoint = function (x, y, hapticFeedbackFn) {
        if (typeof document === 'undefined') {
            return;
        }
        var target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    var setActiveButton = function (button, hapticFeedbackFn) {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        var buttonToModify = currentTouchedButton;
        writeTask(function () { return buttonToModify.classList.add('ion-activated'); });
        hapticFeedbackFn();
    };
    var clearActiveButton = function (dispatchClick) {
        if (dispatchClick === void 0) { dispatchClick = false; }
        if (!currentTouchedButton) {
            return;
        }
        var buttonToModify = currentTouchedButton;
        writeTask(function () { return buttonToModify.classList.remove('ion-activated'); });
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */
        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
        }
        currentTouchedButton = undefined;
    };
    return createGesture({
        el: el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: function (ev) { return activateButtonAtPoint(ev.currentX, ev.currentY, hapticSelectionStart); },
        onMove: function (ev) { return activateButtonAtPoint(ev.currentX, ev.currentY, hapticSelectionChanged); },
        onEnd: function () {
            clearActiveButton(true);
            hapticSelectionEnd();
            initialTouchedButton = undefined;
        }
    });
};
export { createButtonActiveGesture as c };
