let fcapa = document.querySelector("#fcapa")
let fcapb = document.querySelector("#fcapb")
let pipette2 = document.querySelector("#pipette2")
let psol50 = document.querySelector("#pipettesol50")
let mcyl10 = document.querySelector("#mcyl10")
let msol10 = document.querySelector("#msol10")
let fusol1 = document.querySelector("#fusol1")
let fusol2 = document.querySelector("#fusol2")
let fmsol1 = document.querySelector("#fmsol1")
let fmsol2 = document.querySelector("#fmsol2")
let ms3 = document.querySelector("#ms3")
let distilled4 = document.querySelector("#distilled4")
let dwatersol4 = document.querySelector("#dwatersol4")
let sol5ml = document.querySelector("#sol5ml")
let sol10ml = document.querySelector("#sol10ml")
let sol20ml = document.querySelector("#sol20ml")


let fcapselect = fcapa
let fcapleft="10.5%"
let pipleft = "12%"
let fusol = fusol1
let measureleft = "73%"
let measurebottom = "33.7%"
let solhide = sol5ml
let solshow = sol5ml





function fcap1(){
    if(f==71){
        f=72
        fcapa.style.top="33%"
        setTimeout(function(){
            fcapa.style.left="20%"
            setTimeout(function(){
                fcapa.style.top="87%"
                f=73
                ins.innerText="Click on pipette to take 5 ml Fehling's solution A from the container and pour it in measuring cylinder."
            },1000)
        },1000)
    }
}

function fcap2(){
    if(f==77){
        f=78
        fcapb.style.top="33%"
        setTimeout(function(){
            fcapb.style.left="40%"
            setTimeout(function(){
                fcapb.style.top="87%"
                f=73
                ins.innerText="Click on pipette to take 5 ml Fehling's solution B from the container and pour it in measuring cylinder."
            },1000)
        },1000)
    }
}







function pipette11(){
    if(f==73){
        f=74
        pipette2.style.rotate="0deg"
        pipette2.style.top="0%"
        setTimeout(function(){
            pipette2.style.left=pipleft
            setTimeout(function(){
                pipette2.style.top="20%"
                setTimeout(function(){
                    psol50.style.height="16.2%"
                    fusol.style.height="1%"
                    setTimeout(function(){
                        psol50.style.bottom="60%"
                        pipette2.style.top="0%"
                        setTimeout(function(){
                            psol50.style.left="67.9%"
                            pipette2.style.left="66.5%"
                            fcapselect.style.top="33%"
                            setTimeout(function(){
                                psol50.style.bottom="40%"
                                pipette2.style.top="20%"
                                fcapselect.style.left=fcapleft
                                setTimeout(function(){
                                    ms3.style.height="28%"
                                    setTimeout(function(){
                                        fcapselect.style.top="38%"
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
                                                        psol50.style.bottom="40%"
                                                        psol50.style.left="33.4%"
                                                        f=75
                                                        ins.innerText="Click on measuring cylinder to pour this solution into conical flask."
                                                        pipverify()
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

function pipverify(){
if(fcapselect==fcapa){
    fcapselect=fcapb
    fcapleft="30.5%"
    pipleft="32%"
    fusol=fusol2
    psol50.src="images/pippete-solution50ml-grey.png"
}
else if(fcapselect==fcapb){
    fcapselect="none"
}
}


function mcylpour(){
    if(f==75){
        f=76
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
                                        f=79
                                        ins.innerText="Click on distilled water bottle to measure 10ml of distilled water."
                                        if(fcapselect==fcapb){
                                            f=77
                                            ins.innerText="Click on 'Fehling's solution B' container's cap to open it"
                                            solhide=sol5ml
                                            solshow=sol10ml
                                        }
                                        else if(fcapselect=="done"){
                                            f=81
                                            startbutton.style.visibility="visible"
                                            ins.innerText="Press NEXT button"
                                        }
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

function diswater222(){
    if(f==79){
        f=80
        distilled4.style.top="20%"
        dwatersol4.style.bottom="40.2%"
        setTimeout(function(){
            distilled4.style.left="55%"
            distilled4.style.rotate="10deg"
            dwatersol4.style.rotate="10deg"
            dwatersol4.style.left="54.8%"
            dwatersol4.style.bottom="40.9%"
            ms3.style.top="44%"
            ms3.style.left="67.45%"
            setTimeout(function(){
                ms3.style.height="43%"
                setTimeout(function(){
                    msol10.style.height="37%"
                    dwatersol4.style.height="27%"
                    dwatersol4.style.left="54.65%"
                    dwatersol4.style.bottom="41%"
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
                                solhide=sol10ml
                                solshow=sol20ml
                                f=75
                                fcapselect="done"
                                ins.innerText="Click on measuring cylinder to pour this measured water into conical flask."
                            },1000)
                        },200)
                    },800)
                },200)
            },1000)
        },1000)

    }
}