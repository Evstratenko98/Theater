import './scss/index.scss'
import FlowAdaptive from 'flow-adaptive'


new FlowAdaptive({
  fontRatio: 1440 / 10, // the best practice is to set fontRatio to base layout width / 10
  maxWidth: 1440,
  minWidth: 650,
  breakPoints: [
    {
      minWidth: 650,
      maxWidth: 900,
      fontRatio: 768 / 10,
    },
    {
      maxWidth: 649,
      fontRatio: 375 / 10,
    },
  ],
})

const button_menu = document.getElementById('button_menu') 
const mobile_blackout = document.getElementById('mobile_blackout')
const mobile_menu = document.getElementById('mobile_menu')
const times = document.getElementById('times')

button_menu.addEventListener('click', ()=> {
	mobile_blackout.style.display = "block"
	mobile_menu.style.display = "block"
	setTimeout(() => {
		mobile_menu.style.transform = "translateX(0)"
	}, 0)
})
times.addEventListener('click', () => {
	mobile_menu.style.transform = "translateX(-100%)"
	setTimeout(() => {
		mobile_blackout.style.display = "none"
		mobile_menu.style.display = "none"
	}, 300)
})


