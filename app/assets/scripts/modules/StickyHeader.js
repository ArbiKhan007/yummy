import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class StickyHeader{
    constructor(){
        this.siteHeader = document.querySelector('.site-header');
        this.pageSections = document.querySelectorAll('.page-section');
        this.browserHeight = window.innerHeight;
        this.previousScrollY = window.scrollY;
        this.scrollThrottle = throttle(this.checkIfScrolled, 333).bind(this);

        this.events();
    }

    events(){
        window.addEventListener("scroll", this.scrollThrottle);
        window.addEventListener("resize", debounce(() => {
			this.browserHeight = window.innerHeight;
		}, 333));
    }

    checkIfScrolled(){
        this.determineScrollDir();
    
        if(window.scrollY > 100){
            this.addDarkerBackground();
        }else{
            this.removeDarkBackground();
        }

        this.pageSections.forEach(ele => {
            this.calcSection(ele);
        });
    }

    determineScrollDir(){
        if(window.scrollY > this.previousScrollY){
            this.scrollDir = "down";
        }else{
            this.scrollDir = "up";
        }

        this.previousScrollY = window.scrollY;
    }

    calcSection(ele){
        if(window.scrollY + this.browserHeight > ele.offsetTop && window.scrollY < ele.offsetTop + ele.offsetHeight){
            let scrollPercent = (ele.getBoundingClientRect().y / this.browserHeight) * 100;
            if(scrollPercent < 18 && scrollPercent > -0.1 && this.scrollDir == "down" || scrollPercent < 33 && this.scrollDir == "up"){
                let matchingLink = ele.getAttribute("data-matching-links");
                document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(ele => ele.classList.remove('is-current-link'));
                document.querySelector(matchingLink).classList.add('is-current-link');
            }
        }
    }

    addDarkerBackground(){
        this.siteHeader.classList.add('site-header--dark-background');
    }

    removeDarkBackground(){
        this.siteHeader.classList.remove('site-header--dark-background');
    }
}

export default StickyHeader