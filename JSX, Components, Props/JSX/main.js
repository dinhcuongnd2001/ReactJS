const courses = [
    {
        name : 'HTML-JS'
    },
    {
        name: 'React'
    },
    {
        name: 'Responsive web Design'
    }
]
var res = courses.map(function(value){
    return `<li>${value.name}</li>`
})   

const ul = document.createElement('ul')
ul.innerHTML = res
document.body.appendChild(ul)
// console.log(ul)