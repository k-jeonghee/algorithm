//https://school.programmers.co.kr/learn/courses/30/lessons/42583

export function solution(
    bridge_length: number,
    weight: number,
    truck_weights: number[],
) {
    let sec = 0;
    let sum = 0;
    const trucks: number[][] = [];

    while (truck_weights.length || trucks.length) {
        const frontTruck = truck_weights[0];
        //대기중인 트럭이 있다면 올릴 수 있는지 조건 확인 후 가능하면 올리기
        if (
            frontTruck &&
            weight >= sum + frontTruck &&
            bridge_length >= trucks.length
        ) {
            const truckWeight = truck_weights.shift()!;
            sum += truckWeight;
            trucks.push([truckWeight, sec + bridge_length]);
            sec++;
        }
        //대기중인 트럭이 없거나 올릴 수 없으면 다리 위 트럭을 내리기
        else {
            const [passedTruckWeight, passedSec] = trucks.shift()!;
            if (sec < passedSec) sec = passedSec;
            sum -= passedTruckWeight;
        }
    }

    return sec + 1; //마지막 트럭이 빠져나가는 시간 +1 추가
}

console.log(solution(2, 10, [7, 4, 5, 6]));
