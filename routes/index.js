const express = require('express');
const router = express.Router();
const libKakaoWork =require('../libs/kakaoWork');
const userService = require("../services/userService");
const customModals = require("../modal")

// console.log(customModals.serviceRegisterModal.blocks)

router.get('/', async (req, res, next) => {
  // 유저 목록 검색 (1)
	
  const users = await libKakaoWork.getUserList();
  // 검색된 모든 유저에게 각각 채팅방 생성 (2)
  const conversations = await Promise.all(
    users.map((user) => libKakaoWork.openConversations({ userId: user.id }))
  );

  // 생성된 채팅방에 메세지 전송 (3)
  const messages = await Promise.all([
    conversations.map((conversation) =>
      libKakaoWork.sendMessage({
        conversationId: conversation.id,
        text: '거북이 도착',
        blocks: customModals.serviceRegisterModal.blocks,
      })
    ),
  ]);

  res.json({
    users,
    conversations,
    messages,
  });
});
//push test

// routes/index.js
router.post('/request', async (req, res, next) => {
  const { message, value } = req.body;

console.log(req.body)
  switch (value) {
    case 'turtle_active':
		  console.log("yeah active");
		  
		  break;
	case 'turtle_inactive':
		  console.log("yeah deactive");
		  
		  break;
	  default:
		  
  }
  res.json({});
});

// routes/index.js
router.post('/callback', async (req, res, next) => {
  const { message, action_name, actions, action_time, value, react_user_id } = req.body; // 설문조사 결과 확인 (2)
	// console.log(req.body);
	const newuser = await libKakaoWork.getUserInfo(react_user_id);
	
  switch (action_name) {
    case "active":	  
	  newuser.level = value;
	  switch (value){
		  case '1' : newuser.NextUpdateTime = Math.round(Math.random() * (60) + 150); break; // 2시간 반 ~ 3시간 반
		  case '2' : newuser.NextUpdateTime = Math.round(Math.random() * (60) + 90); break; // 1시간 반 ~ 2시간 반
		  case '3' : newuser.NextUpdateTime = Math.round(Math.random() * (60) + 30); break; // 30분 ~ 1시간 반
	  }
	  userService.appendUser(newuser);	
	
	  await libKakaoWork.sendMessage({
	  conversationId: message.conversation_id,
	  text: '안녕하세요, 친절한 거북씨에요',
	  blocks: customModals.registerCompleteModal.blocks
	  });
	  break;	
		  
  	case "reject":	  
	  userService.deleteUser(newuser);	  
		  
	  await libKakaoWork.sendMessage({
	  conversationId: message.conversation_id,
	  text: '안녕하세요, 친절한 거북씨에요',
	  blocks: customModals.registerRejectModal.blocks
	  });
		  
	  break;
    default:
  }

  res.json({ result: true });
});


module.exports = router;