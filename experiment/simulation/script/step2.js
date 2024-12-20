
let msol = document.querySelector("#msolution")
let mcyl = document.querySelector("#mcylinder")
let ms =document.querySelector("#ms")
let dwater = document.querySelector("#distilled")
let dsol = document.querySelector("#dwatersol")
let flask50 = document.querySelector("#cflask50")
let pipette = document.querySelector("#pipette")
let psol = document.querySelector("#pipettesol")
let sb = document.querySelector("#sulphuric")
let ss = document.querySelector("#sulphuricsol")
let sc = document.querySelector("#sulcap")




let mcylleft="68%"
let msolleft="69.1%"
let msolleft1="68%"
let msolleft2="67.3%"
let msleft="73.8%"


let trial = 0







function diswater(){
    if(f==21){
        f=22
        dwater.style.transform="translate(-150%,-80%) rotate(-25deg)"
        dsol.style.transform="translate(-222%,-120%) rotate(-25deg)"
        setTimeout(function(){
            ms.style.visibility="visible"
            setTimeout(function(){
                msol.style.height="12%"
                dsol.style.height="20%"
                dsol.style.transform="translate(-219%,-130%) rotate(-25deg)"
                setTimeout(function(){
                    dwater.style.transform="translate(0%,0%) rotate(0deg)"
                    dsol.style.transform="translate(0%,0%) rotate(0deg)"
                    ms.style.visibility="hidden"
                    f=23
                    ins.innerText="Click on measuring cylinder to pour this measured solution into conical flask."
                },1000)
            },500)
        },1000)

    }
}



function measure(){
    if(f==23){
        f=24
        ms.style.left=msleft
        ms.style.height="64.5%"
        ms.style.bottom="10.5%"
        mcyl.style.bottom="48%"
        msol.style.bottom="49%"
        setTimeout(function(){
            mcyl.style.left=mcylleft
            msol.style.left=msolleft
            setTimeout(function(){
                mcyl.style.rotate="20deg"
                msol.style.rotate="20deg"
                msol.style.left=msolleft1
                msol.style.bottom="49.7%"
                setTimeout(function(){
                    ms.style.visibility="visible"
                    msol.style.left=msolleft2
                    msol.style.bottom="51%"
                    msol.style.height="0%"
                    setTimeout(function(){
                        flask50.style.opacity="100%"
                        cflask.style.opacity="0%"
                        powder.style.visibility="hidden"
                    },500)
                    setTimeout(function(){
                        ms.style.visibility="hidden"
                        mcyl.style.left="8%"
                        mcyl.style.rotate="0deg"
                        msol.style.left="9.1%"
                        msol.style.rotate="0deg"
                        ms.style.height="31%"
                        setTimeout(function(){
                            mcyl.style.bottom="10%"
                            msol.style.bottom="11%"
                            ms.style.left="10.7%"
                            ins.innerText="Click on pippete to measure 5ml HCL acid and pour it in measuring cylinder."
                            f=25
                            if(trial==1){
                                f=27
                                statuses=5
                                startbutton.style.visibility="visible"
                                ins.innerText="Press NEXT button."
                                document.querySelector("#expon").style.visibility="visible"
                                document.querySelector("#titletext").style.visibility="visible"
                            }
                            else{
                                trial+=1

                            }
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    }
}




function pipette1(){
    if(f==25){
        f=26
        pipette.style.rotate="0deg"
        pipette.style.transform="translate(0%,-150%)"
        sc.style.transform="translate(0%,-50%)"
        setTimeout(function(){
            pipette.style.transform="translate(40%,-150%)"
            sc.style.transform="translate(50%,-50%) rotate(60deg)"
            setTimeout(function(){
                pipette.style.transform="translate(40%,-65%)"
                setTimeout(function(){
                    psol.style.height="16.2%"
                    ss.style.height="15%"
                    setTimeout(function(){
                        pipette.style.transform="translate(40%,-150%)"
                        psol.style.bottom="48.1%"
                        setTimeout(function(){
                            sc.style.transform="translate(0%,-50%) rotate(0deg)"
                            pipette.style.transform="translate(-250%,-150%)"
                            psol.style.left="10.7%"
                            setTimeout(function(){
                                pipette.style.transform="translate(-250%,-125%) rotate(12deg)"
                                sc.style.transform="translate(0%,0%)"
                                psol.style.rotate="12deg"
                                psol.style.bottom="38.3%"
                                psol.style.left="9.65%"
                                setTimeout(function(){
                                    psol.style.height="0%"
                                    psol.style.opacity="0%"
                                    msol.style.height="2%"
                                    psol.style.left="9.16%"
                                    setTimeout(function(){
                                            pipette.style.transform="translate(-250%,-150%) rotate(0deg)"
                                            setTimeout(function(){
                                                pipette.style.transform="translate(0%,-150%)"
                                                setTimeout(function(){
                                                    pipette.style.transform="translate(0%,0%)"
                                                    pipette.style.rotate="-90deg"
                                                    psol.style.left="20.9%"
                                                    psol.style.rotate="0deg"
                                                    psol.style.bottom="13%"
                                                    psol.style.opacity="100%"
                                                    setTimeout(function(){
                                                        f=23
                                                        msolleft1="67.3%"
                                                        msolleft2="67.3%"
                                                        ins.innerText="click on measuring cylinder to pour this acid into conical flask."
                                                    },1000)
                                                },1000)
                                            },1000)
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
