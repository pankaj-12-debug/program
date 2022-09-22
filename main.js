//get all value
let sendbtn=document.getElementById('submit'); //get data by submit
let form=document.getElementById('my-number'); //get data by form
form.addEventListener('submit',Data);
function Data(e)
{
e.preventDefault();
//send value and localstorage
let name=document.getElementById('name').value;
localStorage.setItem('name',name);
let password=document.getElementById('password').value;
localStorage.setItem('password',password);
let obj={
    name:name,
    password:password
}
console.log(localStorage);
console.log(JSON.stringify(obj));
localStorage.getItem('userdetail',JSON.stringify(obj));
}

