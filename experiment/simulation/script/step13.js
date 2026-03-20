

let tbl3 = document.querySelector("#tbl3")
let t0volume = document.querySelector("#t0volume")
let t1volume = document.querySelector("#t1volume")
let t2volume = document.querySelector("#t2volume")
let t3volume = document.querySelector("#t3volume")
let t4volume = document.querySelector("#t4volume")
let stp14 = document.querySelector("#stp14")









let tsampleselector = conical1
let tsamplesolselector = conicalsol1
let ttextselector = t0
let inst = "T0"

let ftext2=1












function funnel2020(){
    if(f==155){
        f=156
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
                f=157
                ins.innerText="Click on "+inst+" conical flask to pour its solution into burette."
            },1000)
        },1000)
    }
    else if(f==159){
        f=160
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
                f=161
                ins.innerText="Click on conical flask to place it on HOT plate and heat the solution."
            },1000)
        },1000)
    }
}




function pourtsample(){
    if(f==157){
        f=158
        tsampleselector.style.top="3%"
        tsamplesolselector.style.bottom="72%"
        ttextselector.style.top="13%"
        setTimeout(function(){
            tsampleselector.style.left="17%"
            tsamplesolselector.style.left="17%"
            ttextselector.style.left="19%"
            setTimeout(function(){
                tsampleselector.style.rotate="-40deg"
                tsamplesolselector.style.rotate="-40deg"
                ttextselector.style.rotate="-40deg"
                ttextselector.style.left="19.5%"
                tsamplesolselector.style.left="18.5%"
                tsamplesolselector.style.bottom="73.3%"
                eburette2.style.opacity="0%"
                burettef2.src="images/filling-Burette1.png"
                burettef2.style.opacity="100%"
                bsol2.src="images/Burette-solution.png"
                setTimeout(function(){
                    bsol2.style.height="21.1%"
                    tsamplesolselector.style.opacity="0%"
                    setTimeout(function(){
                        tsampleselector.style.rotate="0deg"
                        tsamplesolselector.style.rotate="0deg"
                        ttextselector.style.rotate="0deg"
                        ttextselector.style.left="19%"
                        setTimeout(function(){
                            tsampleselector.style.left="60%"
                            tsamplesolselector.style.left="60%"
                            ttextselector.style.left="62%"
                            setTimeout(function(){
                                tsampleselector.style.top="65%"
                                tsamplesolselector.style.bottom="10%"
                                ttextselector.style.top="75%"
                                f=159
                                funnel2020()
                                setTimeout(function(){
                                    tsampleselector.style.opacity="0%"
                                    tsamplesolselector.style.opacity="0%"
                                    ttextselector.style.opacity="0%"
                                    setTimeout(function(){
                                        tsampleselector.style.visibility="hidden"
                                        tsamplesolselector.style.visibility="hidden"
                                        ttextselector.style.visibility="hidden"
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    }

}





let tvol1 = 36

let tvolumeselector = t0volume
let bsolheight = 21.1

function titration5(){
    if(f==163){
        f=164
        droppink.src="images/drop-light-blue.png"
        droppink.style.transitionDuration="1s"
        droppink.style.visibility="visible"
        droppink.style.top="80%"
        bsolheight-=0.42
        bsol2.style.height=(bsolheight+"%")
        tvolumeselector.innerText=parseInt(tvolumeselector.innerText)+1
        // console.log(bsolheight)
        // console.log(bsol2.style.height)
        // console.log(tvoltext.innerText)
        setTimeout(function(){
            droppink.style.transitionDuration="0s"
            droppink.style.visibility="hidden"
            droppink.style.top="60%"
            // if(tsampleselector==conical1){
                // console.log(tvol1-6)
                
                if(tvolumeselector.innerText==(tvol1-6)){
                    // console.log("exe")
                    f=165
                    ins.innerText="Click on Methylene Blue indicator bottle to add few drops of indicator into Fehling's mixtue."
                }
                else{
                    f=163
                    ins.innerText="titrate more"
                }
            // }



        },500)
    }
    else if(f==167){
        f=168
        tvol-=0.8
        droppink.style.transitionDuration="1s"
        droppink.style.visibility="visible"
        droppink.style.top="80%"
        bsolheight-=0.42
        bsol2.style.height=(bsolheight+"%")
        tvolumeselector.innerText=parseInt(tvolumeselector.innerText)+1
        setTimeout(function(){
            droppink.style.transitionDuration="0s"
            droppink.style.visibility="hidden"
            droppink.style.top="60%"
            // console.log(tvol)
            if(tvolumeselector.innerText==tvol1){
                f=169
                ins.innerText="Note down the volume of solution used to titrate the Fehling's mixture. Then press NEXT button to titrate another sample."
                if(sconicalselector==sconical5){
                    ins.innerText="Note down the volume of solution used to titrate the Fehling's mixture. Then press NEXT button to see calculations and formula."
                }
                startbutton.style.visibility="visible"
                solblue.style.opacity="0%"
                solbrick.style.opacity="100%"
                setTimeout(function(){
                    sconicalsolselector.style.visibility="hidden"
                },1000)
            }
            else{
                f=167
                ins.innerText="titrate more !!"

            }
        },500)
    }
}


function methyle1(){
    if(f==165){
        f=166
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
                        sconicalsolselector.style.opacity="0%"
                        solblue.style.opacity="100%"
                        mcap.style.top="30%"
                        mcap.style.rotate="0deg"
                        mcap.style.left="40%"
                        dropblue.style.transitionDuration="0s"
                        dropblue.style.visibility="hidden"
                        dropblue.style.top="60%"
                        setTimeout(function(){
                            mcap.style.left="50.9%"
                            // sol20ml.style.visibility="hidden"
                            setTimeout(function(){
                                mcap.style.top="63.9%"
                                f=167
                                ins.innerText="Again titrate the solution until you get a redish brick colour."
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    }
}




function conicalflasklast(){
    if(f==161){
        f=162
        sconicalselector.style.top="25%"
        sconicalsolselector.style.bottom="40%"
        setTimeout(function(){
            sconicalselector.style.left="30.5%"
            sconicalselector.style.scale="0.6"
            sconicalsolselector.style.scale="0.6"
            sconicalsolselector.style.left="30.5%"
            sconicalsolselector.style.bottom="46.1%"
            setTimeout(function(){
                sconicalselector.style.top="52%"
                sconicalsolselector.style.bottom="19.1%"
                burettef2.style.top="-16.5%"
                bsol2.style.bottom="69.6%"
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
                            f=163
                            tbl3.style.visibility="visible"
                            ins.innerText="Click on burette nob to titrate the solution below burette."
                        },5000)
                    },1000)
                },1000)
            },1000)
        },1000)
    }
}




function titrantchange(){
    if(f==170){
        f=171
        bstand2.style.top=""
        burettef2.style.top="-16.5%"
        bsol2.style.bottom="69.6%"
        setTimeout(function(){
            bstand2.style.left="-50%"
            burettef2.style.left="-50%"
            bsol2.style.left="-50%"
            eburette2.style.left="-50%"
            sconicalselector.style.top="25%"
            sconicalsolselector.style.bottom="46.1%"
            solbrick.style.bottom="46.1%"
            setTimeout(function(){
                bsol2.style.height=""
                bsol2.style.bottom=""
                burettef2.style.opacity=""
                burettef2.style.top=""
                eburette2.style.opacity=""
                eburette2.style.top=""
                sconicalselector.style.left="110%"
                sconicalsolselector.style.left="110%"
                solbrick.style.left="110%"
                setTimeout(function(){
                    bsol2.style.left=""
                    eburette2.style.left=""
                    burettef2.style.left=""
                    bstand2.style.left=""
                    solbrick.style.opacity=""
                    titrantverify()
                    setTimeout(function(){
                        solbrick.style.left="30.5%"
                        solbrick.style.height="4.5%"
                        solbrick.style.bottom="19.1%"
                        solbrick.style.width="11%"
                        // sconicalsolselector.style.opacity="100%"
                        // sconicalsolselector.style.transitionDuration="1s"
                        setTimeout(function(){
                            sconicalselector.style.left="80%"
                            sconicalsolselector.style.left="80%"
                            // console.log(sconicalsolselector.style.left)
                            // console.log(sconicalselector.style.left)
                            tsampleselector.style.left="60%"
                            tsamplesolselector.style.left="60%"
                            ttextselector.style.left="62%"
                            ins.innerText="click on funnel to place it on burette."
                            f=155
                            if(sconicalselector=="none"){
                                f=180
                                ins.innerText="Check your 'Reducing sugar(%)' value and match your answer."
                            }
                            setTimeout(function(){

                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    }
}



function titrantverify(){
    if(sconicalselector==sconical1){
        sconicalselector=sconical2
        sconicalsolselector=sconicalsols2
        tvolumeselector = t1volume
        tsampleselector = conical2
        tsamplesolselector = conicalsol2
        ttextselector = t1
        bsolheight=21.1
        tvol1=27
        inst="T1"
        sconicalselector.style.visibility="visible"
        sconicalsolselector.style.opacity="100%"
    }
    else if(sconicalselector==sconical2){
        sconicalselector=sconical3
        sconicalsolselector=sconicalsols3
        tvolumeselector = t2volume
        tsampleselector = conical3
        tsamplesolselector = conicalsol3
        ttextselector = t2
        bsolheight=21.1
        tvol1=19
        inst="T2"
        sconicalselector.style.visibility="visible"
        sconicalsolselector.style.opacity="100%"
    }
    else if(sconicalselector==sconical3){
        sconicalselector=sconical4
        sconicalsolselector=sconicalsols4
        tvolumeselector = t3volume
        tsampleselector = conical4
        tsamplesolselector = conicalsol4
        ttextselector = t3
        bsolheight=21.1
        tvol1=15
        inst="T3"
        sconicalselector.style.visibility="visible"
        sconicalsolselector.style.opacity="100%"
    }
    else if(sconicalselector==sconical4){
        sconicalselector=sconical5
        sconicalsolselector=sconicalsols5
        tvolumeselector = t4volume
        tsampleselector = conical5
        tsamplesolselector = conicalsol5
        ttextselector = t4
        bsolheight=21.1
        tvol1=13
        inst="T4"
        sconicalselector.style.visibility="visible"
        sconicalsolselector.style.opacity="100%"
    }
    else if(sconicalselector==sconical5){
        sconicalselector="none"
        bstand2.style.visibility="hidden"
        funnel2.style.visibility="hidden"
        eburette2.style.visibility="hidden"
        burettef2.style.visibility="hidden"
        nob2.style.visibility="hidden"
        bsol2.style.visibility="hidden"
        sconicalselector.visibility="hidden"
        sconicalsolselector.style.visibility="hidden"
        tsampleselector.style.visibility="hidden"
        tsamplesolselector.style.visibility="hidden"
        ttextselector.style.visibility="hidden"
        hotplate.style.visibility="hidden"
        mcap.style.visibility="hidden"
        mbottle.style.visibility="hidden"
        tbl3.style.visibility="hidden"
        setTimeout(function(){
            stp14.style.visibility="visible"
            ins.innerText="Enter your calculated value and match your results."
        },1000)
    }

}



let formulaimage2 = document.querySelector("#formulaimage2")
let formulatext2 = document.querySelector("#formulatext2")
let ansverify2 = document.querySelector("#ansverify2")
let rsugarinput = document.querySelector("#rsugarinput")
// let ffactorresult = document.querySelector("#ffactorresult")
let resulttext2 = document.querySelector("#resulttext2")









function formulating2(){
    if(ftext2==1){
        formulaimage2.style.height="20%"
        formulatext2.innerText="Click me to hide formula"
        formulatext2.style.color="red"
        ftext2-=1
    }
    else if(ftext2==0){
        formulaimage2.style.height="0%"
        formulatext2.innerText="Click me to see formula"
        formulatext2.style.color="blue"
        ftext2+=1
    }
}


let reducingsugar = 0.208
let tablevalue1 = "#v1"

function checker2(){
    if(rsugarinput.value==reducingsugar){
        ansverify2.style.visibility="visible"
        ansverify2.style.color="green"
        ansverify2.innerText="Right answer"
        resulttext2.style.visibility="hidden"
        document.querySelector(tablevalue1).innerText=reducingsugar
        rsugarverify()
    }
    else{
        ansverify2.style.visibility="visible"
        ansverify2.style.color="red"
        ansverify2.innerText="Wrong answer"
        resulttext2.style.visibility="visible"
    }
}

function resulter2(){
    if(ansverify2.innerText=="Wrong answer"){
        ansverify2.style.visibility="hidden"
        ansverify2.innerText="Right answer"
        ansverify2.style.color="green"
        resulttext2.style.visibility="hidden"
        document.querySelector(tablevalue1).innerText=reducingsugar
        rsugarverify()
    }
}

function rsugarverify(){
    if(reducingsugar==0.208){
        ins.innerText="Enter value for T1 sample."
        rsugarinput.value=""
        rsugarinput.placeholder="T1"
        reducingsugar=0.278
        tablevalue1="#v2"

    }
    else if(reducingsugar==0.278){
        ins.innerText="Enter value for T2 sample."
        rsugarinput.value=""
        rsugarinput.placeholder="T2"
        reducingsugar=0.395
        tablevalue1="#v3"
    }
    else if(reducingsugar==0.395){
        ins.innerText="Enter value for T3 sample."
        rsugarinput.value=""
        rsugarinput.placeholder="T3"
        reducingsugar=0.500
        tablevalue1="#v4"
    }
    else if(reducingsugar==0.500){
        ins.innerText="Enter value for T4 sample."
        rsugarinput.value=""
        rsugarinput.placeholder="T4"
        reducingsugar=0.577
        tablevalue1="#v5"
    }
    else if(reducingsugar==0.577){
        f=200
        ins.innerText="Press Inference button to see the Inference of this experiment."
        startbutton.innerText="Inference"
        startbutton.style.visibility="visible"

    }

}



function setThreeNumberDecimal(event){
    document.querySelector("#rsugarinput").value = parseFloat(document.querySelector("#rsugarinput").value).toFixed(3);
}






