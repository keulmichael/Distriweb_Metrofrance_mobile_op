<?php
include "07655lj/connexion_mobile.php";

$date_heure = date("d/m/Y H:i");$heure = date("H:i");$date = date("d-m-Y",mktime(0,0,0,date("m"),date("d"),date("Y")));

 $edition=$_GET['edition']; $num=$_GET['num'];$tournee=$_GET['t_choix'];$Site=$_GET['site'];$type=$_GET['type'];

$extensions = array('.png', '.gif', '.jpg', '.jpeg'); $extension = strrchr($_FILES['photo']['name'], '.');

	$query = "SELECT num,Num_base FROM plan WHERE Edition='$edition' and Date='00-00-0000' AND num='$num'";
	$result = mysql_query($query);;
	while($rang = mysql_fetch_array($result)){; 
	$req = mysql_num_rows($result);
	
$num_base = $rang['Num_base'];

if ($type=='normal'){$nom_photo="../../mobile/photos/$edition/".$num_base.".jpg";}
else{$nom_photo_op="../../../reporting/mobile/photos/".$num_base.".jpg";}
}

if ($_GET['imageData']){
$date_photo=date("d m Y",filemtime($_FILES["photo"]["tmp_name"]));

if ($type=='normal'){
move_uploaded_file($_FILES["photo"]["tmp_name"],$nom_photo_op);
touch($nom_photo_op,time(),$date_photo);
}

else{
move_uploaded_file($_FILES["photo"]["tmp_name"],$nom_photo);
touch($nom_photo,time(),$date_photo);
}

if ($type=='normal'){
$imageData=$_GET['imageData']." | ".$date;
	
$sql = "UPDATE plan SET presta='$imageData' WHERE num='$num' and Date='00-00-0000' and Edition='$edition'";
mysql_query($sql) or die('Erreur SQL !<br />');
}
} 

else{
$lien="file:///storage/emulated/0/DCIM/Camera/";
$date_photo=date("d m Y",filemtime($_FILES["photo"]["tmp_name"]));

move_uploaded_file($_FILES["photo"]["tmp_name"],$nom_photo);
touch($nom_photo,time(),$date_photo);

$imageData=$_GET['imageData']." | ".$date;
}

?>

