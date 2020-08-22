import '../css/styles.css'
import MobileMenu from './modules/MobileMenu'
import revealOnScroll from './modules/revealOnScroll'
import StickyHeader from './modules/StickyHeader'

let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();
new revealOnScroll(document.querySelectorAll('.feature-item'), 75);
new revealOnScroll(document.querySelectorAll('.testimonials'), 60);

if (module.hot) {
	module.hot.accept();
}