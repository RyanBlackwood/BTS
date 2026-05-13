window.addEventListener('scroll', () => {
const header = document.getElementById('header');

if(window.scrollY > 40){
header.style.background = 'rgba(5,10,25,.88)';
}
else{
header.style.background = 'rgba(5,10,25,.72)';
}
});
