new Splide( '#image-carousel',{
    heightRatio: 0.5,
    type: 'loop'
} ).mount();


function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar (){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

