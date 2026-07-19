document.addEventListener("DOMContentLoaded", function(){

    const button = document.querySelector(".btn");

    if(button){
        button.addEventListener("click", function(){
            alert("Appointment এর জন্য Doctor's Dental Zone-এ যোগাযোগ করুন।");
        });
    }

});
