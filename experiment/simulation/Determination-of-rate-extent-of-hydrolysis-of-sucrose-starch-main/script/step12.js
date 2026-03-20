

let sconical1 = document.querySelector("#sconical1")
let sconical2 = document.querySelector("#sconical2")
let sconical3 = document.querySelector("#sconical3")
let sconical4 = document.querySelector("#sconical4")
let sconical5 = document.querySelector("#sconical5")

let sconicalsol1 = document.querySelector("#sconicalsol1")
let sconicalsol2 = document.querySelector("#sconicalsol2")
// let sconicalsol3 = document.querySelector("#sconicalsol3")

let sconicalsols1 = document.querySelector("#sconicalsols1")
let sconicalsols2 = document.querySelector("#sconicalsols2")
let sconicalsols3 = document.querySelector("#sconicalsols3")
let sconicalsols4 = document.querySelector("#sconicalsols4")
let sconicalsols5 = document.querySelector("#sconicalsols5")











let fusolheight = "0%"
// let fusolheight2 = "1%"
let sconicalselector = sconical1
let sconicalsolselector = sconicalsols1
let dwatersol4height="27%"
let dwatersol4left="54.65%"
let dwatersol4bottom="41%"
let dwatersol4left2="54.8%"
let dwatersol4bottom2="40.9%"












function fcap11(){
    if(f==133){
        f=134
        fcapa.style.top="33%"
        setTimeout(function(){
            fcapa.style.left="20%"
            setTimeout(function(){
                fcapa.style.top="87%"
                f=135
                ins.innerText="Click on pipette to take 5 ml Fehling's solution A from the container and pour it in measuring cylinder."
            },1000)
        },1000)
    }
}

function fcap22(){
    if(f==500){
        f=501
        fcapb.style.top="33%"
        setTimeout(function(){
            fcapb.style.left="40%"
            setTimeout(function(){
                fcapb.style.top="87%"
                f=135
                ins.innerText="Click on pipette to take 5 ml Fehling's solution B from the container and pour it in measuring cylinder."
            },1000)
        },1000)
    }
}







function pipette22(){
    if(f==135){
        f=136
        pipette2.style.rotate="0deg"
        pipette2.style.top="0%"
        setTimeout(function(){
            pipette2.style.left=pipleft
            setTimeout(function(){
                pipette2.style.top="20%"
                setTimeout(function(){
                    psol50.style.height="16.2%"
                    fusol.style.height=fusolheight
                    setTimeout(function(){
                        psol50.style.bottom="60%"
                        pipette2.style.top="0%"
                        setTimeout(function(){
                            psol50.style.left="67.9%"
                            pipette2.style.left="66.5%"
                            setTimeout(function(){
                                psol50.style.bottom="40%"
                                pipette2.style.top="20%"
                                setTimeout(function(){
                                    ms3.style.height="28%"
                                    setTimeout(function(){
                                        psol50.style.height="0%"
                                        msol10.style.height="16.4%"
                                        setTimeout(function(){
                                            ms3.style.height="0%"
                                            ms3.style.top="72.5%"
                                            setTimeout(function(){
                                                pipette2.style.top="0%"
                                                setTimeout(function(){
                                                    pipette2.style.left="63.1%"
                                                    setTimeout(function(){
                                                        pipette2.style.top="72%"
                                                        pipette2.style.rotate="-85deg"
                                                        ms3.style.top="60%"
                                                        
                                                        f=137
                                                        ins.innerText="Click on measuring cylinder to pour this solution into conical flask."
                                                        // pipverify10()
                                                    },1000)
                                                },1000)
                                            },200)
                                        },800)
                                    },200)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    }
}

// function pipverify10(){
// if(fcapselect==fcapa){
//     fcapselect=fcapb
//     fcapleft="30.5%"
//     pipleft="32%"
//     fusol=fusol2
//     psol50.src="images/pippete-solution50ml-grey.png"
//     // msol10.src="images/fehling solution-middle-grey.png"
// }
// else if(fcapselect==fcapb){
//     fcapselect=fcapa
//     psol50.src="images/pippete-solution50ml-blue.png"
//     // msol10.src="images/fehling solution-middle.png"
// }
// }


function mcylpour22(){
    if(f==137){
        f=138
        mcyl10.style.top="30%"
        msol10.style.bottom="31.33%"
        setTimeout(function(){
            mcyl10.style.left="74.5%"
            msol10.style.left="75.9%"
            setTimeout(function(){
                mcyl10.style.rotate="40deg"
                msol10.style.rotate="40deg"
                msol10.style.bottom=measurebottom
                msol10.style.left=measureleft
                ms3.style.left="84.2%"
                ms3.style.top="38%"
                setTimeout(function(){
                    ms3.style.height="50%"
                    setTimeout(function(){
                        msol10.style.height="0%"
                        msol10.style.bottom="36.1%"
                        msol10.style.left="71%"
                        solhide.style.opacity="0%"
                        solshow.style.opacity="100%"
                        setTimeout(function(){
                            ms3.style.height="0%"
                            ms3.style.top="88%"
                            setTimeout(function(){
                                mcyl10.style.rotate="0deg"
                                msol10.style.rotate="0deg"
                                setTimeout(function(){
                                    mcyl10.style.left="65%"
                                    msol10.style.left="66.4%"
                                    setTimeout(function(){
                                        mcyl10.style.top="50%"
                                        msol10.style.bottom="11.33%"
                                        ms3.style.top="60%"
                                        ms3.style.left="68.1%"
                                        f=139
                                        // console.log(solshow,solhide)
                                        solutionverify()
                                        // console.log(solshow,solhide)
                                    },1000)
                                },1000)
                            },1000)
                        },800)
                    },200)
                },1000)
            },1000)
        },1000)
    }
}


let solutiontrial = 0
let fusolchange = fusol2

function solutionverify(){
    console.log("executed1")
    if(solshow==sconicalsol1){
        solshow=sconicalsol2
        solhide=sconicalsol1
        psol50.style.bottom="40%"
        psol50.style.left="33.4%"
        pipleft="32%"
        psol50.src="images/pippete-solution50ml-grey.png"
        msol10.src="images/fehling solution-middle-grey.png"
        fusol=fusolchange
        f=135
        ins.innerText="Click on pipette to measure 5ml of Fehling's solution B and pour into measuring cylinder."
        if((fcapb.style.top)!="87%"){
            f=500
            ins.innerText="Click on fehling's solution B container's cap."                         
        }
        
    }
    else if(solshow==sconicalsol2){
        solshow=sconicalsolselector
        solhide=sconicalsol2
        f=140
        ins.innerText="Click on distilled water bottle to measure 10ml of distilled water."
        msol10.src="images/measuring-cylinder-solution.png"

    }
    else if(solshow==sconicalsolselector){
        solshow=sconicalsol1
        solhide=sconicalsol1
        psol50.style.bottom=""
        psol50.style.left=""
        pipleft = "12%"
        f=150
        console.log("executed")
        startbutton.style.visibility="visible"
        
        psol50.src="images/pippete-solution50ml.png"
        msol10.src="images/measuring-cylinder-solution.png"
        measureleft = "73%"
        measurebottom = "33.7%"
        if(sconicalselector==sconical1){
            ins.innerText="Press NEXT button to prepare second sample."
        }
        else if(sconicalselector==sconical2){
            ins.innerText="Press NEXT button to prepare third sample."
        }
        else if(sconicalselector==sconical3){
            ins.innerText="Press NEXT button to prepare fourth sample."
        }
        else if(sconicalselector==sconical4){
            ins.innerText="Press NEXT button to prepare fifth sample."
        }
        else if(sconicalselector==sconical5){
            ins.innerText="Press NEXT button."
            f=151
        }
        
    }
}



function flaskchange(){
    sconicalselector.style.left="110%"
    sconicalsolselector.style.left="110%"
    setTimeout(function(){
        conicalschange()
        sconicalselector.style.visibility="visible"
        sconicalsolselector.style.visibility="visible"
        setTimeout(function(){
            sconicalselector.style.left="80%"
            sconicalsolselector.style.left="80%"
            ins.innerText="Click on pipette to take 5 ml Fehling's solution A from the container and pour it in measuring cylinder."
        },1000)
    },1000)
}

function conicalschange(){
    if(sconicalselector==sconical1){
        sconicalselector=sconical2
        sconicalsolselector=sconicalsols2
        fusol=fmsol1
        fusolchange=fmsol2
        fusolheight = "27%"
        dwatersol4height="25%"
        dwatersol4left="54.65%"
        dwatersol4bottom="41%"

        dwatersol4left2="54.65%"
        dwatersol4bottom2="41%"
        
        
    }
    else if(sconicalselector==sconical2){
        sconicalselector=sconical3
        sconicalsolselector=sconicalsols3
        fusol=fmsol1
        fusolchange=fmsol2
        fusolheight = "26%"
        dwatersol4height="23%"
        dwatersol4left="54.55%"
        dwatersol4bottom="41.1%"

        dwatersol4left2="54.65%"
        dwatersol4bottom2="41%"
        
    }
    else if(sconicalselector==sconical3){
        sconicalselector=sconical4
        sconicalsolselector=sconicalsols4
        fusol=fmsol1
        fusolchange=fmsol2
        fusolheight = "25%"
        dwatersol4height="21%"
        dwatersol4left="54.45%"
        dwatersol4bottom="41.2%"

        dwatersol4left2="54.55%"
        dwatersol4bottom2="41.1%"
        
    }
    else if(sconicalselector==sconical4){
        sconicalselector=sconical5
        sconicalsolselector=sconicalsols5
        fusol=fmsol1
        fusolchange=fmsol2
        fusolheight = "24%"
        dwatersol4height="19%"
        dwatersol4left="54.35%"
        dwatersol4bottom="41.3%"

        dwatersol4left2="54.45%"
        dwatersol4bottom2="41.2%"
        
    }
    else if(sconicalselector==sconical5){
        // sconicalselector=sconical1
        // sconicalsolselector=sconicalsols1
        // fusol=fmsol1
        // fusolchange=fmsol2
        // fusolheight = "26%"
        
    }

}










function diswater333(){
    if(f==140){
        f=141
        distilled4.style.top="20%"
        dwatersol4.style.bottom="40.2%"
        setTimeout(function(){
            distilled4.style.left="55%"
            distilled4.style.rotate="10deg"
            dwatersol4.style.rotate="10deg"
            dwatersol4.style.left=dwatersol4left2       /*"54.8%"*/
            dwatersol4.style.bottom=dwatersol4bottom2             /*"40.9%"*/
            ms3.style.top="44%"
            ms3.style.left="67.45%"
            setTimeout(function(){
                ms3.style.height="43%"
                setTimeout(function(){
                    msol10.style.height="37%"
                    dwatersol4.style.height=dwatersol4height               /*"27%"*/
                    dwatersol4.style.left=dwatersol4left                   /*"54.65%"*/
                    dwatersol4.style.bottom=dwatersol4bottom               /*"41%"*/
                    setTimeout(function(){
                        ms3.style.height="0%"
                        ms3.style.top="52%"
                        setTimeout(function(){
                            distilled4.style.rotate="0deg"
                            distilled4.style.left="45%"
                            dwatersol4.style.rotate="0deg"
                            dwatersol4.style.left="45.1%"
                            dwatersol4.style.bottom="40.2%"
                            setTimeout(function(){
                                distilled4.style.top="50%"
                                dwatersol4.style.bottom="10.2%"
                                measureleft="75.8%"
                                measurebottom="31.3%"
                                f=137
                                ins.innerText="Click on measuring cylinder to pour this measured water into conical flask."
                            },1000)
                        },200)
                    },800)
                },200)
            },1000)
        },1000)

    }
}


function flaskcome(){
    if(f==152){
        f=153
        sconical1.style.left="15%"
        sconicalsols1.style.left="15%"
        sconical2.style.left="30%"
        sconicalsols2.style.left="30%"
        sconical3.style.left="45%"
        sconicalsols3.style.left="45%"
        sconical4.style.left="60%"
        sconicalsols4.style.left="60%"
        sconical5.style.left="75%"
        sconicalsols5.style.left="75%"
        ins.innerText="These are the five samples that we prepared. Press NEXT button. "
    }
    else if(f==154){
        sconical1.style.left="80%"
        sconicalsols1.style.left="80%"
        sconical2.style.left="110%"
        sconicalsols2.style.left="110%"
        sconical3.style.left="110%"
        sconicalsols3.style.left="110%"
        sconical4.style.left="100%"
        sconicalsols4.style.left="100%"
        sconical5.style.left="110%"
        sconicalsols5.style.left="110%"
        sconicalselector=sconical1
        sconicalsolselector=sconicalsols1
    }
}


function conicalsadjust(){
    conical1.style.top="65%"
    conical2.style.top="65%"
    conical3.style.top="65%"
    conical4.style.top="65%"
    conical5.style.top="65%"
    conicalsol1.style.bottom="10%"
    conicalsol2.style.bottom="10%"
    conicalsol3.style.bottom="10%"
    conicalsol4.style.bottom="10%"
    conicalsol5.style.bottom="10%"
    t0.style.top="75%"
    t1.style.top="75%"
    t2.style.top="75%"
    t3.style.top="75%"
    t4.style.top="75%"
    conical1.style.left="110%"
    conical2.style.left="110%"
    conical3.style.left="110%"
    conical4.style.left="110%"
    conical5.style.left="110%"
    conicalsol1.style.left="110%"
    conicalsol2.style.left="110%"
    conicalsol3.style.left="110%"
    conicalsol4.style.left="110%"
    conicalsol5.style.left="110%"
    t0.style.left="112%"
    t1.style.left="112%"
    t2.style.left="112%"
    t3.style.left="112%"
    t4.style.left="112%"

    setTimeout(function(){
        conical1.style.visibility="visible"
        conical2.style.visibility="visible"
        conical3.style.visibility="visible"
        conical4.style.visibility="visible"
        conical5.style.visibility="visible"
        conicalsol1.style.visibility="visible"
        conicalsol2.style.visibility="visible"
        conicalsol3.style.visibility="visible"
        conicalsol4.style.visibility="visible"
        conicalsol5.style.visibility="visible"
        t0.style.visibility="visible"
        t1.style.visibility="visible"
        t2.style.visibility="visible"
        t3.style.visibility="visible"
        t4.style.visibility="visible"
        conicalsol1.style.opacity="100%"
        conicalsol2.style.opacity="100%"
        conicalsol3.style.opacity="100%"
        conicalsol4.style.opacity="100%"
        conicalsol5.style.opacity="100%"
        t0.style.opacity="100%"
        t1.style.opacity="100%"
        t2.style.opacity="100%"
        t3.style.opacity="100%"
        t4.style.opacity="100%"

    },1000)
}