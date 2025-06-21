var gSize = 150

function onBallClick(elBall){
    if(elBall.style.width === '400px') {
        elBall.style.width = '100px'
        elBall.style.height = '100px'
    }
    else{
        console.log(elBall.style)
            elBall.style.width =  `${gSize}px`
            elBall.style.height =  `${gSize}px`
            gSize += 50
    }
    

}