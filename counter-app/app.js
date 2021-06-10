// initial count
let  count =0;

//taking all buttons and values
const value = document.querySelector('#value');
const buttons = document.querySelectorAll(".btn");


buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e){
        const type = e.currentTarget.classList;
        if(type.contains('decrese')){
            count--;
        }
        else if(type.contains('increase')){
            count++;
        }
        else if(type.contains('reset')){
            count=0;
        }
        if(count > 0)
        {
            value.style.color="green";
        }
        if(count < 0)
        {
            value.style.color="red";
        }
        if(count == 0)
        {
            value.style.color="black";
        }
        value.textContent = count;
    });
});
