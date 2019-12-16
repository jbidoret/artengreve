const artengreve = "Art en grève";
const colere = artengreve.split("");
const cri = document.querySelector('#content');

colere.forEach(function(voix, idx){
    let echo = voix == " " ? 1 : 5;
    const slogan = Math.floor(Math.random() * echo);
    for (var i = 0; i <= echo; i++) {
        let rage = document.createElement('span');
        rage.textContent = voix;
        if(i != slogan) rage.style.height = Math.ceil(Math.random() * 1.6 + .3) + "cm";
        cri.appendChild(rage);
    }
})

const generale_et_inconditionnelle = document.createElement('span');
generale_et_inconditionnelle.textContent = "!!!"
cri.appendChild(generale_et_inconditionnelle);

// Bindery.js
Bindery.makeBook({
    content: '#content',
    pageSetup: {
      size: { width: '80mm', height: '1220mm' },
      margin: { top: '12pt', inner: '12pt', outer: '16pt', bottom: '20pt' },
  }
});
