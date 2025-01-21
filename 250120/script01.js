// 사용자에게 이름, 키, 몸무게의 값을 받아서 사용자가 적정체중인지를 판단한 후 적정체중이라면 "XX님 적정체중입니다!","적정체중"
// 이 아니라면 "XX님 적정체중이 아닙니다!" 메세지를 전달하고 싶습니다.
// 적정체중 계산 공식법

// 적정체중 = (본인키 - 100) * 0.9

// +-5kg 까지는 적정체중 => 초과 || 미달

const userName = prompt("😊 당신의 이름을 알려주세요!");
const userHeight = prompt("😁 당신의 신장을 알려주세요!");
const userWeight = prompt("🤣 당신의 몸무게를 알려주세요!");

const nomalWeight = (userHeight - 100) * 0.9;

console.log(nomalWeight);
let result = nomalWeight >= userWeight - 5 && userWeight <= nomalWeight + 5;
result = result ? `적정체중입니다!` : `적정체중이 아닙니다!`;

alert(`${userName}님 ${result}`);
