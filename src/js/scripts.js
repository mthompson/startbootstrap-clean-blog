/*!
* Start Bootstrap - Clean Blog v6.0.8 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
(function () {

    let scrollPos = 0;
    /**
     * Event Listener for when the DOM content is loaded
     */
    window.addEventListener('DOMContentLoaded', () => {
        let passiveIfSupported = false;
        // create a synthetic event -> https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events
        const event = new Event('passiveSupportEvent');
        try {
            window.addEventListener("passiveSupportEvent", null,
                Object.defineProperty(
                    {},
                    "passive", {
                    get() { passiveIfSupported = { passive: true }; }
                })
            );
        } catch (err) { 
            // not supported
            console.log('failed', err.message);
        }

        const mainNav = document.getElementById('mainNav');
        // for improving performance and prevent potential memory leaks in certain browsers: see ->  https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener?retiredLocale=de#improving_scrolling_performance_with_passive_listeners
        window.addEventListener('scroll', function () {
            scrollHandler(mainNav);
        }, passiveIfSupported);
    })

    /**
     * scroll Event Handler
     */
    function scrollHandler(navElement) {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if (currentTop < scrollPos) {
            scrollUp(currentTop, navElement);
        } else {
            scrollDown(currentTop, navElement);
        }
        scrollPos = currentTop;
    }

    /**
     * Scrolling Up Handler
     * @param {*} currentTop 
     */
    function scrollUp(currentTop, navElement) {
        const headerHeight = navElement.clientHeight;
        if (currentTop > 0 && navElement.classList.contains('is-fixed')) {
            navElement.classList.add('is-visible');
        } else {
            navElement.classList.remove('is-visible', 'is-fixed');
        }
    }

    /**
     * Scrolling Down Handler
     * @param {*} currentTop 
     */
    function scrollDown(currentTop, navElement) {
        const headerHeight = navElement.clientHeight;
        /* if you want 'mainNav' to be hidden when scrolling down, uncomment the next line of code */
        // navElement.classList.remove(['is-visible']);
        if (currentTop > headerHeight && !navElement.classList.contains('is-fixed')) {
            /* if you want 'navElement' to be fixed AKA 'sticky' when scrolling down, uncomment the next line of code */
            navElement.classList.add('is-fixed');
            /* if you want 'navElement' to be visible when scrolling down, uncomment the next line of code */
            navElement.classList.add('is-visible');
        }
    }
})();

