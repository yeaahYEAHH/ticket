window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.tabsItem'),
        currectTabs = document.querySelectorAll('.tabs-menu li'), 
        tabsContent = document.querySelectorAll('.tab-content'),
        tabsPatern = document.querySelector('.tabs-menu');

    function hideTabContent(){
        tabsContent.forEach(item => {
            item.style.display = 'none';
        })

        currectTabs.forEach(item => {
            item.classList.remove('current')
        })
    }

    function showTabContent(i = 0){
        tabsContent[i].style.display = 'block';
        currectTabs[i].classList.add('current');
    }

    hideTabContent();
    showTabContent()

    tabsPatern.addEventListener('click', (event) => {
        const target = event.target;
        if(target && target.classList.contains('tabsItem')){
            tabs.forEach((item, i) =>{
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })
})

