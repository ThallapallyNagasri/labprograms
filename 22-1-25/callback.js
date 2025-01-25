function fetchUserData(callback){
    setTimeout(()=>{
        const user={id:1,name:'john',email:'john@example.com'};
        callback(user);
    },1000);
}
function displayUserData(user){
    console.log(`user: ${user.name}, email: ${user.email}`);
}
fetchUserData(displayUserData);