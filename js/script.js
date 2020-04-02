document.addEventListener("DOMContentLoaded", function () {

    let tabs = document.querySelectorAll('.tabs__item'),
        tabsContent = document.querySelectorAll('.tab-content');

    function hideAllTabs () {
        tabsContent.forEach(function(item) {
            item.style.display = 'none';
        });
    }    

    function removeAllActiveClass () {
        tabsContent.forEach(function(item) {
            item.classList.remove('tab-content_active')
        });

        tabs.forEach(function(item) {
            item.classList.remove('tabs__item_active')
        });
    }

    tabs.forEach(function(item, i) {
        item.addEventListener('click', function() {
            hideAllTabs();
            removeAllActiveClass();

            tabsContent[i].classList.add('tab-content_active');
            $(tabsContent[i]).fadeIn();

            
            tabs[i].classList.add('tabs__item_active');
        });
    });

});