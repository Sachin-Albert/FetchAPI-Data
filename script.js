async function fetchdata(){
try{
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch (url);
    const result = await response.json()
    var container = document.getElementById('container');
    for(let i=0;i<result.length;i++){
        var list = document.createElement('ul');
        list.innerHTML=`<li>${result[i].id}. ${result[i].name}</li>`
        container.appendChild(list)
    }
}
catch(error){
    var container = document.getElementById('container');
    container.innerHTML=`<h1>Server Was Down Now Please Try Again Later !<h1/>`
}
}
