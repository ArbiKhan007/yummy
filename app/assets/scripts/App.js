import '../css/styles.css'
import MobileMenu from './modules/MobileMenu'
import revealOnScroll from './modules/revealOnScroll'
import StickyHeader from './modules/StickyHeader'

new MobileMenu();
new StickyHeader();
new revealOnScroll(document.querySelectorAll('.feature-item'), 75);
new revealOnScroll(document.querySelectorAll('.testimonials'), 60);
let modal;

document.querySelectorAll('.open-modal').forEach(el => {
	el.addEventListener("click", (e) => {
		e.preventDefault();
		if(typeof modal == "undefined"){
			import(/*webpackChunkName: "modal"*/'./modules/Modal').then(x => {
				modal = new x.default();
				setTimeout(() => {modal.enableModalVisibility()}, 20);
			}).catch(() => {console.log("There is an error.")});
		}else{
			modal.enableModalVisibility();
		}
	})
})

if (module.hot) {
	module.hot.accept();
}