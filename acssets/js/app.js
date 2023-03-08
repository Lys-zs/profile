const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


var btnSwitchMode = $('.switch-mode');
var checkDarkMode = false;
var body = $('body')



const app = {
    getLocalStorage: function(){
        var darkChecked = JSON.parse(localStorage.getItem('checked'));
        if(!darkChecked){
            body.classList.remove('dark-mode')
            btnSwitchMode.setAttribute('title','switch to dark mode')
            checkDarkMode  = false
        }
        else{
            body.classList.add('dark-mode');
            btnSwitchMode.setAttribute('title','switch to light mode')
            checkDarkMode = true
        }
    },
    handleEvents: function(){
        btnSwitchMode.onclick = () =>{
            if(checkDarkMode){
                body.classList.remove('dark-mode')
                btnSwitchMode.setAttribute('title','switch to dark mode')
                localStorage.setItem('checked', false);
                checkDarkMode  = false
            }
            else{
                body.classList.add('dark-mode');
                btnSwitchMode.setAttribute('title','switch to light mode')
                localStorage.setItem('checked', true);
                checkDarkMode = true
            }
        }
    },
    start : function(){
        this.getLocalStorage();
        this.handleEvents();
    }
}
app.start();




