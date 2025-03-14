
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 675) {
        header.style.backgroundColor = '#DC143C';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach(item=>{
    item.addEventListener('click',()=>{
       // hamburger.classList.toggle('active');
        //mobile_menu.classList.toggle('active');
    });
});
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var recipientEmail = "umendrabisen40@gmail.com";
  
    if (name && email && message) {
        var mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(name)} (${encodeURIComponent(email)}): ${encodeURIComponent(message)}`;
        
        window.location.href = mailtoLink;
      
        document.getElementById("contactForm").reset();
    } 
  });
  
  
//Theme change
const changeThemebtn=document.getElementById('changeTheme');
var colorcss=document.getElementById('colorcss')
const styles=['Red','purple','blue','green'];

// const styles=['purple','Red','green'];
var index=0;
var styleslength=styles.length;
changeThemebtn.addEventListener("click" , function() {
  var clr=styles[index];
  colorcss.href='CSS/'+clr+'.css';
  index++;
  if (index == styleslength) {
    index=0;
  }
});
