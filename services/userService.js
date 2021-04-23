


// class UserService {
	
// 	constructor(){
// 		this.serviceRegisteredUser = []	
// 	}
	
// 	appendUser(user){
// 		this.serviceRegisteredUser.append(user);
// 		console.log(this.serviceRegisteredUser)
// 	}	
// }

/* 
serviceRegisteredUser : 거북봇을 사용하는 유저를 가지고 있는 dic
key : this.id 
value : this

this.id = 고유번호
this.name = 이름
this.level = 거북봇 등장 속도 (1 : 낮음, 3 : 높음)
this.NextUpdateTime = 다음 거북봇 등장까지 남은 시간(분)
*/
const libKakaoWork =require('../libs/kakaoWork');

let serviceRegisteredUser = {} 

let unpairedUser = {}

//push user to serviceRegisteredUser
function appendUser(user){
	serviceRegisteredUser[user.id] = user;
	unpairedUser[user.id] = user.id;
	console.log(serviceRegisteredUser);
}

//delete user 
function deleteUser(user){
	delete serviceRegisteredUser[user.id];
	delete unpairedUser[user.id];
	console.log(serviceRegisteredUser);
}

//거북이 등장하고 난 뒤 NextUpdateTime 초기화
function initUpdateNextTime(user){
	switch (user.level){
		 case '1' : newuser.NextUpdateTime = Math.round(Math.random() * (60) + 150); break; // 2시간 반 ~ 3시간 반
		 case '2' : newuser.NextUpdateTime = Math.round(Math.random() * (60) + 90); break; // 1시간 반 ~ 2시간 반
		 case '3' : newuser.NextUpdateTime = Math.round(Math.random() * (60) + 30); break; // 30분 ~ 1시간 반
	}
}


function getActiveUserIDList(){
	return serviceRegisteredUser;
}


function getLevelOfUser(user){
	return user.level;
}



module.exports.appendUser = appendUser;
module.exports.deleteUser = deleteUser;

module.exports.initUpdateNextTime = initUpdateNextTime;
module.exports.getActiveUserIDList = getActiveUserIDList;
module.exports.getLevelOfUser = getLevelOfUser;

