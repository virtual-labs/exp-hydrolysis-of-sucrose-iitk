let funnel = document.querySelector("#funnel")
let funne2 = document.querySelector("#funnel2")
let eburette = document.querySelector("#eburette")
let fburette = document.querySelector("#fburette")
let bsol = document.querySelector("#bsol")
let bnob = document.querySelector("#bnob")
let naoh = document.querySelector("#naoh")
let naohhalf = document.querySelector("#naohhalf")
let pc = document.querySelector("#pc")
let drop = document.querySelector("#drop")
let tflask = document.querySelector("#tflask")
let tdiv = document.querySelector("#tdiv")
let tfsol = document.querySelector("#tfsol")
let fsol = document.querySelector("#fsol")
let vsol50 = document.querySelector("#vsol50")
let vsol500 = document.querySelector("#vsol500")
let distilled2 = document.querySelector("#distilled2")
let dwatersol2 = document.querySelector("#dwatersol2")
let ms2 = document.querySelector("#ms2")
let fsol2 = document.querySelector("#fsol2")
let v500 = document.querySelector("#v500")



let tried = 0
let tcount = 0




function funnel1(){
    if(f==31){
        f=32
        funnel.style.rotate="0deg"
        setTimeout(function(){
            funnel.style.top="1%"
            setTimeout(function(){
                funnel.style.left="11%"
                eburette.style.top="17%"
                fburette.style.top="17%"
                bnob.style.top="61.5%"
                bsol.style.bottom="41.9%"
                setTimeout(function(){
                    funnel.style.top="10%"
                    ins.innerText="Click on volumetric flask filled with 1N NaOH solution."
                    f=33
                },1000)
            },1000)
        },1000)
    }
    else if(f==35){
        f=36
        funnel.style.top="1%"
        setTimeout(function(){
            funnel.style.left="60%"
            setTimeout(function(){
                funnel.style.top="80%"
                eburette.style.top="10%"
                fburette.style.top="10%"
                bnob.style.top="54.5%"
                bsol.style.bottom="48.9%"
                setTimeout(function(){
                    funnel.style.rotate="65deg"
                    ins.innerText="Click on phenolphthalein bottle cap to add 2 drop of phenolphthalein in conical flask."
                    f=37
                },1000)
            },1000)
        },1000)
    }
    else if(f==46){
        f=47
        funnel2.style.rotate="0deg"
        funnel2.style.top="20%"
        setTimeout(function(){
            funnel2.style.left="43.5%"
            setTimeout(function(){
                funnel2.style.top="35%"
                f=48
                ins.innerText="Click on conical flask to pour that titrated solution into volumetric flask."
            },1000)
        },1000)
    }
    else if(f==52){
        f=53
        funnel2.style.top="20%"
        setTimeout(function(){
            funnel2.style.left="60%"
            setTimeout(function(){
                funnel2.style.top="80%"
                funnel2.style.rotate="65deg"
                funnel2.style.scale="1"
                f=54
                ins.innerText="Press NEXT button"
                startbutton.style.visibility="visible"
            },1000)
        },1000)
    }




}




function naoh1(){
    if(f==33){
        f=34
        naoh.style.top="1%"
        naohhalf.style.top="1%"
        setTimeout(function(){
            naoh.style.left="15%"
            naohhalf.style.left="15%"
            setTimeout(function(){
                naoh.style.rotate="-80deg"
                naohhalf.style.rotate="-80deg"
                naoh.style.top="-5%"
                naoh.style.left="18%"
                naohhalf.style.top="-5%"
                naohhalf.style.left="18%"
                eburette.style.opacity="0%"
                fburette.style.opacity="100%"
                setTimeout(function(){
                    naoh.style.transitionDuration="2s"
                    naohhalf.style.transitionDuration="2s"
                    naoh.style.opacity="0%"
                    naohhalf.style.opacity="100%"
                    bsol.style.height="36.9%"
                    setTimeout(function(){
                        naoh.style.transitionDuration="1s"
                        naohhalf.style.transitionDuration="1s"
                        naohhalf.style.rotate="0deg"
                        naoh.style.rotate="0deg"
                        naoh.style.top="1%"
                        naohhalf.style.top="1%"
                        bsol.style.transitionDuration="1s"
                        setTimeout(function(){
                            naohhalf.style.left="80%"
                            naoh.style.left="80%"
                            setTimeout(function(){
                                naohhalf.style.top="55%"
                                naoh.style.top="55%"
                                f=35
                                ins.innerText="Click on funnel to remove and place it at previous place."
                            },1000)
                        },1000)
                    },2000)
                },1000)
            },1000)
        },1000)
    }
}

let q = 36.9
function phenolphthalein1(){
    if(f==37){
        f=38
        if(tried==0){
            pc.style.top="25%"
        }
            setTimeout(function(){
                if(tried==0){
                    pc.style.left="72%"
                }
                setTimeout(function(){
                drop.style.opacity="100%"
                setTimeout(function(){
                    drop.style.transitionDuration="1s"
                    drop.style.top="85%"
                    setTimeout(function(){
                        drop.style.transitionDuration="0s"
                        drop.style.opacity="0%"
                        drop.style.top="54%"
                        tried+=1
                        if(tried!=2){
                            f=37
                            phenolphthalein1()
                        }
                        else{
                            pc.style.left="51.05%"
                            setTimeout(function(){
                                pc.style.top="57.2%"
                                f=39
                                ins.innerText="Click on conical flask to place it below Burette."
                            },1000)
                        }
                    },500)

                },100)
            },1000)
        },1000)
    }
}

function flask2(){
    if(f==39){
        f=40
        cflask.style.top="65%"
        tflask.style.top="65%"
        flask50.style.top="65%"
        setTimeout(function(){
            cflask.style.scale="0.85"
            tflask.style.scale="0.85"
            flask50.style.scale="0.85"
            cflask.style.left="9.8%"
            tflask.style.left="9.8%"
            flask50.style.left="9.8%"
            cflask.style.top="65%"
            tflask.style.top="65%"
            flask50.style.top="65%"
            // drop.style.opacity="100%"
            drop.style.left="13.2%"
            drop.style.top="68%"
            ins.innerText="Click on burette nob until the conical flask solution color changes to redish pink."
            f=41
        },1000)
    }
    else if(f==43){
        f=44
        cflask.style.left="70%"
        tflask.style.left="70%"
        flask50.style.left="70%"
        cflask.style.scale="1"
        tflask.style.scale="1"
        flask50.style.scale="1"
        setTimeout(function(){
            cflask.style.top="60%"
            tflask.style.top="60%"
            flask50.style.top="60%"
            f=45
            startbutton.style.visibility="visible"
            ins.innerText="Press NEXT button"
        },1000)
    }
}

function titrate(){
    if(f==41){
        f=42
        drop.style.opacity="100%"
            setTimeout(function(){
                drop.style.transitionDuration="1s"
                drop.style.top="85%"
                q-=1
                bsol.style.transitionDuration="0.5s"
                bsol.style.height=q+"%"
                setTimeout(function(){
                    drop.style.transitionDuration="0s"
                    drop.style.opacity="0%"
                    drop.style.top="68%"
                    tcount+=1
                    if(tcount!=7){
                        f=41
                        if(tcount==6){
                            tflask.style.opacity="50%"
                        }
                    }
                    else{
                        f=43
                        tflask.style.opacity="100%"
                        cflask.style.opacity="0%"
                        flask50.style.opacity="0%"
                        ins.innerText="Click on conical flask to remove from below the Burette."
                        setTimeout(function(){
                            alert("Titration complete !!!")
                        },1000)
                    }
                },500)
            },100)
    }
}


function flask3(){
    if(f==48){
        f=49
        tflask.style.top="30%"
        cflask.style.top="30%"
        setTimeout(function(){
            tflask.style.left="52%"
            cflask.style.left="52%"
            cflask.style.visibility="visible"
            setTimeout(function(){
                tflask.style.rotate="-85deg"
                tflask.style.top="17%"
                tflask.style.left="51%"
                cflask.style.rotate="-85deg"
                cflask.style.top="17%"
                cflask.style.left="51%"
                setTimeout(function(){
                    tfsol.style.opacity="100%"
                    setTimeout(function(){
                        fsol.style.height="48%"
                        setTimeout(function(){
                            vsol50.style.height="3.5%"
                            vsol50.style.left="40.6%"
                            tflask.style.opacity="0%"
                            cflask.style.opacity="100%"
                            fsol.style.height="44.6%"
                            setTimeout(function(){
                                tfsol.style.opacity="0%"
                                setTimeout(function(){
                                    tflask.style.rotate="0deg"
                                    cflask.style.rotate="0deg"
                                    fsol.style.height="0%"
                                    fsol.style.top="86.6%"
                                    setTimeout(function(){
                                        tflask.style.left="70%"
                                        cflask.style.left="70%"
                                        setTimeout(function(){
                                            cflask.style.top="60%"
                                            tflask.style.top="60%"
                                            f=50
                                            ins.innerText="Click on Didtilled water bottle to make the volume of volumetric flask upto 500 ml mark"
                                        },1000)
                                    },1000)
                                },300)
                            },500)
                        },1000)
                    },300)
                },1200)
            },1000)
        },1000)
    }
}


function diswater2(){
    if(f==50){
        f=51
        distilled2.style.top="15%"
        dwatersol2.style.bottom="55.2%"
        setTimeout(function(){
            distilled2.style.left="35%"
            dwatersol2.style.left="35%"
            setTimeout(function(){
                distilled2.style.left="36.5%"
                dwatersol2.style.left="36%"
                distilled2.style.rotate="22deg"
                dwatersol2.style.rotate="22deg"
                dwatersol2.style.bottom="56.7%"
                setTimeout(function(){
                    dwatersol2.style.transitionDuration="1.5s"
                    dwatersol2.style.height="5%"
                    dwatersol2.style.left="34.8%"
                    dwatersol2.style.bottom="57.7%"
                    ms2.style.height="7%"
                    setTimeout(function(){
                        fsol2.style.height="45.6%"
                        setTimeout(function(){
                            fsol2.style.transitionDuration="1s"
                            fsol2.style.height="18.5%"
                            // vsol500.style.height="32%"
                            vsol500.style.opacity="100%"
                            vsol50.style.opacity="0%"
                            setTimeout(function(){
                                dwatersol2.style.transitionDuration="1s"
                                ms2.style.height="0%"
                                ms2.style.top="42%"
                                setTimeout(function(){
                                    fsol2.style.height="0%"
                                    fsol2.style.top="59.5%"
                                    setTimeout(function(){
                                        distilled2.style.rotate="0deg"
                                        distilled2.style.left="35%"
                                        dwatersol2.style.rotate="0deg"
                                        dwatersol2.style.left="35%"
                                        dwatersol2.style.bottom="55.2%"
                                        setTimeout(function(){
                                            distilled2.style.left="25%"
                                            distilled2.style.top="60%"
                                            dwatersol2.style.left="25%"
                                            dwatersol2.style.bottom="10.2%"
                                            tflask.style.visibility="hidden"
                                            f=52
                                            funnel1()
                                        },1000)
                                    },300)
                                },200)
                            },1000)
                        },300)
                    },200)
                },1000)
            },1000)
        },1000)
    }
}

