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
				blocks: customModals.serviceRegisterModal.blocks, // 간단한 시작하기 모달
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
	
	switch (value) {
		case '1': // register service
			res.json({
				view: customModals.dynamicServiceRegisterModal // 반응형 모달 추가
			});
			break;
		case '0':
			console.log("yeah deactive");
			break;
		default:
			let pairingMessageModal = customModals.pairingMessageModal;
			pairingMessageModal.value = value;
			res.json({
				view: pairingMessageModal,
			});
			break;
	}
});

// routes/index.js
router.post('/callback', async (req, res, next) => {
	const { message, action_name, actions, action_time, value, react_user_id } = req.body; // 설문조사 결과 확인 (2)
	const newuser = await libKakaoWork.getUserInfo(react_user_id);

    // before dynamic blocks used
	// ** deprecated **
	if(value) {	  
		const conversation = await libKakaoWork.openConversations({ userId: value });
		await libKakaoWork.sendMessage({
			conversationId: conversation.id,
			text: "배달부 거북이",
			blocks: [
				{
					"type": "header",
					"text": "배달부 거북이",
					"style": "blue"
				},
				{
					"type": "text",
					"text": actions.message_text,
					"markdown": true
				},
				{
					"type": "text",
					"text": "by. "+newuser.name,
					"markdown": true
				}
			]
		});
	}

	// after dynamic block implementation
	// 1, 2, 3 : levels | 0: service disable
	switch(actions.select_turtle){
		case '1':
		case '2':
		case '3':
			newuser.level = actions.select_turtle;
			newuser.NextUpdateTime = Date.now();
			newuser.startTime = actions.start_time *= 1;
			newuser.endTime = actions.end_time *= 1;
			newuser.working = 0;
			userService.updateNextTime(newuser);
			userService.checkAndAppendUser(newuser, message);	
			break;
		case '0':
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