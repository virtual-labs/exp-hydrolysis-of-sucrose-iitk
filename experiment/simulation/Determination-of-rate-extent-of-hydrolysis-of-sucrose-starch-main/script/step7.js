let eburette2 = document.querySelector("#eburette2")
let burettef2 = document.querySelector("#burettef2")
let bsol2 = document.querySelector("#bsol2")
let bstand2 = document.querySelector("#bstand2")
let nob2 = document.querySelector("#nob2")
let mcap = document.querySelector("#mcap")
let dropblue = document.querySelector("#dropblue")
let droppink = document.querySelector("#droppink")
let solblue = document.querySelector("#solblue")
let solbrick = document.querySelector("#solbrick")
let tbl1 = document.querySelector("#tbl1")
let tvoltext = document.querySelector("#tvoltext")
let calculation1 = document.querySelector("#calculation1")
let formulaimage = document.querySelector("#formulaimage")
let formulatext = document.querySelector("#formulatext")
let ansverify = document.querySelector("#ansverify")
let ffactorinput = document.querySelector("#ffactorinput")
let ffactorresult = document.querySelector("#ffactorresult")
let resulttext1 = document.querySelector("#resulttext1")








function funnel1010(){
    if(f==82){
        f=83
        funnel2.style.top="0%"
        funnel2.style.rotate="0deg"
        setTimeout(function(){
            funnel2.style.left="11.95%"
            eburette2.style.top="15%"
            burettef2.style.top="15%"
            setTimeout(function(){
                funnel2.style.top="7.3%"
                eburette2.style.top="13%"
                burettef2.style.top="13%"
                f=84
                ins.innerText="Click on volumetric flask to pour its solution into burette."
            },1000)
        },1000)
    }
    else if(f==86){
        f=87
        funnel2.style.top="0%"
        eburette2.style.top="15%"
        burettef2.style.top="15%"
        bsol2.style.bottom="38.1%"
        setTimeout(function(){
            funnel2.style.left="70%"
            setTimeout(function(){
                funnel2.style.rotate="60deg"
                funnel2.style.top="80%"
                eburette2.style.top="0%"
                burettef2.style.top="0%"
                bsol2.style.bottom="53.1%"
                f=88
                ins.innerText="Click on conical flask to place it on HOT plate and heat the solution."
            },1000)
        },1000)
    }
}





function sugarsol(){
    if(f==84){
        f=85
        v100.style.bottom="60%"
        vsol100.style.bottom="60%"
        setTimeout(function(){
            v100.style.left="18%"
            vsol100.style.left="18%"
            setTimeout(function(){
                v100.style.rotate="-45deg"
                vsol100.style.rotate="-45deg"
                vsol100.style.left="20.15%"
                vsol100.style.bottom="62.2%"
                eburette2.style.opacity="0%"
                burettef2.style.opacity="100%"
                setTimeout(function(){
                    bsol2.style.height="42.1%"
                    setTimeout(function(){
                        vsol100.style.opacity="0%"
                        setTimeout(function(){
                            v100.style.rotate="0deg"
                            setTimeout(function(){
                                v100.style.left="60%"
                                setTimeout(function(){
                                    v100.style.bottom="10%"
                                    vsol100.style.visibility="hiddem"
                                    f=86
                                    ins.innerText="Click on funnel to remove it from the burette."
                                    setTimeout(function(){
                                        v100.style.opacity="0%"
                                        setTimeout(function(){
                                            v100.style.visibility="hidden"
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },500)
                },1000)
            },1000)
        },1000)
    }
}


function cone20(){
    if(f==88){
        f=89
        cflask100.style.top="20%"
        sol20ml.style.bottom="40%"
        setTimeout(function(){
            cflask100.style.left="30.5%"
            cflask100.style.scale="0.6"
            sol20ml.style.scale="0.6"
            sol20ml.style.left="30.6%"
            sol20ml.style.bottom="47.1%"
            setTimeout(function(){
                cflask100.style.top="47%"
                sol20ml.style.bottom="20.1%"
                burettef2.style.top="-16.5%"
                bsol2.style.bottom="61.6%"
                setTimeout(function(){
                    bstand2.style.left="26%"
                    burettef2.style.left="34%"
                    bsol2.style.left="34.8%"
                    setTimeout(function(){
                        bstand2.style.top="25%"
                        burettef2.style.top="-5%"
                        bsol2.style.bottom="58.1%"
                        ins.innerText="Solution is heating ! Please wait !! "
                        setTimeout(function(){
                            f=90
                            tbl1.style.visibility="visible"
                            ins.innerText="Click on burette nob to titrate the solution below burette."
                        },5000)
                    },1000)
                },1000)
            },1000)
        },1000)
    }
}


let tvol = 41.2


function titration2(){
    if(f==90){
        f=91
        droppink.style.transitionDuration="1s"
        droppink.style.visibility="visible"
        droppink.style.top="80%"
        tvol-=0.41
        bsol2.style.height=tvol+"%"
        tvoltext.innerText=parseInt(tvoltext.innerText)+1
        // console.log(tvoltext.innerText)
        setTimeout(function(){
            droppink.style.transitionDuration="0s"
            droppink.style.visibility="hidden"
            droppink.style.top="60%"
            if((tvoltext.innerText)==11){
                // tvol-=0.8
                f=92
                ins.innerText="Click on Methylene Blue indicator bottle to add few drops of indicator into Fehling's mixtue."
            }
            else{
                f=90
                ins.innerText="Titrate more !!"
            }
        },500)
    }
    else if(f==94){
        f=95
        tvol-=0.41
        droppink.style.transitionDuration="1s"
        droppink.style.visibility="visible"
        droppink.style.top="80%"
        bsol2.style.height=tvol+"%"
        tvoltext.innerText=parseInt(tvoltext.innerText)+1
        setTimeout(function(){
            droppink.style.transitionDuration="0s"
            droppink.style.visibility="hidden"
            droppink.style.top="60%"
            if((tvoltext.innerText==15)){
                f=96
                solblue.style.opacity="0%"
                solbrick.style.opacity="100%"
                setTimeout(function(){
                    solblue.style.visibility="hidden"
                },1000)
                ins.innerText="Note down the volume of solution used to titrate the Fehling's mixture. Then press NEXT button"
                startbutton.style.visibility="visible"
            }
            else{
                f=94
                ins.innerText="titrate more !!"

            }
        },500)
    }
}


function methyle(){
    if(f==92){
        f=93
        mcap.style.top="30%"
        setTimeout(function(){
            mcap.style.left="40%"
            setTimeout(function(){
                mcap.style.rotate="35deg"
                mcap.style.left="37%"
                mcap.style.top="35%"
                setTimeout(function(){
                    dropblue.style.transitionDuration="1s"
                    dropblue.style.visibility="visible"
                    dropblue.style.top="80%"
                    setTimeout(function(){
                        sol20ml.style.opacity="0%"
                        solblue.style.opacity="100%"
                        mcap.style.top="30%"
                        mcap.style.rotate="0deg"
                        mcap.style.left="40%"
                        dropblue.style.transitionDuration="0s"
                        dropblue.style.visibility="hidden"
                        dropblue.style.top="60%"
                        setTimeout(function(){
                            mcap.style.left="50.9%"
                            sol20ml.style.visibility="hidden"
                            setTimeout(function(){
                                mcap.style.top="63.9%"
                                f=94
                                ins.innerText="Again titrate the solution until you get a redish brick colour."
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    }
}

let ftext=1


function formulating(){
    if(ftext==1){
        formulaimage.style.height="15%"
        formulatext.innerText="Click me to hide formula"
        formulatext.style.color="red"
        ftext-=1
    }
    else if(ftext==0){
        formulaimage.style.height="0%"
        formulatext.innerText="Click me to see formula"
        formulatext.style.color="blue"
        ftext+=1
    }
}

function checker1(){
    if(ffactorinput.value==0.0375){
        ansverify.style.visibility="visible"
        ansverify.style.color="green"
        ansverify.innerText="Right answer"
        resulttext1.style.visibility="hidden"
        ffactorresult.innerText="Fehling factor = 0.0375"
        ins.innerText="Press NEXT button"
        startbutton.style.visibility="visible"
        f=98
    }
    else{
        ansverify.style.visibility="visible"
        ansverify.style.color="red"
        ansverify.innerText="Wrong answer"
        resulttext1.style.visibility="visible"
    }
}

function resulter(){
    if(ansverify.innerText=="Wrong answer"){
        ansverify.style.visibility="hidden"
        ansverify.innerText="Right answer"
        ansverify.style.color="green"
        resulttext1.style.visibility="hidden"
        ffactorresult.innerText="Fehling factor = 0.0375"
        ins.innerText="Press NEXT button"
        startbutton.style.visibility="visible"
        f=98
    }
}


function setFourNumberDecimal(event){
    document.querySelector("#ffactorinput").value = parseFloat(document.querySelector("#ffactorinput").value).toFixed(4);
}

