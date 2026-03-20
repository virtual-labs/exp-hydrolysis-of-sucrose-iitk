let vsoln200 = document.querySelector("#vsoln200")
let vsoln150 = document.querySelector("#vsoln150")
let vsoln100 = document.querySelector("#vsoln100")
let vsoln50 = document.querySelector("#vsoln50")
let ms5 = document.querySelector("#ms5")
let conicalsol1 = document.querySelector("#conicalsol1")
let conicalsol2 = document.querySelector("#conicalsol2")
let conicalsol3 = document.querySelector("#conicalsol3")
let conicalsol4 = document.querySelector("#conicalsol4")
let conicalsol5 = document.querySelector("#conicalsol5")
let timerback = document.querySelector("#timerback")
let timevalue2 = document.querySelector("#timevalue2")
let amylasebottle = document.querySelector("#amylasebottle")
let amylasecap = document.querySelector("#amylasecap")
let hotplatenew = document.querySelector("#hotplatenew")
let conical5 = document.querySelector("#conical5")
let conical4 = document.querySelector("#conical4")
let conical3 = document.querySelector("#conical3")
let conical2 = document.querySelector("#conical2")
let conical1 = document.querySelector("#conical1")
let t4 = document.querySelector("#t4")
let t3 = document.querySelector("#t3")
let t2 = document.querySelector("#t2")
let t1 = document.querySelector("#t1")
let t0 = document.querySelector("#t0")
let controls = document.querySelector("#controls")
let onbutton = document.querySelector("#onbutton")
let plus = document.querySelector("#plus")
let minus = document.querySelector("#minus")
let reading2 = document.querySelector("#reading2")
let indicator = document.querySelector("#indicator")










let vsolselector = vsol250
let vsolselector1 = vsoln200
let vsolselectorleft = "64.65%"
let vsolselectorleft1 = "65.35%"
let vsolselectorbottom = "31.6%"
let vsolselectorbottom1 = "32.1%"
let conicalselector = conicalsol1
let mcylleftnew = "42.8%"
let msolleftnew = "44.25%"
let msolleftnew2 = "48%"
let ms5left = "40.2%"
let amylasepour = 1
let tselector = "#t4"
let ins2 = "Click on measuring cylinder to pour this measured enzyme into the conical flask."




function flaskmeasure(){
    if(f==116){
        f=117
        v250.style.top="40%"
        vsolselector.style.bottom="30%"
        vsolselector1.style.bottom="30%"
        setTimeout(function(){
            v250.style.left="63%"
            vsolselector.style.left=vsolselectorleft
            vsolselector1.style.left=vsolselectorleft1
            v250.style.rotate="-45deg"
            vsolselector.style.rotate="-45deg"
            vsolselector1.style.rotate="-45deg"
            vsolselector.style.bottom=vsolselectorbottom
            vsolselector1.style.bottom=vsolselectorbottom1
            msol50.src="/images/measuring-cylinder-solution.png"
            ms3.style.visibility="visible"
            ms3.style.top="46.3%"
            ms3.style.left="61.7%"
            setTimeout(function(){
                ms3.style.transitionDuration="0.5s"
                ms3.style.height="40%"
                setTimeout(function(){
                    ms3.style.transitionDuration="1s"
                    ms3.style.height="4.5%"
                    msol50.style.height="37.1%"
                    vsolselector.style.opacity="0%"
                    vsolselector1.style.opacity="100%"
                    setTimeout(function(){
                        ms3.style.transitionDuration="0.5s"
                        ms3.style.height="0%"
                        ms3.style.top="50.8%"
                        setTimeout(function(){
                            v250.style.rotate="0deg"
                            vsolselector.style.rotate="0deg"
                            vsolselector1.style.rotate="0deg"
                            vsolselector.style.left=""
                            vsolselector1.style.left=""
                            v250.style.left=""
                            vsolselector.style.bottom="30%"
                            vsolselector1.style.bottom="30%"
                            setTimeout(function(){
                                v250.style.top=""
                                vsolselector.style.bottom=""
                                vsolselector1.style.bottom=""
                                f=118
                                vsolverify()
                            },1000)
                        },1000)
                    },900)
                },500)
            },1000)
        },1000)
    }
}


function vsolverify(){
    if(vsolselector==vsol250){
        vsolselector.style.opacity="0%"
        vsolselector=vsolselector1
        vsolselector1=vsoln150
        vsolselectorleft=vsolselectorleft1
        vsolselectorleft1="65.85%"
        vsolselectorbottom=vsolselectorbottom1
        vsolselectorbottom1="32.6%"
        vsolselector.style.opacity="100%"
        ins.innerText="Click on measuring cylinder and pour this measured solution in first right conical flask."
    }
    else if(vsolselector==vsoln200){
        vsolselector.style.opacity="0%"
        vsolselector=vsolselector1
        vsolselector1=vsoln100
        vsolselectorleft=vsolselectorleft1
        vsolselectorleft1="66.3%"
        vsolselectorbottom=vsolselectorbottom1
        vsolselectorbottom1="33.15%"
        vsolselector.style.opacity="100%"
        ins.innerText="Click on measuring cylinder and pour this measured solution in second right conical flask."
    }
    else if(vsolselector==vsoln150){
        vsolselector.style.opacity="0%"
        vsolselector=vsolselector1
        vsolselector1=vsoln50
        vsolselectorleft=vsolselectorleft1
        vsolselectorleft1="66.8%"
        vsolselectorbottom=vsolselectorbottom1
        vsolselectorbottom1="33.6%"
        vsolselector.style.opacity="100%"
        ins.innerText="Click on measuring cylinder and pour this measured solution in middle one conical flask."
    }
    else if(vsolselector==vsoln100){
        vsolselector.style.opacity="0%"
        vsolselector=vsolselector1
        vsolselector1=vsoln150
        vsolselectorleft=vsolselectorleft1
        vsolselectorleft1="65.85%"
        vsolselectorbottom=vsolselectorbottom1
        vsolselectorbottom1="32.6%"
        vsolselector.style.opacity="100%"
        vsolselector1.style.visibility="hidden"
        ins.innerText="Click on measuring cylinder and pour this measured solution in second left conical flask."
    }
    else if(vsolselector==vsoln50){
        ins.innerText="Click on measuring cylinder and pour this measured solution in first left conical flask."
    }
}



function mcyl50measure(){
    if(f==118){
        f=119
        mcyl50.style.bottom="37%"
        msol50.style.bottom="38.4%"
        setTimeout(function(){
            mcyl50.style.rotate="-30deg"
            msol50.style.rotate="-30deg"
            mcyl50.style.left=mcylleftnew
            msol50.style.left=msolleftnew
            ms5.style.visibility="visible"
            ms5.style.top="29%"
            ms5.style.left=ms5left
            setTimeout(function(){
                ms5.style.transitionDuration="0.5s"
                ms5.style.height="60%"
                msol50.style.height="0%"
                msol50.style.left=msolleftnew2
                msol50.style.bottom="41.5%"
                setTimeout(function(){
                    conicalselector.style.opacity="100%"
                    ms5.style.height="0%"
                    ms5.style.top="89%"
                    setTimeout(function(){
                        ms5.style.transitionDuration="0.5s"
                        setTimeout(function(){
                            mcyl50.style.left=""
                            msol50.style.left=""
                            mcyl50.style.rotate=""
                            msol50.style.rotate=""
                            setTimeout(function(){
                                mcyl50.style.bottom=""
                                msol50.style.bottom=""
                                conicalverify()
                            },1000)
                        },10)
                    },1000)
                },1000)
            },1000)
        },1000)
    }

    if(f==123){
        f=124
        mcyl50.style.bottom="37%"
        msol50.style.bottom="38.4%"
        setTimeout(function(){
            mcyl50.style.rotate="-30deg"
            msol50.style.rotate="-30deg"
            mcyl50.style.left=mcylleftnew
            msol50.style.left=msolleftnew
            ms5.style.visibility="visible"
            ms5.style.top="29%"
            ms5.style.left=ms5left
            setTimeout(function(){
                ms5.style.transitionDuration="0.5s"
                ms5.style.height="60%"
                msol50.style.height="0%"
                msol50.style.left=msolleftnew2
                msol50.style.bottom="41.5%"
                setTimeout(function(){
                    // conicalselector.style.opacity="100%"
                    // ms5.style.transitionDuration="0.2s"
                    ms5.style.height="0%"
                    ms5.style.top="89%"
                    setTimeout(function(){
                        ms5.style.transitionDuration="0.5s"
                        setTimeout(function(){
                            document.querySelector(tselector).style.opacity="100%"
                            mcyl50.style.left=""
                            msol50.style.left=""
                            mcyl50.style.rotate=""
                            msol50.style.rotate=""
                            setTimeout(function(){
                                mcyl50.style.bottom=""
                                msol50.style.bottom=""
                                conicalverify()
                            },1000)
                        },10)
                    },1000)
                },1000)
            },1000)
        },1000)
    }




}

function conicalverify(){
    if(conicalselector==conicalsol1){
        conicalselector=conicalsol2
        f=116
        mcylleftnew="34.8%"
        msolleftnew="36.25%"
        msolleftnew2 = "40%"
        ms5left = "32.2%"
        ins.innerText="Again click on volumetric flask to measure 50ml of solution."
    }
    else if(conicalselector==conicalsol2){
        conicalselector=conicalsol3
        f=116
        mcylleftnew="26.8%"
        msolleftnew="28.25%"
        msolleftnew2 = "32%"
        ms5left = "24.2%"
        ins.innerText="Again click on volumetric flask to measure 50ml of solution."
    }
    else if(conicalselector==conicalsol3){
        conicalselector=conicalsol4
        f=116
        mcylleftnew="18.8%"
        msolleftnew="20.25%"
        msolleftnew2 = "24%"
        ms5left = "16.2%"
        ins.innerText="Again click on volumetric flask to measure 50ml of solution."
    }
    else if(conicalselector==conicalsol4){
        conicalselector=conicalsol5
        f=116
        mcylleftnew="10.8%"
        msolleftnew="12.25%"
        msolleftnew2 = "16%"
        ms5left = "8.2%"
        ins.innerText="Again click on volumetric flask to measure 50ml of solution."
    }
    else if(conicalselector==conicalsol5){
        f=120
        conicalselector="none"
        startbutton.style.visibility="visible"
        ins.innerText="Press NEXT button."
        mcylleftnew = "42.8%"
        msolleftnew = "44.25%"
        msolleftnew2 = "48%"
        ms5left = "40.2%"
    }

    else if(amylasepour==1){
        amylasepour=2
        f=121
        resetBtn2()
        startBtntimer2()
        amylase()
        tselector = "#t3"
        mcylleftnew="34.8%"
        msolleftnew="36.25%"
        msolleftnew2 = "40%"
        ms5left = "32.2%"
        ins.innerText="Again measuring 5ml of alpha amylase enzyme."
        ins2 = "Click on measuring cylinder to pour this measured enzyme into the conical flask after completion of 10 minutes in stopwatch."

    }
    else if(amylasepour==2){
        amylasepour=3
        f=121
        resetBtn2()
        startBtntimer2()
        amylase()
        tselector = "#t2"
        mcylleftnew="26.8%"
        msolleftnew="28.25%"
        msolleftnew2 = "32%"
        ms5left = "24.2%"
        ins.innerText="Again measuring 5ml of alpha amylase enzyme."
    }
    else if(amylasepour==3){
        amylasepour=4
        f=121
        resetBtn2()
        startBtntimer2()
        amylase()
        tselector = "#t1"
        mcylleftnew="18.8%"
        msolleftnew="20.25%"
        msolleftnew2 = "24%"
        ms5left = "16.2%"
        ins.innerText="Again measuring 5ml of alpha amylase enzyme."
    }
    else if(amylasepour==4){
        amylasepour=5
        f=121
        resetBtn2()
        startBtntimer2()
        amylase()
        tselector = "#t0"
        mcylleftnew="10.8%"
        msolleftnew="12.25%"
        msolleftnew2 = "16%"
        ms5left = "8.2%"
        ins.innerText="Again measuring 5ml of alpha amylase enzyme."
    }
    else if(amylasepour==5){
        amylasepour="none"
        resetBtn2()
        startBtntimer2()
        // amylasecap1()
        f=5002
        ins.innerText="Wait to complete 10 minutes in timer !!."
    }

}



function amylase(){
    if(f==121){
        f=122
        amylasebottle.style.top="40%"
        setTimeout(function(){
            amylasebottle.style.left="64.15%"
            setTimeout(function(){
                amylasebottle.style.rotate="-35deg"
                ms3.style.visibility="visible"
                ms3.style.top="44%"
                ms3.style.left="62.5%"
                setTimeout(function(){
                    ms3.style.transitionDuration="0.5s"
                    ms3.style.height="42%"
                    setTimeout(function(){
                        msol50.style.height="37.1%"
                        setTimeout(function(){
                            ms3.style.transitionDuration="1s"
                            ms3.style.top="84%"
                            ms3.style.height="0%"
                            setTimeout(function(){
                                amylasebottle.style.rotate=""
                                setTimeout(function(){
                                    amylasebottle.style.left=""
                                    setTimeout(function(){
                                        amylasebottle.style.top=""
                                        ins.innerText=ins2
                                        f=2000
                                        if(amylasepour==1){
                                            f=123
                                        }
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



function amylasecap1(){
    if(f==1000){
        f=1001
        amylasecap.style.top="60%"
        setTimeout(function(){
            amylasecap.style.left="80%"
            setTimeout(function(){
                amylasecap.style.top="88%"
                f=121
                ins.innerText="Click on alpha amylase bottle to measure 5ml of alpha emylase enzyme."
            },1000)
        },1000)
    }
    else if(f==1002){
        f=1003
        amylasecap.style.top="60%"
        setTimeout(function(){
            amylasecap.style.left=""
            setTimeout(function(){
                amylasecap.style.top=""
                ins.innerText="Press NEXT button."
                f=125
            },1000)
        },1000)
    }
}



function flaskadjust(){
        conical5.style.top="15%"
        conical4.style.top="15%"
        conical3.style.top="15%"
        conical2.style.top="15%"
        conical1.style.top="15%"
        conicalsol5.style.bottom="60%"
        conicalsol4.style.bottom="60%"
        conicalsol3.style.bottom="60%"
        conicalsol2.style.bottom="60%"
        conicalsol1.style.bottom="60%"
        t4.style.top="25%"
        t3.style.top="25%"
        t2.style.top="25%"
        t1.style.top="25%"
        t0.style.top="25%"
        setTimeout(function(){
            hotplatenew.style.left="27%"
            conical5.style.left="30%"
            conicalsol5.style.left="30%"
            conical4.style.left="38%"
            conicalsol4.style.left="38%"
            conical3.style.left="46%"
            conicalsol3.style.left="46%"
            conical2.style.left="54%"
            conicalsol2.style.left="54%"
            conical1.style.left="62%"
            conicalsol1.style.left="62%"
            t4.style.left="32%"
            t3.style.left="40%"
            t2.style.left="48%"
            t1.style.left="56%"
            t0.style.left="64%"
            setTimeout(function(){
                conical5.style.top="32%"
                conical4.style.top="32%"
                conical3.style.top="32%"
                conical2.style.top="32%"
                conical1.style.top="32%"
                conicalsol5.style.bottom="43%"
                conicalsol4.style.bottom="43%"
                conicalsol3.style.bottom="43%"
                conicalsol2.style.bottom="43%"
                conicalsol1.style.bottom="43%"
                t4.style.top="42%"
                t3.style.top="42%"
                t2.style.top="42%"
                t1.style.top="42%"
                t0.style.top="42%"
                ins.innerText="Press the power button on HOT plate."
                f=127
            },1000)
        },1000)
}



function poweronplate(){
    if(f==127){
        f=128
        onbutton.style.opacity="100%"
        reading2.style.opacity="100%"
        ins.innerText="Set temperature to 80 degree celcius by using buttons."


    }
    else if(f==128){
        f=127
        onbutton.style.opacity="0%"
        reading2.style.opacity="0%"
        ins.innerText="Press the power button on HOT plate."
    }
    else if(f==131){
        f=132
        onbutton.style.opacity="0%"
        reading2.style.opacity="0%"
        indicator.style.opacity="0%"
        startbutton.style.visibility="visible"
        ins.innerText="Press NEXT button."
    }
}


function plus1(){
    if(f==128 || f==129){
        f=129
        if(parseInt(reading2.innerText)<100){
            reading2.innerText=(parseInt(reading2.innerText)+5)
            setTimeout(function(){
                if(reading2.innerText=="80"){
                    indicator.style.opacity="100%"
                    f=130
                    resetBtn2()
                    startBtntimer2()
                    ins.innerText="wait for 5 minutes. "
                }
                else{
                    // indicator.style.opacity="0%"
                    ins.innerText="Temperature is not 80 degree celcius."
                }
            },2000)
        }
    }
}

function minus1(){
    if(f==128 || f==129){
        f=129
        if(parseInt(reading2.innerText)>0){
            reading2.innerText=(parseInt(reading2.innerText)-5)
            setTimeout(function(){
                if(reading2.innerText=="80"){
                    indicator.style.opacity="100%"
                    f=130
                    resetBtn2()
                    startBtntimer2()
                    ins.innerText="wait for 5 minutes. "
                }
                else{
                    // indicator.style.opacity="0%"
                    ins.innerText="Temperature is not 80 degree celcius."
                }
            },2000)
        }

    }
}