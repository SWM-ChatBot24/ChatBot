
serviceRegisterModal = {
	"text": "친절한 거북씨",
	"blocks": [
          {
            type: 'action',
				elements: [
				  {
					type: "button",
					action_type: "submit_action",
					text: "빠른",
					style: "primary",
					value: '3',
					action_name: 'active'
				  },
				  {
					type: "button",
					action_type: "submit_action",
					text: "보통",
					style: "default",
					value: '2',
					action_name: 'active'
				  },
					{
					type: "button",
					action_type: "submit_action",
					text: "느린",
					style: "danger",
					value: '1',
					action_name: 'active'
				  }
				]
          },
          {
			  type: "button",
			  text: "오늘은 괜찮아요",
			  style : "default",
			  action_type : "submit_action",
			  value: "0",
			  action_name: 'reject'
		  },
        ]
}



registerCompleteModal = {
  "text": "친절한 거북씨",
  "blocks": [
    {
      "type": "header",
      "text": "친절한 거북씨 등록 완료!",
      "style": "red"
    },
    {
      "type": "text",
      "text": "거북이들아! 자라가 되자",
      "markdown": true
    },
    {
      "type": "section",
      "content": {
        "type": "text",
        "text": "# 킹왕짱 멋쟁이",
        "markdown": true
      },
      "accessory": {
        "type": "image_link",
        "url": "https://t1.kakaocdn.net/kakaowork/resources/block-kit/section/8twinkle@3x.jpg"
      }
    }
  ]
}


registerRejectModal = {
  "text": "친절한 거북씨",
  "blocks": [
    {
      "type": "header",
      "text": "다음 기회에 꼭 스트레칭",
      "style": "blue"
    },
    {
      "type": "text",
      "text": "아쉽지만, 스트레칭은 그래도 해야해요~? :)",
      "markdown": true
    }
  ]
}



module.exports.registerCompleteModal = registerCompleteModal;
module.exports.registerRejectModal = registerRejectModal;
module.exports.serviceRegisterModal = serviceRegisterModal;