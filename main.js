let fm= document.getElementById('contact'); 
let fn= document.getElementById('fname'); 
let ui = document.getElementById('email');
let message = document.getElementById('subject');
let pattern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/

function formValidator(ev) {

    ev.preventDefault(); 

    //start with these 2 empty buckets at the beginning
    let errors= [];
    let data = {};

    

    //validation for full name 
    if (fn.value!=='') {
        data.fullname = fn.value;
       
    }
    else { 
        errors.push('please enter your full name!');
    }
    
    //email

    //trim whitespace
    ui.value = ui.value.trim();

    if(ui.value!== '') {

        if(pattern.test(ui.value)){
           //data.push(`User email is : ${ui.value}`);
           var email_message = `User email is : ${ui.value}`;
           data.email = email_message;
        }
        else{
            errors.push(`Email is invalid`);
        }
    }
        
    else { 
        errors.push(`User email is empty.`);
    }


    // message
    if (message.value!=='') {
        data.messages = message.value;
       
    }
    else { 
        errors.push('please enter some message');
    }

    if(errors.length != 0)
    {
        console.log(errors);

    }
    
    else{

        console.log(data);
    }
}

fm.addEventListener('submit', formValidator); 
