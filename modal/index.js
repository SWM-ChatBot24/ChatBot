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
	"text": "안녕~ 거북이 친구!",
	"blocks": [
		{
		  "type": "image_link",
		  "url": "https://chatbot-fsmrz.run.goorm.io/static/today_turtle.png"
		},
		{
		  "type": "text",
		  "text": "친절한 거북씨 입니다!\n오늘의 거북씨를 만나볼까요?",
		  "markdown": true
		},
		  {
			  type: "button",
			  text: "오늘의 거북씨 만나기 🐢",
			  style : "default",
			  action_type : "call_modal",
			  value: "1",
			  action_name: 'start'
		  },
    ]
}

serviceRegisterAgainModal = {
	"text": "안녕~ 거북이 친구!",
	"blocks": [
		{
		  "type": "image_link",
		  "url": "https://chatbot-fsmrz.run.goorm.io/static/reboot_turtle.png"
		},
		{
		  "type": "text",
		  "text": "다시 찾아와 주었군요!\n나의 거북씨를 다시 만나볼까요?",
		  "markdown": true
		},
		  {
			  type: "button",
			  text: "나의 거북씨 다시 만나기 🐢",
			  style : "default",
			  action_type : "call_modal",
			  value: "1",
			  action_name: 'start'
		  },
    ]
}

// 이거 레벨마다 다른 텍스트 나오게 하고 싶다...!
registerCompleteModal_3 = {
  "text": "나는! 빡센 거북씨!",
  "blocks": [
    {
      "type": "image_link",
      "url": "https://chatbot-fsmrz.run.goorm.io/static/turtle_three.png"
    },
    {
      "type": "text",
      "text": "어이~! 거북이 친구!\n오늘 빡세게 한 번 가보자구~!\n열정! 열정! 열정!!!",
      "markdown": true
    }
  ]
}

registerCompleteModal_2 = {
  "text": "나는! 평범한 거북씨!",
  "blocks": [
    {
      "type": "image_link",
      "url": "https://chatbot-fsmrz.run.goorm.io/static/turtle_two.png"
    },
    {
      "type": "text",
      "text": "오늘 하루 화이팅 하자구, 거북이 친구!\n아자! 아자! 아자!",
      "markdown": true
    }
  ]
}

registerCompleteModal_1 = {
  "text": "나는! 느긋한 거북씨!",
  "blocks": [
    {
      "type": "image_link",
      "url": "https://chatbot-fsmrz.run.goorm.io/static/turtle_one.png"
    },
    {
      "type": "text",
      "text": "일도 중요하지만 휴식도 중요한 거 알지?\n거북이 친구, 힘내라구~!",
      "markdown": true
    }
  ]
}


// 위에랑 같게 해도 될 것 같다!
levelChangeModal_3 = {
  "text": "거북씨! 변경!",
  "blocks": [
    {
      "type": "header",
      "text": "나는! 빡센 거북이!",
      "style": "blue"
    },
    {
      "type": "section",
      "accessory": {
        "type": "image_link",
        "url": "https://chatbot-fsmrz.run.goorm.io/static/turtle_3.png"
      },
		"content": {
		"type": "text",
		"text": "너 열정 넘치는구나?\n오늘 빡세고 열정있게 가보자~!",
		"markdown": true
      },
    }
  ]
}

levelChangeModal_2 = {
  "text": "거북씨! 변경!",
  "blocks": [
    {
      "type": "header",
      "text": "나는! 평범한 거북이!",
      "style": "blue"
    },
    {
      "type": "section",
      "accessory": {
        "type": "image_link",
        "url": "https://chatbot-fsmrz.run.goorm.io/static/turtle_2.png"
      },
		"content": {
		"type": "text",
		"text": "나 선택해줘서 고마워!\n오늘 열심히 살아보자! 아자!",
		"markdown": true
      },
    }
  ]
}

levelChangeModal_1 = {
  "text": "거북씨! 변경!",
  "blocks": [
    {
      "type": "header",
      "text": "나는! 느긋한 거북이!",
      "style": "blue"
    },
    {
      "type": "section",
      "accessory": {
        "type": "image_link",
        "url": "https://chatbot-fsmrz.run.goorm.io/static/turtle_1.png"
      },
		"content": {
		"type": "text",
		"text": "인생 행복하게 살아야지~\n여유있는 하루 보내자, 친구!",
		"markdown": true
      },
    }
  ]
}


registerRejectModal = {
  "text": "오늘은! 휴식하는 거북씨!",
  "blocks": [
    {
      "type": "image_link",
      "url": "https://chatbot-fsmrz.run.goorm.io/static/turtle_zero.png"
    },
    {
      "type": "text",
      "text": "오늘은 푹~ 쉬고, 내일은 나를 꼭 찾아줘 거북이 친구!",
      "markdown": true
    },
	{
      "type": "divider"
    },
	{
      "type": "text",
      "text": "거북씨를 다시 만나고 싶으면, 상단 '오늘의 거북씨'에서 다시 선택해주세요!",
      "markdown": true
    }
  ]
}

// 이름 바꿔야 함. 00씨
pairingServiceModal = {
  "text": "🎉일일 거북씨 당첨🎉",
  "blocks": [
	{
	  "type": "image_link",
	  "url": "https://chatbot-fsmrz.run.goorm.io/static/special_turtle.png"
	},
	{
	  "type": "text",
	  "text": "일일 거북씨 당첨! 축하합니다!🎉\n당신은 오늘",
	  "markdown": true
	},
	{
	  "type": "text",
	  "text": "김현지 님의 일일 거북씨 입니다.",
	  "markdown": true
	},
	{
	  "type": "text",
	  "text": "자세를 바로 하라는 메세지와 함께 간단한 응원글을 보내주세요!",
	  "markdown": true
	},
	{
      "type": "button",
      "text": "응원글 보내기",
      "style": "default"
    }
  ]
}

pairingSendingModal ={
  "title": "일일 거북씨의 응원",
  "accept": "보내기",
  "decline": "좀 더 고민하기",
  "value": "one day turtle",
  "blocks": [
    {
      "type": "label",
      "text": "CHEER UP, TURTLE..! 🐢",
      "markdown": true
    },
    {
      "type": "input",
      "name": "cheerupSaying",
      "required": true,
      "placeholder": "일일 거북씨가 되어 응원글을 남겨주세요!"
    }
  ]
}

pairingReceivingModal={
  "text": "배달부 거북씨 도착",
  "blocks": [
	{
      "type": "image_link",
      "url": "https://chatbot-fsmrz.run.goorm.io/static/delivery_turtle.png"
    },
    {
      "type": "text",
      "text": "메세지 내용",
      "markdown": true
    }
  ]
}

// 이거 배열 안에 여러개 두고 랜덤하게 나오도록!
messageServiceModal_3 = {
  "text": "친구! 거북이로 진화 중이야? 목 펴, 목 펴! 😎",
  "blocks": [
    {
      "type": "text",
      "text": "친구! 거북이로 진화 중이야? 목 펴, 목 펴! 😎",
      "markdown": true
    }
  ]
}

messageServiceModal_2 = {
  "text": "친구! 목이 굽었어! 바르게 앉자! 😊",
  "blocks": [
    {
      "type": "text",
      "text": "친구! 목이 굽었어! 바르게 앉자! 😊",
      "markdown": true
    }
  ]
}

messageServiceModal_1 = {
  "text": "친구~ 스트레칭 한 번 하고 일하자 🙂",
  "blocks": [
    {
      "type": "text",
      "text": "친구~ 스트레칭 한 번 하고 일하자 🙂",
      "markdown": true
    }
  ]
}


messageURLServiceModal = {
  "text": "목펴랏!!",
  "blocks": [
    {
      "type": "text",
      "text": "url here",
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
        },
		{
            "type": "label",
            "text": "거북이 출근 시간!",
            "markdown": true
        },
        {
            "type": "select",
            "name": "start_time",
            "options": [
                {
                    "text": "0시",
                    "value": "0"
                },
                {
                    "text": "1시",
                    "value": "1"
                },
                {
                    "text": "2시",
                    "value": "2"
                },
                {
                    "text": "3시",
                    "value": "3"
                },
                {
                    "text": "4시",
                    "value": "4"
                },
                {
                    "text": "5시",
                    "value": "5"
                },
                {
                    "text": "6시",
                    "value": "6"
                },
                {
                    "text": "7시",
                    "value": "7"
                },
                {
                    "text": "8시",
                    "value": "8"
                },
                {
                    "text": "9시",
                    "value": "9"
                },
                {
                    "text": "10시",
                    "value": "10"
                },
                {
                    "text": "11시",
                    "value": "11"
                },
                {
                    "text": "12시",
                    "value": "12"
                },
                {
                    "text": "13시",
                    "value": "13"
                },
                {
                    "text": "14시",
                    "value": "14"
                },
                {
                    "text": "15시",
                    "value": "15"
                },
                {
                    "text": "16시",
                    "value": "16"
                },
                {
                    "text": "17시",
                    "value": "17"
                },
                {
                    "text": "18시",
                    "value": "18"
                },
                {
                    "text": "19시",
                    "value": "19"
                },
                {
                    "text": "20시",
                    "value": "20"
                },
                {
                    "text": "21시",
                    "value": "21"
                },
                {
                    "text": "22시",
                    "value": "22"
                },
                {
                    "text": "23시",
                    "value": "23"
                }
            ],
            "required": true,
            "placeholder": "알림을 언제부터 받을까요?"
        },
		{
            "type": "label",
            "text": "거북이 퇴근 시간!",
            "markdown": true
        },
        {
            "type": "select",
            "name": "end_time",
            "options": [
                {
                    "text": "0시",
                    "value": "0"
                },
                {
                    "text": "1시",
                    "value": "1"
                },
                {
                    "text": "2시",
                    "value": "2"
                },
                {
                    "text": "3시",
                    "value": "3"
                },
                {
                    "text": "4시",
                    "value": "4"
                },
                {
                    "text": "5시",
                    "value": "5"
                },
                {
                    "text": "6시",
                    "value": "6"
                },
                {
                    "text": "7시",
                    "value": "7"
                },
                {
                    "text": "8시",
                    "value": "8"
                },
                {
                    "text": "9시",
                    "value": "9"
                },
                {
                    "text": "10시",
                    "value": "10"
                },
                {
                    "text": "11시",
                    "value": "11"
                },
                {
                    "text": "12시",
                    "value": "12"
                },
                {
                    "text": "13시",
                    "value": "13"
                },
                {
                    "text": "14시",
                    "value": "14"
                },
                {
                    "text": "15시",
                    "value": "15"
                },
                {
                    "text": "16시",
                    "value": "16"
                },
                {
                    "text": "17시",
                    "value": "17"
                },
                {
                    "text": "18시",
                    "value": "18"
                },
                {
                    "text": "19시",
                    "value": "19"
                },
                {
                    "text": "20시",
                    "value": "20"
                },
                {
                    "text": "21시",
                    "value": "21"
                },
                {
                    "text": "22시",
                    "value": "22"
                },
                {
                    "text": "23시",
                    "value": "23"
                }
            ],
            "required": true,
            "placeholder": "거북씨를 언제 놓아줄까요?"
        },
		{
            "type": "label",
            "text": "퇴근시간이 출근시간보다 빠른 경우, 거북씨는 밤을 새고 퇴근합니다\n출근시간과 퇴근시간이 같으면, 거북씨는 쉴 수 없습니다!!",
            "markdown": true
        }
    ]
}

workStartAlarmModal = {
  "text": "거북씨 출근도장 쾅!",
  "blocks": [
    {
      "type": "text",
      "text": "거북씨가 출근했어요! 오늘도 거북씨와 함께 목 편한 하루~",
      "markdown": true
    }
  ]
}
workEndAlarmModal = {
  "text": "거북씨 퇴근도장 쾅!",
  "blocks": [
    {
      "type": "text",
      "text": "거북씨는 이제 자유에요!",
      "markdown": true
    }
  ]
}


module.exports.registerCompleteModal_1 = registerCompleteModal_1;
module.exports.registerCompleteModal_2 = registerCompleteModal_2;
module.exports.registerCompleteModal_3 = registerCompleteModal_3;
module.exports.registerRejectModal = registerRejectModal;
module.exports.levelChangeModal_1 = levelChangeModal_1;
module.exports.levelChangeModal_2 = levelChangeModal_2;
module.exports.levelChangeModal_3 = levelChangeModal_3;
module.exports.serviceRegisterModal = serviceRegisterModal;
module.exports.serviceRegisterAgainModal = serviceRegisterAgainModal;
module.exports.pairingServiceModal = pairingServiceModal;
module.exports.pairingSendingModal = pairingSendingModal;
module.exports.pairingReceivingModal = pairingReceivingModal;
module.exports.messageServiceModal_1 = messageServiceModal_1;
module.exports.messageServiceModal_2 = messageServiceModal_2;
module.exports.messageServiceModal_3 = messageServiceModal_3;
module.exports.dynamicServiceRegisterModal = dynamicServiceRegisterModal;
module.exports.messageURLServiceModal = messageURLServiceModal;
module.exports.workStartAlarmModal = workStartAlarmModal;
module.exports.workEndAlarmModal = workEndAlarmModal;
