function fetchUserData(userID){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const user={id:userID,name:'john',type:'premium'};
            console.log(user);
            resolve(user);
        },10000);
    });
}
function fetchusersettings(userType){
    return new Promise((resolve,reject)=>{
        console.log('fetching setting for user type:${userType}');
        const settings=userType==='premium'
        ?{theme:'dark',Notifications:true,accesslevel:'high'}
        :{theme:'light',Notifications:false,accesslevel:'low'};
        resolve(settings);
    });
}
fetchUserData(1)
.then(user=>fetchusersettings(user.type))
.then(details=>{console.log(details)})
.catch(error=>{console.log(error)})
// async function display(){
//     let user=await fetchUserData(1)
//     let settings=await fetchusersettings(user.type)
//     console.log(settings)
// }
// display()