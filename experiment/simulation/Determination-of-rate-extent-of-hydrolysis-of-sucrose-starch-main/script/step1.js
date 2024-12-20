let on = document.querySelector("#on")
let tare = document.querySelector("#tare")
let reading = document.querySelector("#reading")
let spatula = document.querySelector("#spatula")
let cap = document.querySelector("#cap")
let cflask = document.querySelector("#cflask")
let v250 = document.querySelector("#v250")
let funnel4 = document.querySelector("#funnel4")




let powder = document.querySelector("#sample1")


let powderleft = "9%"





function on1(){
    if(f==1){
        reading.style.opacity="100%"
        f=2
        ins.innerText="Click on empty conical flask to place it on weighing scale."
    }
    else if(f==99){
        f=100
        reading.style.opacity="100%"
        ins.innerText="Click on volumetric flask to place it on weighing machine."
    }
}



function tare1(){
    if(f==4){
        f=5
        reading.innerText="00.00"
        ins.innerText="Click on 'SUCROSE' container's cap to open it."
    }
    else if(f==104){
        f=105
        reading.innerText="00.00"
        ins.innerText="Click on 'SUCROSE' container's cap to open it."
    }
}



function flask(){
    if(f==2){
        f=3
        cflask.style.top="35%"
        setTimeout(function(){
            cflask.style.left="8%"
            setTimeout(function(){
                cflask.style.top="44%"
                setTimeout(function(){
                    reading.innerText="58.30"
                    ins.innerText="Tare the weighing scale !!!"
                    f=4
                },1000)
            },1000)
        },1000)
    }
    else if(f==9){
        f=10
        cflask.style.top="35%"
        powder.style.top="61.8%"
        reading.innerText="-58.30"
        setTimeout(function(){
            cflask.style.left="70%"
            powder.style.left="71%"
            setTimeout(function(){
                cflask.style.top="60%"
                powder.style.top="86.8%"
                setTimeout(function(){
                    f=11
                    ins.innerText="Click on SUCROSE container's cap to close the container."
                },1000)
            },1000)
        },1000)
    }
}










function cap1(){
    if(f==5){
        f=6
        cap.style.top="58%"
        setTimeout(function(){
            cap.style.left="42%"
            setTimeout(function(){
                cap.style.top="85%"
                ins.innerText="Click on Spatula and weigh 4.75g sucrose."
                f=7
            },1000)
        },1000)
    }
    else if(f==11){
        f=12
        cap.style.top="58%"
        setTimeout(function(){
            cap.style.left="31.3%"
            setTimeout(function(){
                cap.style.top="63.5%"
                startbutton.innerText="Next"
                startbutton.style.visibility="visible"
                ins.innerText="Click on next button"
                f=20
            },1000)
        },1000)
    }
    else if(f==105){
        f=106
        cap.style.top="58%"
        setTimeout(function(){
            cap.style.left="38.5%"
            setTimeout(function(){
                cap.style.top="90%"
                ins.innerText="Click on Spatula and weigh 1.25g sucrose."
                f=107
            },1000)
        },1000)
    }
}






function spatula1(){
    if(f==7){
        f=8
        spatula.style.rotate="0deg"
        spatula.style.top="40%"
        spatula.style.left="20%"
        setTimeout(function(){
            spatula.style.left="33%"
            setTimeout(function(){
                spatula.style.top="50%"
                spatula.style.rotate="-20deg"
                spatula.style.left="31.5%"
                setTimeout(function(){
                    spatula.style.top="27%"
                    spatula.style.rotate="0deg"
                    spatula.style.left="33%"
                    powder.style.top="39.6%"
                    powder.style.left="32.9%"
                    powder.style.rotate="-35deg"
                    setTimeout(function(){
                        spatula.style.left="11%"
                        powder.style.left="10.9%"
                        setTimeout(function(){
                            spatula.style.rotate="-20deg"
                            spatula.style.left="9.5%"
                            powder.style.rotate="0deg"
                            powder.style.top="70.8%"
                            powder.style.left=powderleft
                            powder.style.height="4%"
                            powder.style.width="4.3%"
                            setTimeout(function(){
                                reading.innerText="04.75"
                                spatula.style.rotate="0deg"
                                spatula.style.left="15%"
                                setTimeout(function(){
                                    spatula.style.left="15%"
                                    spatula.style.top="83%"
                                    spatula.style.rotate="30deg"
                                    ins.innerText="click on flask to place it on its previous place."
                                    f=9
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1500)
            },1000)        
        },1000)
    }
    else if(f==107){
        f=108
        spatula.style.rotate="0deg"
        spatula.style.top="40%"
        spatula.style.left="20%"
        setTimeout(function(){
            spatula.style.left="33%"
            setTimeout(function(){
                spatula.style.top="50%"
                spatula.style.rotate="-20deg"
                spatula.style.left="31.5%"
                setTimeout(function(){
                    spatula.style.top="14%"
                    spatula.style.rotate="0deg"
                    spatula.style.left="33%"
                    powder.style.top="26.6%"
                    powder.style.left="32.9%"
                    powder.style.rotate="-35deg"
                    setTimeout(function(){
                        spatula.style.left="11%"
                        powder.style.left="10.9%"
                        setTimeout(function(){
                            spatula.style.rotate="-20deg"
                            spatula.style.left="9.5%"
                            powder.style.rotate="0deg"
                            powder.style.top="70.8%"
                            powder.style.left="10%"
                            powder.style.height="4%"
                            // powder.style.width="4.3%"
                            setTimeout(function(){
                                powder.style.width="1%"
                                setTimeout(function(){
                                    powder.style.width="4.3%"
                                },200)
                            },200)
                            setTimeout(function(){
                                reading.innerText="01.25"
                                spatula.style.rotate="0deg"
                                spatula.style.left="15%"
                                setTimeout(function(){
                                    spatula.style.left="15%"
                                    spatula.style.top="83%"
                                    spatula.style.rotate="30deg"
                                    ins.innerText="click on volumetric flask to place it on its previous place along with funnel."
                                    f=109
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1500)
            },1000)        
        },1000)
    }
}



function placevflask(){
    if(f==100){
        f=101
        v250.style.top="15%"
        setTimeout(function(){
            v250.style.left="8%"
            setTimeout(function(){
                v250.style.top="45%"
                setTimeout(function(){
                    reading.innerText="75.50"
                    ins.innerText="Click on funnel to place it on volumetric flask."
                    f=102
                },1000)
            },1000)
        },1000)
    }
    else if(f==109){
        f=110
        cap.style.top="58%"
        v250.style.top="15%"
        funnel4.style.top="8.5%"
        powder.style.top="40.8%"
        reading.innerText="-83.60"
        setTimeout(function(){
            cap.style.left="31.3%"
            v250.style.left="85%"
            funnel4.style.left="86.5%"
            powder.style.left="87%"
            setTimeout(function(){
                cap.style.top="63.5%"
                v250.style.top="60%"
                funnel4.style.top="53.5%"
                powder.style.top="85.8%"
                f=111
                ins.innerText="Click on distilled water bottle to fill volumetric flask up to the mark."
            },1000)
        },1000)
    }
}

function funnel22(){
    if(f==102){
        f=103
        funnel4.style.rotate="0deg"
        funnel4.style.top="10%"
        setTimeout(function(){
            funnel4.style.left="9.5%"
            funnel4.style.scale="1.4"
            setTimeout(function(){
                funnel4.style.top="38.5%"
                setTimeout(function(){
                    f=104
                    reading.innerText="83.60"
                    ins.innerText="Tare the weighing machine"
                },1000)
            },1000)
        },1000)
    }
    else if(f==113){
        f=114
        funnel4.style.top="10%"
        setTimeout(function(){
            funnel4.style.left=""
            funnel4.style.scale="1"
            setTimeout(function(){
                funnel4.style.top=""
                funnel4.style.rotate=""
                f=115
                ins.innerText="Press NEXT button"
                startbutton.style.visibility="visible"
            },1000)
        },1000)
    }
}































