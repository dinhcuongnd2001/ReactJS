// var, let, const

function showInfo()
{   
    if(true)
    {
        a = 5;
        console.log(a);
    }
    console.log(a)
}

var heading = document.querySelector('.heading')
// heading.style.
// heading.style.fontSize = '24px'
Object.assign(heading.style, {
    'backgroundColor' : 'Red',
    'font-size': '25px'
})


console.log(Math.max())
// hoisting in js
sub(7,4)
function sub(a, b)
{
    console.log(a-b)
}

var salary = "1000$";

(function (salary) {

  console.log("Original salary was " + salary);

  var salary = "5000$";

  console.log("My New Salary " + salary);
})();

