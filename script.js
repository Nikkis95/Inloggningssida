document.addEventListener("DOMContentLoaded", function(){
    const logginBtn = document.getElementById("logginBtn");
    const loggin = document.getElementById("loggInContainer");
    const welcome = document.getElementById("welcomeLogin");
    
    
    

    const message = document.getElementById("message");
    logginBtn.addEventListener("click", function(){
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const welcomeIn = document.getElementById("welcomeMessage");
      const text = document.getElementById("text");

     if (username === "test" && password === "1234"){
        message.textContent = "inloggning lyckades";
        message.style.color = "green";
        loggin.style.display = "none";
        welcome.style.display = "block";
        welcomeIn.textContent = "Välkommen in " + username;
      } else {
        message.textContent = "fel användarnamn eller lösenord, testa igen.";
        message.style.color = "red"
        welcome.style.display = "none";
        loggin.style.display = "block";

      }

    
    });

    const loggoutBtn = document.getElementById("loggoutBtn");
      loggoutBtn.addEventListener("click", function(){
    
      welcome.style.display = "none";
      loggin.style.display = "flex";

      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      message.textContent = "";
      
    });

});


