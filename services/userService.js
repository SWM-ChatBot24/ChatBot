/* 
serviceRegisteredUser : 거북봇을 사용하는 유저를 가지고 있는 dic
key : this.id 
value : this

this.id = 고유번호
this.name = 이름
this.level = 거북봇 등장 속도 (1 : 낮음, 3 : 높음)
this.NextUpdateTime = 다음 거북봇 등장 시간(Date.now() 기준, ms)
this.startTime = 유저가 선택한 봇 첫 등장 시간대
this.endTime = 유저가 선택한 봇 알림 종료 시간대
this.working = 거북봇이 활동중인 시간대인가 -> 1 : yes 2 : no
*/
const libKakaoWork = require('../libs/kakaoWork');
const customModals = require('../modal');

let serviceRegisteredUser = {};
let unpairedUser = {};

// modal mapping

const registerModalMap = [
    0,
    customModals.registerCompleteModal_1,
    customModals.registerCompleteModal_2,
    customModals.registerCompleteModal_3,
];
const messageServeiceModalMap = [
    0,
    customModals.messageServiceModal_1,
    customModals.messageServiceModal_2,
    customModals.messageServiceModal_3,
];
const levelChangeModalMap = [
    0,
    customModals.levelChangeModal_1,
    customModals.levelChangeModal_2,
    customModals.levelChangeModal_3,
];

//push user to serviceRegisteredUser
function checkAndAppendUser(user, message) {
    if (serviceRegisteredUser[user.id] === undefined) {
        // check null
        console.log('new user!!');
        appendUser(user);
        // send message to user
        libKakaoWork.sendMessage({
            conversationId: message.conversation_id,
            text: '안녕하세요, 친절한 거북씨에요',
            blocks: registerModalMap[Number(user.level)].blocks,
        });
    } else {
        // level update
        serviceRegisteredUser[user.id].level = user.level;

        libKakaoWork.sendMessage({
            conversationId: message.conversation_id,
            text: '안녕하세요, 친절한 거북씨에요',
            blocks: levelChangeModalMap[[Number(user.level)]].blocks,
        });
    }
}

function appendUser(user) {
    serviceRegisteredUser[user.id] = user;
    unpairedUser[user.id] = user.id;
    // console.log(serviceRegisteredUser);
    // console.log(unpairedUser);
}

//delete user
function deleteUser(user) {
    delete serviceRegisteredUser[user.id];
    delete unpairedUser[user.id];
    // console.log(serviceRegisteredUser);
    // console.log(unpairedUser);
}

//get random int between min & max
function randomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

//거북이 등장하고 난 뒤 NextUpdateTime 초기화
function updateNextTime(user) {
    switch (user.level) {
        case '1':
            user.NextUpdateTime += randomInt(150, 210) * 60000;
            break; // 2시간 반 ~ 3시간 반
        case '2':
            user.NextUpdateTime += randomInt(90, 150) * 60000;
            break; // 1시간 반 ~ 2시간 반
        case '3':
            user.NextUpdateTime += randomInt(30, 90) * 60000;
            break; // 30분 ~ 1시간 반
    }
}

let stretchingURLList = [
    'https://youtu.be/XT1dHyI86eQ',
    'https://youtu.be/YFWxji9yGss',
    'https://youtu.be/TiMJOt6stPE',
];

let stretchingThumbnailList = [
	'http://img.youtube.com/vi/XT1dHyI86eQ/0.jpg',
	'http://img.youtube.com/vi/YFWxji9yGss/0.jpg',
	'http://img.youtube.com/vi/TiMJOt6stPE/0.jpg',
];

let cheerupSayingList = [];

/**
 * Compare NowTime with Next Update Time
 * Send message to target
 * Update Next Update Time of target
 */
async function processUpdateTime() {
    const nowTime = Date.now();
    let today = new Date(); //이거 왜 한국시간이 아닌것 ㅡㅡ
	
    for (var id in serviceRegisteredUser) {
        var user = serviceRegisteredUser[id];
        var nextUpdateTime = user.NextUpdateTime;

        //time not requested by user
        if (
            user.startTime < user.endTime &&
            ((today.getHours() + 9) % 24 < user.startTime ||
                (today.getHours() + 9) % 24 >= user.endTime)
        )
            continue;
        if (
            user.startTime > user.endTime &&
            (today.getHours() + 9) % 24 >= user.endTime &&
            (today.getHours() + 9) % 24 < user.startTime
        )
            continue;

        //거북이 출퇴근 알림
        if ((today.getHours() + 9) % 24 >= user.startTime && user.working == 0) {
            user.working = 1;
            //open conversation
            const conversation = await libKakaoWork.openConversations({ userId: id });
            var messageBlock = customModals.workStartAlarmModal.blocks;
            await libKakaoWork.sendMessage({
                conversationId: conversation.id,
                text: '거북씨 출근 보고',
                blocks: messageBlock,
            });
        }
        if (
            (today.getHours() + 9) % 24 >= user.endTime &&
            user.working == 1 &&
            user.startTime != user.endTime
        ) {
            user.working = 0;
            //open conversation
            const conversation = await libKakaoWork.openConversations({ userId: id });
            var messageBlock = customModals.workEndAlarmModal.blocks;
            await libKakaoWork.sendMessage({
                conversationId: conversation.id,
                text: '거북씨 퇴근 보고',
                blocks: messageBlock,
            });
        }

        if (nowTime >= nextUpdateTime) {
            //update next time
            await updateNextTime(user);

            //open conversation
            const conversation = await libKakaoWork.openConversations({ userId: id });

            //send message (25% -> url, 75% -> normal)
            if (randomInt(1, 100) <= 25) {
                var urlBlocks = customModals.messageURLServiceModal.blocks;
				var index = randomInt(1, stretchingURLList.length) - 1;
				
                urlBlocks[1].text = stretchingURLList[index];
				urlBlocks[2].url = stretchingThumbnailList[index];

                await libKakaoWork.sendMessage({
                    conversationId: conversation.id,
                    text: '스트레칭 타임!',
                    blocks: urlBlocks,
                });
            } else {
                await libKakaoWork.sendMessage({
                    conversationId: conversation.id,
                    text: '목펴랏!',
                    blocks: messageServeiceModalMap[Number(user.level)].blocks,
                });
            }
        }
    }
}

function getUnpairedUserIDList() {
    return Object.keys(unpairedUser);
}

//generate random index
function getRandomIndex(range) {
    return (range * Math.random()) << 0;
}

//generate a pair between active users
async function getRandomUserIDList(users) {
    const randomUserIDList = [users[0]];
    let randomIndex = 0;
    while (randomIndex == 0) {
        randomIndex = await getRandomIndex(users.length);
    }
    randomUserIDList.push(users[randomIndex]);

    return randomUserIDList;
}

/**
 * Get a list of unpaired user IDs
 *
 * Generate a pair between active users
 * if there are more than one person in unpairedUser dictionary
 *
 * Send messages using conversation IDs generated by user IDs
 */
async function pairingUser() {
    const unpairedUserIDList = getUnpairedUserIDList();
    let selectedPair = [];

    if (unpairedUserIDList.length > 1) {
        selectedPair = await getRandomUserIDList(unpairedUserIDList);
    }
    if (selectedPair.length) {
        delete unpairedUser[selectedPair[0]];
        delete unpairedUser[selectedPair[1]];

        const conversation = await libKakaoWork.openConversations({ userId: selectedPair[0] });
        let message = {
            conversationId: conversation.id,
            text: '가랏!',
            blocks: customModals.pairingServiceModal.blocks,
        };
        message.blocks[2].text =
            serviceRegisteredUser[selectedPair[1]].name + ' 님의 일일 거북씨 입니다.';
        libKakaoWork.sendMessage(message);
    }
}

//Run functions every interval
setInterval(pairingUser, 10000);
setInterval(processUpdateTime, 10000);

module.exports.checkAndAppendUser = checkAndAppendUser;
module.exports.deleteUser = deleteUser;
module.exports.updateNextTime = updateNextTime;