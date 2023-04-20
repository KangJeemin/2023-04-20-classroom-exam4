function exampleOne(first,second,dataType){
    if(typeof(first)!== dataType && typeof(second) !== dataType){
        return new Error(`매개변수 first, second는 모두 ${dataType} 타입이어야 합니다.`);
    }
}

function arrayLengthEven(array){
    if(array.length % 2 ===0){
        return true;
    }
    else{
        return false;
    }
}

function isExampleTwo(first,second) {
    //* exampleOne()함수를 호출하여 타입 검사를 따로 한다.
    //* 타입검사가 실패하면 에러를 발생시켜 함수가 실행되지 않도록 조치합니다.
    exampleOne(first,second);
    if(typeof exampleOne ==="obejct"){
        break isExampleTwo;
    }

    let booleanResult;

    if(first < second){
        booleanResult = true;
    }
    else {
        booleanResult = false;
    }

    if(typeof(booleanResult) === 'boolean') {
        return booleanResult;
    }
    else {
        return new Error("조건식이 boolean이 아니어서 리턴 하지 못헀습니다.")
    }
}

let basicData = [4,6,23,5,94,35,44,66]

function exampletThree(array,functionOne,functionTwo) {
    let arrayResult =[[null,null][null,null][null,null][null,null]]

    if(typeof functionOne !=="function" && typeof functionTwo !=="function" && typeof array !=="object"){
        array.forEach(element => {
            if(typeof element !=="number"){
                console.log("배열의 중 정수가 아닌 것이 있습니다.")
                return;
            }
        })
        console.log("매개변수가 함수가 아닌 것이 존재.")
    }
    else{
        if(array.length%2 ==1){
            array.push("10");[]
            for(let i=0;i<array.length/2;i++){
               if(array[2*i-1]>array[2*i+1]){
                   arrayResult.push(new Array(array[0],array[1])) 
                }
             else{
                    arrayResult.push(new Array(array[1],array[0])) 
                }
             }
        }

    }
    //*매개변수 인자로 들어오는 함수 두개는 데이터타입이 모두 함수 여야 함
    //*매개변수 array의 모든 원소는 숫자 정수여야 함
    //*매개변수 array의 배열 길이(length)는 짝수여야 함, 홀수라면 10을 추가하여 짝수로 만듬


    return arrayResult

}

console.log(exampleThree(basicData,exampleOne,isExampleTwo))

// 난이도가 조금 있는 것 같습니다. 소요 시간은 1시간 30분 정도 걸렸습니다. 비록 완성은 못 하였지만 꼭 완성 해보고 싶고, 머리가 맑았을떄 다시 도전 해 보고 싶습니다