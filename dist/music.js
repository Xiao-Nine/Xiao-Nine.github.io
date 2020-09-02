const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    order: 'random',
    preload: 'auto',
    audio: [
 /*   {
        name: "",
        artist: '',
        url: '/music/',
        cover: '',
      },    */
      {
        name: "Undertale",
        artist: 'Toby Fox',
        url: 'https://link.hhtjim.com/163/39227624.mp3',
        cover: 'http://47.97.231.10/images/2020/09/01/UNDERTALE.jpg',
      },
      {
        name: "杀死那个石家庄人",
        artist: '万青',
        url: 'https://link.hhtjim.com/163/386844.mp3',
        cover: 'http://47.97.231.10/images/2020/09/01/UNDERTALE.jpg'
      }
    ]
});