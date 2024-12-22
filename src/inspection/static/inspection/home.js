
function show() {
    const varable=document.querySelector('h1');
    if (varable.innerHTML === 'good bye !!!'){
        varable.innerHTML='hello world!!!';
    }else{
        varable.innerHTML = 'good bye world!!!'
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('p').innerHTML=Date()
})

let counter=0;

function addCount(){
    counter++;
    document.querySelector('h2').innerHTML=counter;

    if (counter%2 ==0){
        // alert(`the number ${counter} is even `)
        document.querySelector('h2').style.color='green';
    }else{
        document.querySelector('h2').style.color='red';
    }
}

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('form').onsubmit=function(){
       const val= document.querySelector('#name-value').value;
       alert(`thanks for submiting the form ${val}`)
    }
})

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('select').onchange=function(){
        document.querySelector('body').style.backgroundColor=this.value;
    }
})


// event listner for the change in the select value

document.addEventListener('DOMContentLoaded',function(){
    const dranage =document.querySelector('#drain').value
    console.log(dranage)
    document.querySelector('#drain').onchange=function(){
        if (this.value=='surface_drainage') {
            document.querySelector('.container').innerHTML =`
            <h2> Check ${this.value} component performance on:</h2>
            <ul>
            <li>Sedimentation on the road surface</li>
            <li>Erosion of natural fill embankment</li>
            <li>Scour on road structurl layer</li>
            <li>Landslide on the road backslope </li>
            <li>ponding on slack road gradient</li>
            <li>slipery road surface</li>
            <li>blockage of road by debris</li>
            <li>Excessive moisture on road surface after flood </li>
            <li>how people cross the drain easly</li>

            <ul>
            <h2>Possible protection measures for the componenet:</h2>
            <ul>
            <li>Proper chamber and cross-fall slope </li>
            <li>Proper gradient alighnment</li>
            <li>Proper side slope and back slope</li>
            <li>an inward-sloping road carriageway for hill side</li>
            <li>maintaining cross fall and shoulder slope</li>
            <li>using proper construction material</li>
            <li>they should be wide and have sloped sides</li>
            </ul>
            `
        }else if (this.value=='subsurface_drainage') {
            document.querySelector('.container').innerHTML =`
            <h2> Check ${this.value} component performance on:</h2>
            <ul>
                <li>Settlement of the component(intercepter drain)</li>
                <li>moisture content of the road bed</li> 
                <li>diffrent ground water level </li>
                <li>dispersed flow patterns across the meadow</li>
                <li>unstable and wet surface</li>
                <li>water flown from the mountain to the road</li>
                <li>multi draining channel</li>
                <li>erosion and slope failer dawon side of the subsurface drain</li>
                <li>ecesive surface run-off from the subsurface drain(chuts)</li>
                <li>presence of disposal point from the subsurface</li>
            </ul>
            <h2> Possible protection measures for the componenet:</h2>
            <ul>
            <li>require the construction of embankment</li>
            <li>install multiple drainage pipe for dispersing the flow</li>
            <li>install coures pearmable rock fill for dispersing the flow</li>
            <li>subgrade reinforcement with coaurse pearmable rock</li>
            <li>grade control or by using filter layer</li>
            <li>use road structural layer as drainage conponent </li>
            <li>use gravel cross drains grips in the shoulder with weephole</li>
            <li>use deep drain with filter-wrapped preforted pipe and graded gravel back fill</li>
            <li>use under-drains for wet cut bank and seepage to divert subsurface water</li>
            <li>Increase road structural layer thikness</li>
            <li>use rock fill after excavating the weak road bed material</li>
            <li>the water shoud be channed to strean channel with good capacity for the flow</li>
            <li>in avary sensetive locations earth bund can be constructed </li>
            <li>the water should be removed in steeped and cascaded slope </li>
            <li>use bio-engineering measures for sensetive locations</li>
            <li>use chuts to remove concetrated water</li>
            <li>use stilling basin for downstream erosion </li>
            </ul>
            `
        }else if (this.value=='side_ditches') {
            document.querySelector('.container').innerHTML =`
            <h2> Check ${this.value} component performance on:</h2>
            <ul>
                <li>Sedimentation</li>
                <li>Erosion of bed and side natural material</li>
                <li>gouges(soak) in the side drian wall</li>
                <li>Scour of bed,slope or masonary material</li>
                <li>Blockage by debris </li>
                <li>Growth of vegetation on the flow bed </li>
                <li>Seepage in the side of the component</li>
                <li>Landslide near the component </li>
                <li>Settlement of the component on both side</li> 
                <li>in hill landform stored spoiled material</li>
                <li>steep cut slope and long embankment</li>
                <li>for water flow at the top and bottom of slope </li>
            </ul>
            <h2> Possible protection measures for the componenet:</h2>
            <ul>
                <li>build scour check (check dams)</li>
                <li>use proper check dam spacing</li>
                <li>acomodate volume and velocity of flow</li>
                <li>use apron stone at the bottom of check dams</li>
                <li>line the drains to prevent water entering to structural layer</li>
                <li>reduce the gradient of the drain</li>
                <li>Reduce the creation of creep</li>
                <li>correct crown slope and ditch height relashinship</li>
                <li>use diffrent form of side drain : V-shaped,rectangular or trapeoidal</li>
                <li>proper longitudinal gradient</li>
                <li>Avoid slacking of the drain in the lower reach</li>
                <li>mostly use trapeoidal drain</li>
                <li>widning the drain and taking its alignment slitly away from road</li>
                <li>hardning the invert and sides of the drain</li>
                <li>Arrangment of side drain should be maintanable and not risked for blockage</li>
                <li>gap between the drain and the hill side must fill with compacted impermable material</li>
                <li>channels can be lined with gabion,dry stone pitching,rip-rap or vegitation</li>
                <li>the lining should be curved to the bed rather than rectangular</li>
                <li>use cement protruding stones on the channel to reduce flow velocity</li>
                <li>cascade or steps in the drain long-section reduce flow velocity</li>
                <li>discharge the water by using turnouts with low volume and velocity</li>
                <li>use proper spacing  nad angle for turnout drain</li>
                <li>avoid siltation on turnout drain</li>
                <li>use proper block-off for side drain and turnout drain</li>
                <li>if the slope for turnout drain is not attain increase the width</li>
                <li>the slope should be continous with no high or low spots</li>
                <li>donot channel runoff through new routes </li>
                <li>use gutters and spillways to control water flown from slope</li>
                <li> use steeped slope ,rip-rap,crib wwalls to reduce erosion</li>
            </ul>
            `
            
        }else if (this.value=='Stream_crossing') {
            document.querySelector('.container').innerHTML =`
            <h2> Check ${this.value} component performance on:</h2>
            <ul>
                <li>Sedimentation on the inlet and outlet</li>
                <li>Erosion of natural material on the bank</li>
                <li>Scour of foundation or masonary material</li>
                <li>Blockage of debris on the inlet and outlet</li>
                <li>Growth of vegetation on the inlet and outlet</li>
                <li>Landslide near the component inlet and outlet</li>
                <li>Settlement of the component on both side</li> 
                <li>gullies in the shoulder and embankment slope near component</li>
                <li>controls at upstream catchment</li>
                <li>identify number of component for the catchment</li>
                <li>know local drainage project history</li>
                <li>component surcharge and overtoping on flood </li>
                <li>concentrated run-off and slope failures</li>
                <li>unconsolidated and erodible materials</li>
                <li>define type of fan catchment surface for sediment </li>
            </ul>
            <h2> Possible protection measures for the componenet:</h2>
            <ul>
                <li>dispate water energy in the vicinity of the component</li>
                <li>protect outfall channels down to withstand the increased flow </li>
                <li>use outflow channel protection component </li>
                <li>avoid large concentration of water due to less component</li>
                <li>large catch-wall between component and road</li>
                <li>provide dished(concave) concrete causeway</li>
                <li>choose sutable crossing sites </li>
                <li>mature(high level) ,immature and equilibrium fans surface in the inlet</li>
                <li>gabion check dams in the stream chennal above the fan</li>
                <li>strean channel bed level control on the upper stream</li>
                <li>river training and scour protection works up and down stream to control stream course</li>
                <li>provide room for the accumulation of debries during fan-building to keep flow whith in the channel</li>

            </ul>
            `
            
        }
        else{
            document.querySelector('.container').innerHTML =`<p>Please select drainage component</p>`
        }
    }
   
})