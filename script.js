let btns=document.querySelectorAll(".btn");
        let h3=document.querySelector("h3");
        for(btn of btns){
            btn.addEventListener("click",function(){
                let buttn=this;
                
                user=buttn.getAttribute("id");
                console.log(user);
                insert(user);
                
            });
        }

        function insert(inp){
            h3.textContent+=inp;
        }
        let result=document.querySelector(".equal");

        result.addEventListener("click",function(){
            element=h3.textContent;
            h3.innerText=eval(element);
            
            console.log(eval(element))
            
        });

         

        let clear=document.querySelector(".clear");
        clear.addEventListener("click",function(){
            h3.innerText="";
        });