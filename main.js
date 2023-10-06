var name = document.getElementById("name1").value;
           ConvidadoArray.push(name);

           ConvidadoArray.sort();
           ConvidadoArray = [];

           function submit()
           {
           var name = document.getElementById("Convidado").value;
           ConvidadoArray.push(name); console.log(ConvidadoArray);
           document.getElementById("displayName").innerHTML = ConvidadoArray;
           document.getElementById("submitButton").style.display = "none";
           document.getElementById("sortButton").style.display = "inline-block"; 
        }

        function searching()
        {
            var s = document.getElementById("s1").value;
            var found = 0;
            var j;
            for(j=0; j<ConvidadoArray.length; j++)
            {
                if(s==ConvidadoArray[j]){
                    found=found+1;
                }
            }
            document.getElementById("p2").innerHTML="Nome encontrado" + found + "vez(es)";
            console.log("Nome encontrado" + found + "vez(es)");
        }

        function sorting()
        {
            ConvidadoArray.sort();
            console.log(ConvidadoArray);
            document.getElementById("displayName").innerHTML = ConvidadoArray;
        }