/*
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
*/

serviceRegisterModal = {
	"text": "친절한 거북씨",
	"blocks": [
          {
			  type: "button",
			  text: "거북씨 시작하기 🐢",
			  style : "default",
			  action_type : "call_modal",
			  value: "1",
			  action_name: 'start'
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
        "url": "https://chatbot-fsmrz.run.goorm.io/static/turtletest.jpg"
      }
    }
  ]
}


levelChangeModal = {
  "text": "Push alarm message",
  "blocks": [
    {
      "type": "header",
      "text": "난이도 변경!",
      "style": "blue"
    },
    {
      "type": "text",
      "text": "현재 난이도: 매운맛",
      "markdown": true
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


pairingServiceModal = {
  "text": "가랏!",
  "blocks": [
    {
      "type": "text",
      "text": "가랏!",
      "markdown": true
    }
  ]
}


messageServiceModal = {
  "text": "목펴랏!!",
  "blocks": [
    {
      "type": "text",
      "text": "목펴랏!",
      "markdown": true
    }
  ]
}


dynamicServiceRegisterModal = {
    "title": "나의 거북씨🐢",
    "accept": "입니다.",
    "decline": "아닙니다.",
    "value": "my_turtle_is",
    "blocks": [
        {
            "type": "label",
            "text": " ",
            "markdown": true
        },
        {
            "type": "label",
            "text": " ",
            "markdown": true
        },
        {
            "type": "label",
            "text": " ",
            "markdown": true
        },
        {
            "type": "label",
            "text": "나의 거북씨는요,",
            "markdown": true
        },
        {
            "type": "select",
            "name": "select_turtle",
            "options": [
                {
                    "text": "빡센 거북씨 😎",
                    "value": "3"
                },
                {
                    "text": "평범한 거북씨 😊",
                    "value": "2"
                },
                {
                    "text": "느긋한 거북씨 🙂",
                    "value": "1"
                },
                {
                    "text": "휴식하는 거북씨 😴",
                    "value": "0"
                }
            ],
            "required": true,
            "placeholder": "어떤 거북씨일까요?"
        }
    ]
}



module.exports.registerCompleteModal = registerCompleteModal;
module.exports.registerRejectModal = registerRejectModal;
module.exports.levelChangeModal = levelChangeModal;
module.exports.serviceRegisterModal = serviceRegisterModal;
module.exports.pairingServiceModal = pairingServiceModal;
module.exports.messageServiceModal = messageServiceModal;
module.exports.dynamicServiceRegisterModal = dynamicServiceRegisterModal;