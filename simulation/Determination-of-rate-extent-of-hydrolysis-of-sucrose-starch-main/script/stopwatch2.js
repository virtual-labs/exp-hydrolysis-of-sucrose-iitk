let minute2 = 0; 
let second2 = 0; 
// let running2 = false
// let timer

function startBtntimer2() { 
    timer2 = true; 
    stopWatch2(); 
}
  
function stopBtn2() { 
    timer2 = false; 
}
  
function resetBtn2() { 
    timer2 = false; 
    minute2 = 0; 
    second2 = 0; 
    document.getElementById('min2').innerHTML = "00"; 
    document.getElementById('sec2').innerHTML = "00"; 
}
  
function stopWatch2() { 
    // running2 = true
    if (timer2) { 
        second2++; 
  
  
        if (second2 == 60) { 
            minute2++; 
            second2 = 0; 
        } 
  
        if (minute2 == 60) { 
            minute2 = 0; 
            second2 = 0; 
        } 
  
        let min2String = minute2; 
        let sec2String = second2; 
  
  
        if (minute2 < 10) { 
            min2String = "0" + min2String; 
        } 
  
        if (second2 < 10) { 
            sec2String = "0" + sec2String; 
        } 
        
        
        document.getElementById('min2').innerHTML = min2String; 
        document.getElementById('sec2').innerHTML = sec2String; 
        if(f<=125 || f==5002 || f==1003 || f==2000){
            if(minute2==10 && second2==0){
                stopBtn2()
                alert("10 minutes completed !!");
                ins.innerText="Click on measuring cylinder."
                f=123
                if(amylasepour=="none"){
                    startbutton.style.visibility="visible"
                    ins.innerText="Click on alpha amylase bottle's cap."
                    f=1002
                }
            }
        }
        else if(f==130){    //should be changed f== condition 
            if(minute2==5 && second2==0){
                stopBtn2()
                alert("5 minutes completed !!");
                ins.innerText="Press power button on HOT plate to power off it."
                f=131
            }
        }
        setTimeout(stopWatch2, 40); 
    } 
}