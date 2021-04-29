const Config = require('config');
const axios = require('axios');

const kakaoInstance = axios.create({
  baseURL: 'https://api.kakaowork.com',
  headers: {
    Authorization: `Bearer ${Config.keys.kakaoWork.bot}`,
  },
});

// 유저 목록 검색 (1)
exports.getUserList = async () => {
  const res = await kakaoInstance.get('/v1/users.list');
  return res.data.users;
};


// 유저 목록 추가 검색
exports.getAllUserList = async () => {
  let res = await kakaoInstance.get('/v1/users.list?limit=1');
  let allusers = []
  allusers = allusers.concat(res.data.users);
  while(true){
	const data = {
		limit:100,
    	cursor: res.data.cursor,
    };
	const u = await kakaoInstance.get('/v1/users.list', data);	
	allusers = allusers.concat(u.data.users);
	console.log("kakaoapi:: ", allusers);
	if(u.data.cursor === null) break;
  }
  return allusers;
};


// 채팅방 생성 (2)
exports.openConversations = async ({ userId }) => {
  const data = {
    user_id: userId,
  };
  const res = await kakaoInstance.post('/v1/conversations.open', data);
  return res.data.conversation;
};

// 메시지 전송 (3)
exports.sendMessage = async ({ conversationId, text, blocks }) => {
  const data = {
    conversation_id: conversationId,
    text,
    ...blocks && { blocks },
  };
  const res = await kakaoInstance.post('/v1/messages.send', data);
  return res.data.message;
};
	

  // id로 user info 불러오기 (3)
exports.getUserInfo = async (userId) => {
	const data = {
    	user_id: userId,
  	};
	const res = await kakaoInstance.get('/v1/users.info', {	
		params: {
			user_id: userId
		}
	});
    return res.data.user;
};

	