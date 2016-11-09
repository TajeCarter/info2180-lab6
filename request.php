<?php
// accept a term (keyword)
// respond with a value


$query = $_GET['q'];
$all = $_GET['all'];

$definition = [
    "definition" => "A statement of the exact meaning of a word, especially in a dictionary.",
    "bar" => "A place that sells alcholic beverages",
    "ajax" => "Technique which involves the use of javascript and xml (or JSON)",
    "html" => "The standard markup language for creating web pages and web applications.",
    "css" => "A style sheet language used for describing the presentation of a document written in a markup language.",
    "javascript" => "A lightweight, interpreted programming language with first-class functions that adds interactivity to your website.",
    "php" => "A server-side scripting language, and a powerful tool for making dynamic and interactive websites",
];


$example = [
    "definition" => "I know not what the definition of a Sucubbus is.",
    "bar" => "Everyday after work, Bob goes to the bar to have a drink with her friends.",
    "ajax" => "Ajax stands for Asynchronous Javascript and XML."
    "html" => "HTML means Hypertext Markup Language "
    "css" => "CSS means Cascading Style Sheet "
    "javascript" =>"JS"
    "php" =>"Personal Home Page"
];
$author = [
    "definition" => "- John",
    "bar" => "- Mary",
    "ajax" => "- Yannick",
    "html" => "- Tom",
    "css" => "- Jane ",
    "javascript" =>"- Paul ",
    "php" => "- Marsha"

];



if($all==true and $query==null){
    header("Content-type: text/xml");
    
    $str = '<entries>'; //xml - open tag
    foreach($definitions as $key=>$value){
        $str.='<definition name = \''.$key.'\'>'.$value.'</definition>';
        $str.='<example>'.'Example: '.$example[$key].'</example>';
        $str.='<author>'.$author[$key].'</author>';
    }

     $str.='</entries>'; //xml - close tag

      $xml = new SimpleXMLElement($str);
    echo $xml->asXML();
}
else{
	print "<h3>" . strtoupper($query) . "</h3>";
	print "<p>" . $definition[$query] . "</p>";
	print('Example: '.$example[$query]); print"<br>";print"<br>";
    print($author[$query]);
}
?>