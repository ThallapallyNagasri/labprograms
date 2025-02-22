const xhr=new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/users',true);
xhr.onreadystatechange=function(){
    if(xhr.readyState===4){
        if(xhr.status===200){
            console.log(xhr.responseText);
        }else{
            console.error('request failed with status:',xhr.status);
        }
    }
};
xhr.send();