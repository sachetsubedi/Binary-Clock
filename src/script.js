const hrsC1=["h1c4","h1c3","h1c2","h1c1"];
const hrsC2=["h2c4","h2c3","h2c2","h2c1"];

const minC1=["m1c4","m1c3","m1c2","m1c1"];
const minC2=["m2c4","m2c3","m2c2","m2c1"];

const secC1=["s1c4","s1c3","s1c2","s1c1"];
const secC2=["s2c4","s2c3","s2c2","s2c1"];

setInterval(()=>{
    let date= new Date();
    const hr=date.getHours();
    const hrs=roundHours(hr);
    let mins=date.getMinutes();
    if(mins<10){
        mins='0'+mins;
    }
    const secs=date.getSeconds();
    function toBinary(dec){
        return (parseInt(dec).toString(2));
    }
    
    function split(o){
        return o.split('')
    };
    
    function roundHours(hours){
        if(hours<=10){
            return "0"+hours;
        }
        else if(hours>12){
            return ("0"+hours%12);
        } 
        return hours;
    }
    function amChange(hrs){
        let am=document.getElementById('am');
        let pm=document.getElementById('pm');
        if(hrs>=12){
            pm.style.backgroundColor='red';
            pm.style.border='1px solid red';
            pm.classList.add('boxShadow');
            am.style.backgroundColor='transparent';
            am.style.border='1px solid white';
            am.classList.remove('boxShadow');
        }
        else{
            am.style.backgroundColor='red';
            am.style.border='1px solid red';
            am.classList.add('boxShadow');
            pm.style.backgroundColor='transparent';
            pm.style.border='1px solid white';
            pm.classList.remove('boxShadow');
        }
    }
    // -------------------------hours
    let hd1=(split(hrs.toString()))[0];
    let hd2=(split(hrs.toString()))[1];
    let hb1=((toBinary(hd1)).split('')).reverse();
    let hb2=((toBinary(hd2)).split('')).reverse();
    //---------------------------
    
    //---------------------------minutes
    let md1=(split(mins.toString()))[0];
    let md2=(split(mins.toString()))[1];
    let mb1=((toBinary(md1)).split('')).reverse();
    let mb2=((toBinary(md2)).split('')).reverse();
    
    //-------------------------
    
    //-------------------------seconds
    let sd1=(split(secs.toString()))[0];
    let sd2=(split(secs.toString()))[1];
    let sb1=((toBinary(sd1)).split('')).reverse();
    let sb2=((toBinary(sd2)).split('')).reverse();
    
    //-----------------------------
    function lighter(code,array){
        let index=0;
        array.forEach((e)=>{
            const dot=document.getElementById(`${e}`);
            dot.style.backgroundColor='transparent';
            dot.style.border='1px solid white';
            dot.classList.remove('boxShadow');
        })
        code.forEach((c)=>{
            if(c==1){
                const dot=document.getElementById(`${array[index]}`);
                dot.style.backgroundColor='red';
                // dot.classList.add('bg-red-700');
                dot.classList.add('boxShadow');
                dot.style.border='1px solid red';
            }
            index+=1;
            
        })
    }
    lighter(hb1,hrsC2);
    lighter(hb2,hrsC1);
    lighter(mb1,minC1);
    lighter(mb2,minC2);
    lighter(sb1,secC1);
    lighter(sb2,secC2);
    amChange(hr);
},1000);

