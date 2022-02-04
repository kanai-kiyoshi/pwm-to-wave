// duty ratio
const duty=document.getElementById('duty');
let dutyValue=duty.getElementsByClassName('value')[0];
let dutyInput=duty.getElementsByTagName('input')[0];
let D=dutyInput.value/100;
dutyValue.innerText=D;
let T=1000;
let t=T*D;
dutyInput.onchange=function(){
	D=this.value/100;
	dutyValue.innerText=D;
	t=T*D;
};

setInterval(oscilator,20);
let test='a';
let time0=new Date(), time1=new Date();
let valueInput=0;
function oscilator(){
	time1=new Date();
	if(test==='a'){
		if(time1-time0>t){
			time0=time1;
			valueInput=200;
			test='b';
		}
	}
	else if(test==='b'){
		if(time1-time0>T-t){
			time0=time1;
			valueInput=0;
			test='a';
		}
	}

	// inputs
	let dotInput=document.createElement('div');
	dotInput.classList.add('dotInput');
	dotInput.style.top=valueInput;
	dotInput.setAttribute('value',valueInput?0:1);
	document.getElementById('graphInput').prepend(dotInput);

	let dotsIn=document.getElementsByClassName('dotInput');
	if(dotsIn.length>201){
		dotsIn[201].remove();
	}

	// output
	const outValue=202-Array.from(dotsIn).
	filter((_,i)=>i<51)
	.map(e=>~~e.getAttribute('value'))
	.reduce((sum,val)=>sum+val,0)*4;

	let dotOutput=document.createElement('div');
	dotOutput.classList.add('dotOutput');
	dotOutput.style.top=outValue;
	dotOutput.setAttribute('value',outValue?0:1);
	document.getElementById('graphOutput').prepend(dotOutput);

	let dotsOut=document.getElementsByClassName('dotOutput');
	if(dotsOut.length>201){
		dotsOut[201].remove();
	}

};
