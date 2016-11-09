

window.onload = function()
{
	
	var showAll = document.querySelector('#def');
	var showResult = document.getElementById('lookup');
	showResult.addEventListener('click', function(event){
		document.getElementById("result").innerHTML = "";
            
            xhttp.open("GET","request.php?q="+text.value+"&all=false",true);
            xhttp.send();
        }
		
		
	showAll.addEventListener('click', function(){
		var httpRequest = new XMLHttpRequest();
	
		
		// GET Request
        var url = "request.php?=&all=true";
        httpRequest.onreadystatechange = def;
        httpRequest.open('GET', url);
        httpRequest.send();
		
		function def ()
		{
			if (httpRequest.readyState === XMLHttpRequest.DONE) {
		              if (httpRequest.status === 200) {
		                var response = httpRequest.responseXML;
		                var result = document.querySelector('#result');
		                var entries = response.getElementsByTagName('definition');
		
		                var list = document.createElement('ol');
		                result.appendChild(list);
		                
		                for (var i = 0; i < entries.length; i++)
		                {
		                    var defns = document.createElement('li');
		                    var head = document.createElement('h3');
		                    var p1 = document.createElement('p');
		            		var p2 = document.createElement('p');
		            		var name = document.createTextNode(entries[i].getAttribute("name"));
							var text = document.createTextNode(entries[i].childNodes[0].nodeValue);
							var author = document.createTextNode('-'+entries[i].getAttribute('author'));
							
							head.appendChild(name);
							p1.appendChild(text);
							p2.appendChild(author);
							defns.appendChild(head);
							defns.appendChild(p1);
							defns.appendChild(p2);
		                    list.appendChild(defns);
		                }
		              }else {
		              	 alert('There was a problem with the request.');
		              }
		       }
		}
	}
}
                
                    
                    
                    
// // 	new Ajax.Request("request.php",
// // 					{
// // 						method:"get",
// // 						onSuccess:showAll,
// // 						onFailure: ajaxFailure,
// // 						parameters : {
// // 							"term": $("term").value,
// // 							"format": "xml"

// // 									}
// // 					}
// // 					);
// // }

// function showAll(ajax) {
// 	var root = ajax.responseXML.firstChild;
// 	var error = root.getAttribute("error");
	
// 	if (error) {
// 		$("result").innerHTML = error;
// 	} else {
// 		var list = document.createElement("ol");
// 		var entries = root.getElementsByTagName("entry");
// 		for (var i = 0; i < entries.length; i++) {
// 			var definition = document.createElement("p");
// 			var example = document.createElement("p")
// 			var author = document.createElement("p");
// 			example.className = "example";
	
// 			//var entry = root.getElementsByTagName("entry")[0];
// 			var definitionNode = entry.getElementsByTagName("definition")[0];
// 			definition.innerHTML = definitionNode.firstChild.nodeValue;

// 			var exampleNode = entry.getElementsByTagName("example")[0];
// 			example.innerHTML = exampleNode.firstChild.nodeValue;
// 			author.innerHTML = "- " + entry.getAttribute("author");

// 			var li = document.createElement("li");
// 			li.appendChild(definition);
// 			li.appendChild(example);
// 			li.appendChild(author);
// 			list.appendChild(li);
// 		}
		
// 		$("result").innerHTML = "";
// 		$("result").appendChild(list);
// 		// $("result").appendChild(definition);
// 		// $("result").appendChild(example);
// 		// $("result").appendChild(author);
// 	}

// }

// 	function ajaxFailure(ajax)
// {
// 	alert(ajax.status + " " + ajax.statusText);
// }