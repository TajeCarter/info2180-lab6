

window.onload = function()
{
	document.getElementById("lookup").onclick = OnLookUpButtonClicked;
	document.getElementById("def").onclick = gotResult;
}

function OnLookUpButtonClicked(event)
{
	new Ajax.Request("request.php",
					{
						method:"get",
						onSuccess:ShowResult,
						onFailure: ajaxFailure,
						parameters : {
							"term": $("term").value,
							"format": "xml"

									}
					}
					);
}

function gotResult(ajax) {
	var root = ajax.responseXML.firstChild;
	var error = root.getAttribute("error");
	
	if (error) {
		$("result").innerHTML = error;
	} else {
		var list = document.createElement("ol");
		var entries = root.getElementsByTagName("entry");
		for (var i = 0; i < entries.length; i++) {
			var definition = document.createElement("p");
			var example = document.createElement("p")
			var author = document.createElement("p");
			example.className = "example";
	
			//var entry = root.getElementsByTagName("entry")[0];
			var definitionNode = entry.getElementsByTagName("definition")[0];
			definition.innerHTML = definitionNode.firstChild.nodeValue;

			var exampleNode = entry.getElementsByTagName("example")[0];
			example.innerHTML = exampleNode.firstChild.nodeValue;
			author.innerHTML = "- " + entry.getAttribute("author");

			var li = document.createElement("li");
			li.appendChild(definition);
			li.appendChild(example);
			li.appendChild(author);
			list.appendChild(li);
		}
		
		$("result").innerHTML = "";
		$("result").appendChild(list);
		// $("result").appendChild(definition);
		// $("result").appendChild(example);
		// $("result").appendChild(author);
	}

}

	function ajaxFailure(ajax)
{
	alert(ajax.status + " " + ajax.statusText);
}