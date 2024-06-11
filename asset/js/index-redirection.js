// index redirection after 2 seconds ==========================================
  
if (window.innerWidth <= 768) { // redirection mobile version only
    
    setTimeout(function() {
        window.location.href = "./title.html";
    }, 3000);
}