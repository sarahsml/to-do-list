document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert('please Enter a Task')
    }else{

            const randomId = Math.floor(Math.random() * 9999);
            const text = document.createElement('div');
            text.setAttribute('id', randomId);
            text.classList.add('tasks');
    
            const div1 = document.createElement('div');
            div1.textContent = document.querySelector('#newtask input').value;

            const removebtn = document.createElement('button');
            removebtn.setAttribute('id', 'remove')
            removebtn.classList.add('rmbtn');
            removebtn.innerHTML = "Remove";



            // const idInput = document.createElement('input');
            // idInput.setAttribute('id', 'remove')
            // idInput.classList.add('rmbtn');
            // idInput.innerHTML = "Remove";
    
            document.getElementById('append').appendChild(text);
            document.getElementById(randomId).appendChild(div1);
            document.getElementById(randomId).appendChild(removebtn);


            
           document.getElementById("remove").onclick = function(){
                const REMOVE = document.getElementById(randomId);
                REMOVE.style.display = 'none';
            };
        }

        // const remove = document.getElementById(randomId);
        // remove.style.display = 'none';
        }
        
   
