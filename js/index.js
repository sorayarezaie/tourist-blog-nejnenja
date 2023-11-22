const submit = document.getElementById('submit');
const p = document.getElementById('click');
submit.addEventListener('click', function(){
    event.preventDefault();
    p.textContent = "Hey you clicked once on me. Event type is: " + event.type + "On "+ Date();
});
