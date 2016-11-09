

window.onload = function()
{
	document.getElementById("lookup").onclick = OnLookUpButtonClicked;
}

function OnLookUpButtonClicked(event)
{
	new Ajax.Request("request.php",
					{
						method:"get",
						onSuccess:ShowResult,
						onFailure: ajaxFailure {alert('Something went wrong...'); }
					}
					);
}