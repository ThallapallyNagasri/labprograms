function fetchUserDetails(userID,callback){
    const user={userID:1,name:"roy",type:"admin"};
    callback(user);
}
function fetchprivilages(type,callback1){
    const prev={"read":true,"write":true,"print":true};
    callback1(prev);
}
function display(prev){
    console.log(prev);
}
fetchUserDetails(1,(user)=>{
    fetchprivilages(user,display)
})