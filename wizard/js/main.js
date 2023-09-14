function stepOne(){
    const num=document.getElementById('num2');
    const step1=document.getElementById('section1');
    const step2=document.getElementById('section2');
    const linea=document.querySelector('ul')

    num.classList.add('active');
    step1.classList.remove('active');
    step2.classList.add('active');
    linea.classList.add('num2')


}

function stepthree(){
    const num=document.getElementById('num3');
    const step2=document.getElementById('section2');
    const step3=document.getElementById('section3');
    const linea=document.querySelector('ul')

    num.classList.add('active');
    step2.classList.remove('active');
    step3.classList.add('active');
    linea.classList.add('num3')
}

function stepfour(){
    const num=document.getElementById('num4');
    const step3=document.getElementById('section3');
    const step4=document.getElementById('section4');
    const linea=document.querySelector('ul')

    num.classList.add('active');
    step3.classList.remove('active');
    step4.classList.add('active');
    linea.classList.add('num4')
}

function atras1(){
    const num=document.getElementById('num2');
    const step1=document.getElementById('section1');
    const step2=document.getElementById('section2');
    const linea=document.querySelector('ul')

    num.classList.remove('active');
    step1.classList.add('active');
    step2.classList.remove('active');
    linea.classList.remove('num2')
}

function atras2(){
    const num=document.getElementById('num3');
    const step2=document.getElementById('section2');
    const step3=document.getElementById('section3');
    const linea=document.querySelector('ul')

    num.classList.remove('active');
    step2.classList.add('active');
    step3.classList.remove('active');
    linea.classList.remove('num3')
}

function atras3(){
    const num=document.getElementById('num4');
    const step3=document.getElementById('section3');
    const step4=document.getElementById('section4');
    const linea=document.querySelector('ul')

    num.classList.remove('active');
    step3.classList.add('active');
    step4.classList.remove('active');
    linea.classList.remove('num4')
}
