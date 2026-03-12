



let startlab = document.querySelector("#startinglab")
let startlab2 = document.querySelector("#workinglab")
let startbutton = document.querySelector("#start")
let ins = document.querySelector("#text")
let stp1 = document.querySelector("#stp1")
let stp2 = document.querySelector("#stp2")
let stp3 = document.querySelector("#stp3")
let stp4 = document.querySelector("#stp4")
let stp4sol = document.querySelector("#stp4sol")
let stp5 = document.querySelector("#stp5")
let stp6 = document.querySelector("#stp6")
let stp7 = document.querySelector("#stp7")
let stp9 = document.querySelector("#stp9")
let stp10 = document.querySelector("#stp10")
let stp12 = document.querySelector("#stp12")
// let stp14 = document.querySelector("#stp14")
let stp15 = document.querySelector("#stp15")




let statuses = 0
let f=0

function start(){
    if(statuses==0){
        // startlab.style.visibility="hidden"
        statuses=1
        startbutton.style.visibility="hidden"
        document.querySelector("#expon").style.opacity="100%"
        setTimeout(function(){
            document.querySelector("#titletext").style.fontSize="10vw"
            document.querySelector("#titletext").style.opacity="100%"
        },500)
        setTimeout(function(){
            startbutton.innerText="NEXT"
            startbutton.style.visibility="visible"
            ins.innerText="Click on NEXT button"
            statuses=2
        },5000)
    }
    else if(statuses==2){
        statuses=3
        startbutton.style.visibility="hidden"
        document.querySelector("#expon").style.opacity="0%"
        document.querySelector("#titletext").style.fontSize="0.01vw"
            document.querySelector("#titletext").style.opacity="0%"
            f=1
        setTimeout(function(){
            document.querySelector("#expon").style.visibility="hidden"
            document.querySelector("#titletext").style.visibility="hidden"
            ins.innerText="Turn on weighing scale."
        },2000)
    }
    else if(f==20){
        f=21
        stp1.style.visibility="hidden"
        stp2.style.visibility="visible"
        cflask.style.visibility="visible"
        flask50.style.visibility="visible"
        powder.style.visibility="visible"
        startbutton.style.visibility="hidden"
        startbutton.innerText="NEXT"
        ins.innerText="Click on distilled water bottle to measure 50ml of distilled water into measuring cylinder."
    }
    else if(statuses==5){
        statuses=6
        console.log("executed")
        document.querySelector("#expon").style.opacity="100%"
        setTimeout(function(){
            document.querySelector("#titletext").style.fontSize="10vw"
            document.querySelector("#titletext").style.opacity="100%"
            document.querySelector("#titletext").innerText="Stand the mixture for 24 h."
        },500)
        setTimeout(function(){
            startbutton.innerText="NEXT"
            startbutton.style.visibility="visible"
            ins.innerText="Click on NEXT button"
            statuses=7
        },5000)
    }
    else if(statuses==7){
        statuses=8
        startbutton.style.visibility="hidden"
        document.querySelector("#expon").style.opacity="0%"
        document.querySelector("#titletext").style.fontSize="0.01vw"
        document.querySelector("#titletext").style.opacity="0%"
            f=30
            start()
        setTimeout(function(){
            document.querySelector("#expon").style.visibility="hidden"
            document.querySelector("#titletext").style.visibility="hidden"
        },2000)
    }
        
    else if(f==30){
        stp2.style.visibility="hidden"
        startbutton.style.visibility="hidden"
        ins.innerText="Mixture after 24 h !!!   Now click on funnel to place it on burette."
        setTimeout(function(){
            f=31
            stp3.style.visibility="visible"
        },1000)
    }
    else if(f==45){
        stp3.style.visibility="hidden"
        cflask50.style.visibility="hidden"
        cflask.style.visibility="hidden"
        funnel2.style.scale="1.4"
        startbutton.style.visibility="hidden"
        setTimeout(function(){
            f=46
            stp4.style.visibility="visible"
            stp4sol.style.visibility="visible"
            ins.innerText=" Click on funnel to place it on 500ml volumetric flask."
        },1000)
    }
    else if(f==54){
        stp4.style.visibility="hidden"
        stp4sol.style.visibility="hidden"
        cflask.style.visibility="hidden"
        tflask.style.visibility="hidden"
        vsol500.style.visibility="hidden"
        v500.style.left="70%"
        vsol500.style.left="70%"
        funnel3.style.left="85%"
        funnel3.style.scale="1.4"
        startbutton.style.visibility="hidden"
        setTimeout(function(){
            v500.style.visibility="visible"
            vsol500.style.visibility="visible"
            stp5.style.visibility="visible"
            f=60
            ins.innerText=" Click on 500 ml volumetric flask to pour 25ml solution into measuring cylinder."
        },1000)
    }
    else if(f==70){
        stp5.style.visibility="hidden"
        v500.style.visibility="hidden"
        vsol500.style.visibility="hidden"
        // distilled3.style.visibility="visible"
        // dwatersol3.style.visibility="visible"
        // distilled3.style.left="45%"
        // dwatersol3.style.left="45.1%"
        // dwatersol3.style.height="30.8%"
        startbutton.style.visibility="hidden"
        setTimeout(function(){
            ins.innerText="Click on 'Fehling's solution A' container's cap to open it."
            f=71
            stp6.style.visibility="visible"
        },1000)
    }
    else if(f==81){
        stp6.style.visibility="hidden"
        sol20ml.style.opacity="100%"
        funnel2.style.scale="1"
        funnel2.style.left="73%"
        vsol100.style.opacity="100%"
        v100.style.left="60%"
        vsol100.style.left="60%"
        setTimeout(function(){
            f=82
            v100.style.visibility="visible"
            vsol100.style.visibility="visible"
            funnel2.style.visibility="visible"
            cflask100.style.visibility="visible"
            sol20ml.style.visibility="visible"
            solblue.style.visibility="visible"
            solbrick.style.visibility="visible"
            stp7.style.visibility="visible"
            // eburette.style.visibility="visible"
            // stp3.style.visibility="visible"
            // v500.style.visibility="visible"
            startbutton.style.visibility="hidden"
            vsol500.style.visibility="hidden"
            ins.innerText="Click on funnel and place it on burette."
        },1000)
    }
    else if(f==96){
        funnel2.style.visibility="hidden"
        v100.style.visibility="hidden"
        cflask100.style.visibility="hidden"
        vsol100.style.visibility="hidden"
        sol20ml.style.visibility="hidden"
        solbrick.style.visibility="hidden"
        // stp8.style.visibility="visible"
        calculation1.style.visibility="visible"
        tbl1.style.visibility="visible"
        stp7.style.visibility="hidden"
        startbutton.style.visibility="hidden"
        setTimeout(function(){
            f=97
            calculation1.style.opacity="100%"
            ins.innerText="Enter value and check your calculation's Result."
            tbl1.style.right="37.5%"
            tbl1.style.top="5%"
        },1000)
    }
    else if(f==98){
        calculation1.style.visibility="hidden"
        ansverify.style.visibility="hidden"
        tbl1.style.visibility="hidden"
        tbl1.style.opacity="0%"
        startbutton.style.visibility="hidden"
        solblue.style.visibility="hidden"
        setTimeout(function(){
            f=99
            stp9.style.visibility="visible"
            stp1.style.visibility="visible"
            funnel4.style.visibility="visible"
            distilled5.style.visibility="visible"
            dwatersol5.style.visibility="visible"
            vsol250.style.visibility="visible"
            ins.innerText="Turn on the weighing machine."
            v250.style.visibility="visible"
            powder.style.visibility="visible"
            reading.style.opacity="0%"
            reading.innerText="00.00"
            // distilled3.style.visibility="visible"
            // dwatersol3.style.visibility="visible"
            // distilled4.style.left="45%"
            // dwatersol4.style.left="45%"
            powder.style.top=""
            powder.style.left=""
            powder.style.width=""
            powder.style.height=""
            powder.style.rotate=""
            dwatersol3.style.height=""
        },1000)

    }
    else if(f==115){
        startbutton.style.visibility="hidden"
        stp1.style.visibility="hidden"
        stp9.style.visibility="hidden"
        vsol250.style.opacity="100%"
        powder.style.visibility="hidden"
        funnel4.style.visibility="hidden"
        ins.innerText="Click on volumetric flask to measure 50ml of solution."
        distilled5.style.visibility="hidden"
        dwatersol5.style.visibility="hidden"
        setTimeout(function(){
            f=116
            v250.style.visibility="visible"
            vsol250.style.visibility="visible"
            mcyl50.style.visibility="visible"
            msol50.style.visibility="visible"
            stp10.style.visibility="visible"
            msol50.style.bottom=""
            msol50.style.height=""
            msol50.style.rotate=""
            msol50.style.left=""
        },1000)

    }
    else if(f==120){
        // stp10.style.visibility="hidden"
        // mcyl50.style.visibility="hidden"
        // msol50.style.visibility="hidden"
        // startBtntimer2()
        // ins.innerText="Click on alpha amylase bottle to measure 5ml of alpha emylase enzyme."
        startbutton.style.visibility="hidden"
        v250.style.visibility="hidden"
        vsol250.style.visibility="hidden"
        vsoln100.style.visibility="hidden"
        vsoln150.style.visibility="hidden"
        vsoln200.style.visibility="hidden"
        vsoln50.style.visibility="hidden"
        setTimeout(function(){
            f=121
            f=1000
            amylasebottle.style.visibility="visible"
            amylasecap.style.visibility="visible"
            timerback.style.opacity="100%"
            timevalue2.style.opacity="100%"
            ms5.src="images/measuring cylinder-solution-yellow.png"
            ms3.src="images/measuring cylinder-solution-yellow.png"
            msol50.src="images/measuring cylinder-solution-yellow-new.png"
            ins.innerText="Click on alpha amylase bottle's cap to open it."
        },1000)
    }
    else if(f==125){
        startbutton.style.visibility="hidden"
        amylasebottle.style.visibility="hidden"
        amylasecap.style.visibility="hidden"
        mcyl50.style.visibility="hidden"
        msol50.style.visibility="hidden"
        hotplatenew.style.visibility="visible"
       
        setTimeout(function(){
            f=126
            flaskadjust()
            setTimeout(function(){
                controls.style.visibility="visible"
            },2000)
        },1000)

    }
    else if(f==132){
        f=133
        stp10.style.visibility="hidden"
        startbutton.style.visibility="hidden"
        hotplatenew.style.visibility="hidden"
        controls.style.visibility="hidden"
        stp6.style.visibility="visible"
        dwatersol4.style.height="30.8%"

        ins.innerText="prepare 5 samples of 5ml fehling's A and 5ml fehling's B solution with 10 ml of distilled water."
        setTimeout(function(){
            ins.innerText="Click on fehling's A container cap to open it."
            f=133

        },3000)
        psol50.style.left=""
        psol50.style.top=""
        fusol=fusol1
        ms3.style.transitionDuration="0.5s"
        ms3.style.top="60%"
        ms3.style.left="68.1%"
        psol50.src="images/pippete-solution50ml.png"
        ms3.src="images/measuring-cylinder-solution.png"
        // psol50.src="images/pippete-solution50ml.png"
        // sconicalselector.style.visibility="visible"
        // sconicalsolselector.style.visibility="visible"
        document.querySelector(".sconicalsols").style.visibility="visible"
        document.querySelector(".sconicals").style.visibility="visible"
        sconicalselector.style.left="80%"
        sconicalsolselector.style.left="80%"
        sconicalsol1.style.visibility="visible"
        sconicalsol2.style.visibility="visible"
        sconicalsols5.style.visibility="visible"
        sconicalsols1.style.visibility="visible"
        sconicalsols2.style.visibility="visible"
        sconicalsols3.style.visibility="visible"
        sconicalsols4.style.visibility="visible"

        dwatersol4.style.height=""

        solhide=sconicalsol1
        solshow=sconicalsol1
        pipleft = "12%"
        measureleft = "73%"
        measurebottom = "33.7%"
        setTimeout(function(){
            conicalsadjust()
        },3000)

        
    }
    else if(f==150){
        f=135
        flaskchange()
        startbutton.style.visibility="hidden"
        
    }
    else if(f==151){
        f=152
        stp6.style.visibility="hidden"
        flaskcome()
        burettef2.style.left=""
        burettef2.style.opacity=""
        eburette2.style.opacity=""
        bstand2.style.left=""
        eburette2.style.left=""
        bsol2.style.height=""
        bsol2.style.left=""
        bsol2.style.bottom=""
        eburette2.style.top=""
        bstand2.style.top=""
        burettef2.style.top=""
    }
    else if(f==153){
        f=154
        flaskcome()
        setTimeout(function(){

            eburette2.style.visibility="visible"
            burettef2.style.visibility="visible"
            hotplate.style.visibility="visible"
            bsol2.style.visibility="visible"
            bstand2.style.visibility="visible"
            nob2.style.visibility="visible"
            mcap.style.visibility="visible"
            mbottle.style.visibility="visible"


            ins.innerText="Titrate one fehling sample that we prepared recently with the solution in T0 conical flask."
            startbutton.style.visibility="hidden"
            funnel2.style.visibility="visible"
            setTimeout(function(){
                tsampleselector.style.left="60%"
                tsamplesolselector.style.left="60%"
                ttextselector.style.left="62%"
                f=155
                ins.innerText="Click on funnel to place it on burette."
                solblue.style.visibility="visible"
                solbrick.style.visibility="visible"
                solbrick.style.opacity="0%"
                solblue.style.left="30.5%"
                solblue.style.height="4.5%"
                solblue.style.bottom="19.1%"
                solblue.style.width="11%"
                solbrick.style.left="30.5%"
                solbrick.style.height="4.5%"
                solbrick.style.bottom="19.1%"
                solbrick.style.width="11%"
            },3000)

        },1000)


    }
    else if(f==169){
        f=170
        titrantchange()
        startbutton.style.visibility="hidden"
    }

    else if(f==200){
        f=201
        stp14.style.visibility="hidden"
        setTimeout(function(){
            stp15.style.visibility="visible"
            startbutton.style.visibility="hidden"
            ins.innerText="Congratulations !!! whole experiment is completed."
        },1000)
    }

}



// start()

