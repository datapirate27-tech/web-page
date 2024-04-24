function  myfunction(){
    alert ('SUBMITED');
    open('home.html')
    }
function services(){
        document.getElementById('service').style.display = 'block';
        document.getElementById('home').style.display = 'none';
        document.getElementById('contacts').style.display = 'none';
        document.getElementById('projects').style.display = 'none';
     }
     function contacts(){
        document.getElementById('contacts').style.display = 'block';
        document.getElementById('home').style.display = 'none';
        document.getElementById('service').style.display = 'none';
        document.getElementById('projects').style.display = 'none';
        
    }

 
function home(){
    document.getElementById('home').style.display = 'block';
    document.getElementById('contacts').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('service').style.display = 'none';
    document.getElementById('help').style.display = 'none';
}
function help(){
    document.getElementById('help').style.display = 'block';
    document.getElementById('home').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contacts').style.display = 'none';
    document.getElementById('services').style.display = 'none';

}
function projects(){
    document.getElementById('projects').style.display = 'block';
    document.getElementById('home').style.display = 'none';
    document.getElementById('service').style.display = 'none';
    document.getElementById('contacts').style.display = 'none';

}
function projects2(){
    document.getElementById('projects').style.display = 'block';
    document.getElementById('home').style.display = 'none';
    document.getElementById('service').style.display = 'none';
    document.getElementById('contacts').style.display = 'none';

}

 
function logic(){
    document.getElementById('home').style.display = 'block';
    document.getElementById('login-page').style.display = 'none';
     alert('submited')
}
 
function signup2(){
    document.getElementById('signup-html').style.display = 'block';
    document.getElementById('login-page').style.display = 'none';
}
function loghom(){
    document.getElementById('login-page').style.display = 'block';
    document.getElementById('home').style.display = 'none';
    document.getElementById('service').style.display = 'none';
    document.getElementById('contacts').style.display = 'none';
    document.getElementById('help').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('signup-html').style.display = 'none';
}
function loghom2(){
    document.getElementById('login-page').style.display = 'block';
    document.getElementById('signup-html').style.display = 'none';
    alert('submited');
}
function logon(){
    document.getElementById('signup-html').style.display = 'block';
    document.getElementById('home').style.display = 'none';

}
function tnc(){
    alert('this page is not ready');
}
function seterror(id, error){

}
function validateform(){
    var name = document.forms['myform']['fname'].value;
    console.log('name')
    return false;
}
function owner(){
    document.getElementById("owner-det").style.display = 'block';
}