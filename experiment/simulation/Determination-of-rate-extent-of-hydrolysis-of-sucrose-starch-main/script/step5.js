let vsol475 = document.querySelector("#vsol475")
let mcyl50 = document.querySelector("#mcyl50")
let msol50 = document.querySelector("#msol50")
let funnel3 = document.querySelector("#funnel3")
let vsol25 = document.querySelector("#vsol25")
let distilled3 = document.querySelector("#distilled3")
let dwatersol3 = document.querySelector("#dwatersol3")
let vsol100 = document.querySelector("#vsol100")

let vsol250 = document.querySelector("#vsol250")
let distilled5 = document.querySelector("#distilled5")
let dwatersol5 = document.querySelector("#dwatersol5")






function v5001(){
    if(f==60){
        f=61
        v500.style.top="30%"
        vsol500.style.bottom="20%"
        vsol475.style.bottom="20%"
        setTimeout(function(){
            v500.style.rotate="-45deg"
            vsol500.style.rotate="-45deg"
            vsol475.style.rotate="-45deg"
            vsol500.style.left="68.3%"
            vsol475.style.left="69.4%"
            vsol500.style.bottom="14.1%"
            vsol475.style.bottom="15.3%"
            v500.style.left="65.5%"
            v500.style.top="38.5%"
            fsol.style.visibility="visible"
            fsol.style.top="49.5%"
            fsol.style.left="62.2%"
            fsol.style.transitionDuration="0.5s"
            setTimeout(function(){
                fsol.style.height="36.5%"
                setTimeout(function(){
                    vsol475.style.opacity="100%"
                    vsol500.style.opacity="0%"
                    msol50.style.height="16.5%"
                    setTimeout(function(){
                        fsol.style.top="86.5%"
                        fsol.style.height="0%"
                        setTimeout(function(){
                            v500.style.rotate="0deg"
                            vsol475.style.rotate="0deg"
                            v500.style.left="70%"
                            vsol475.style.left="70%"
                            vsol475.style.bottom="11.5%"
                            f=62
                            console.log(f)
                            ins.innerText="Click on funnel to place it on 100 ml volumetric flask."
                        },1000)
                    },500)
                },500)
            },1000)
        },1000)
    }
}


function funnel11(){
    console.log(f)
    if(f==62){
        f=63
        funnel3.style.rotate="0deg"
        funnel3.style.top="20%"
        setTimeout(function(){
            funnel3.style.left="42.5%"
            setTimeout(function(){
                funnel3.style.top="45%"
                f=64
                ins.innerText="Click on measuring cylinder to pour this slution inside volumetric flask."
            },1000)
        },1000)
    }
    else if(f==66){
        f=67
        funnel3.style.top="20%"
        setTimeout(function(){
            funnel3.style.left="85%"
            setTimeout(function(){
                funnel3.style.top="80%"
                funnel3.style.rotate="65deg"
                f=68
                ins.innerText="Click on distilled water bottle to add water in this volumetric flask by the water bottle up to the mark."
            },1000)

        },1000)
    }
}

function measure11(){
    if(f==64){
        f=65
        mcyl50.style.bottom="30%"
        msol50.style.bottom="31.4%"
        setTimeout(function(){
            mcyl50.style.left="53%"
            msol50.style.left="54.4%"
            setTimeout(function(){
                mcyl50.style.rotate="-60deg"
                msol50.style.rotate="-60deg"
                msol50.style.left="58.3%"
                msol50.style.bottom="36.5%"
                tfsol.style.visibility="visible"
                tfsol.style.top="42.9%"
                tfsol.style.left="46.25%"
                tfsol.style.rotate="43deg"
                fsol.style.visibility="visible"
                fsol.style.top="52%"
                fsol.style.left="44.65%"
                fsol.style.transitionDuration="0.5s"
                setTimeout(function(){
                    msol50.style.height="0%"
                    msol50.style.left="61%"
                    msol50.style.bottom="41%"
                    tfsol.style.opacity="100%"
                    setTimeout(function(){
                        fsol.style.height="38%"
                        setTimeout(function(){
                            fsol.style.transitionDuration="1s"
                            vsol25.style.height="2.9%"
                            vsol25.style.left="40.5%"
                            fsol.style.height="35.2%"
                            setTimeout(function(){
                                tfsol.style.opacity="0%"
                                setTimeout(function(){
                                    fsol.style.transitionDuration="0.3s"
                                    fsol.style.height="0%"
                                    fsol.style.top="87.1%"
                                    setTimeout(function(){
                                        mcyl50.style.rotate="0deg"
                                        setTimeout(function(){
                                            mcyl50.style.left="58%"
                                            setTimeout(function(){
                                                mcyl50.style.bottom="12%"
                                                f=66
                                                ins.innerText="Click on funnel to remove it."
                                            },1000)
                                        },1000)
                                    },500)
                                },300)
                            },200)
                        },500)
                    },200)

                },1000)
            },1000)
        },1000)
    }
}




function diswater111(){
    if(f==68){
        f=69
        distilled3.style.top="20%"
        dwatersol3.style.bottom="40.2%"
        // vis
        setTimeout(function(){
            distilled3.style.left="33%"
            distilled3.style.rotate="22deg"
            dwatersol3.style.rotate="22deg"
            dwatersol3.style.left="32.5%"
            dwatersol3.style.bottom="42.2%"
            ms2.style.visibility="visible"
            ms2.style.left="44.93%"
            ms2.style.top="47%"
            setTimeout(function(){
                dwatersol3.style.height="18%"
                dwatersol3.style.left="31.5%"
                dwatersol3.style.bottom="42.8%"
                ms2.style.height="40%"
                setTimeout(function(){
                    ms2.style.transitionDuration="0.5s"
                    setTimeout(function(){
                        vsol100.style.opacity="100%"
                        vsol25.style.opacity="0%"
                        ms2.style.top="87%"
                        ms2.style.height="0%"
                        setTimeout(function(){
                            dwatersol3.style.rotate="0deg"
                            distilled3.style.rotate="0deg"
                            dwatersol3.style.bottom="40.2%"
                            dwatersol3.style.left="25.1%"
                            distilled3.style.left="25%"
                            setTimeout(function(){
                                ms2.style.visibility="hidden"
                                distilled3.style.top="50%"
                                dwatersol3.style.bottom="10.2%"
                                f=70
                                startbutton.style.visibility="visible"
                                ins.innerText="Press NEXT button"
                            },1000)
                        },1000)
                    },700)      
                },300)
            },1000)
        },1000)
    }
    else if(f==111){
        f=112
        distilled5.style.top="20%"
        dwatersol5.style.bottom="40.2%"
        setTimeout(function(){
            distilled5.style.left="77%"
            distilled5.style.rotate="22deg"
            dwatersol5.style.rotate="22deg"
            dwatersol5.style.left="76.5%"
            dwatersol5.style.bottom="42.2%"
            ms2.style.visibility="visible"
            ms2.style.left="88.93%"
            ms2.style.top="47%"
            setTimeout(function(){
                dwatersol5.style.height="18%"
                dwatersol5.style.left="75.5%"
                dwatersol5.style.bottom="42.8%"
                ms2.style.height="40%"
                // vis
                setTimeout(function(){
                    ms2.style.transitionDuration="0.5s"
                    setTimeout(function(){
                        vsol250.style.opacity="100%"
                        ms2.style.top="87%"
                        ms2.style.height="0%"
                        powder.style.visibility="hidden"
                        setTimeout(function(){
                            dwatersol5.style.rotate="0deg"
                            distilled5.style.rotate="0deg"
                            dwatersol5.style.bottom="40.2%"
                            dwatersol5.style.left="45.1%"
                            distilled5.style.left="45%"
                            setTimeout(function(){
                                ms2.style.visibility="hidden"
                                distilled5.style.top="50%"
                                dwatersol5.style.bottom="10.2%"
                                f=113
                                ins.innerText="click on funnel to remove it."
                            },1000)
                        },1000)
                    },700)      
                },300)
            },1000)
        },1000)
    }
}


