

<?php
// $success = false;
// $successTxt ="";

// $faemail = $_POST['faemail'];
// $famobile =$_POST['famobile'];
// $job = $_POST['status'];
// $edst = $_POST['edust'];
// $maf = $_POST['afford'];
// $appfa = $_POST['applyfa'];

// $subject = "Utraining LandingPage Form";
// $message2 = "Email = " . $faemail . "\r\n Mobile No. = " . $famobile . "\r\n Education = " . $edst . "\r\n Job = " . $job . "\r\n MoneyAfford = " . $maf . "\r\n Applying Condition = " . $appfa . "\r\n" . $file  "\r\n";
// // $message2 .= "Contact Now";

// {
//   if ($faemail && $famobile) {
//     $mailTo = "sales@utrainings.com"; // change it to your host mail for example (contact@yourdomain.com).
//     $headers = "From: " . $faemail;
//     $Subject = 'Utraining fininacial aid Form';
//     $success = mail($mailTo, $Subject, $message2, $headers);
//   }
// }


// // //  Read the Order form values
// // $success = false;
// // $successTxt = "";

$senderName = isset($_POST['name']) ? preg_replace("/[^\.\-\' a-zA-Z0-9]/", "", $_POST['name']) : "";
$senderemail = isset($_POST['address']) ? preg_replace("/[^\.\-\' a-zA-Z0-9]/", "", $_POST['address']) : "";
$senderPhone = isset($_POST['phone']) ? preg_replace("/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['phone']) : "";
$budget = $_POST['budget'];
$message = $_POST['message'];

$txt = "Name:" . $senderName . "\n\nPhone:" . $senderPhone . "\n\nAddress:" . $senderemail . "\n\nPackage:" . $budget; 
{
  // If all values exist, send the email
  if ($senderName && $senderPhone) {
    $mailTo = "sales@utrainings.com"; // change it to your host mail for example (contact@yourdomain.com).
    $headers = "From:" . $senderPhone;
    $Subject = 'Utraining Contact Form';
    $success = mail($mailTo, $Subject, $txt, $headers);

     //$successTxt = "<p class='uk-alert uk-alert-success uk-margin-large-bottom success' data-uk-alert=''>Thanks for contacting us. We will contact you ASAP!</p>";
    // echo $successTxt;
  }
}
$filenameee =  $_FILES['file']['name'];
$fileName = $_FILES['file']['tmp_name']; 
// $bnkfilee =  $_FILES['file']['name'];
// $bnkfile = $_FILES['file']['tmp_name']; 
$faemail = $_POST['faemail'];
$famobile = $_POST['famobile'];
$job = $_POST['status'];
$edst = $_POST['edust'];
$maf = $_POST['afford'];
$famsg = $_POST['applyfa'];

$file_ext = explode ('.', $fileName);
echo $file_ext; 
// $message ="Email   = " . $faemail . "\r\nMobile No. = " .  $famobile ."\r\nEmplymet Status = " .  $job .
//   "\r\nQualification = " .  $edst . "\r\nMoney Afford = " .  $maf . "\r\n Why I Apply: = " . $famsg; 

// $subject ="Financial aid form";
// $fromname ="Utrainings";
// $fromemail = 'pureorganicspk@gmail.com';  //if u dont have an email create one on your cpanel
// $mailto = 'sales@utrainings.com';  //the email which u want to recv this email
// $content = file_get_contents($fileName);
// $content = chunk_split(base64_encode($content));
// // a random hash will be necessary to send mixed content
// $separator = md5(time());
// // carriage return type (RFC)
// $eol = "\r\n";
// // main header (multipart mandatory)
// $headers = "From: ".$fromname." <".$fromemail.">" . $eol;
// $headers .= "MIME-Version: 1.0" . $eol;
// $headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"" . $eol;
// $headers .= "Content-Transfer-Encoding: 7bit" . $eol;
// $headers .= "This is a MIME encoded message." . $eol;
// // message
// $body = "--" . $separator . $eol;
// $body .= "Content-Type: text/plain; charset=\"iso-8859-1\"" . $eol;
// $body .= "Content-Transfer-Encoding: 8bit" . $eol;
// $body .= $message . $eol;
// // attachment
// $body .= "--" . $separator . $eol;
// $body .= "Content-Type: application/octet-stream; name=\"" . $filenameee . "\"" . $eol;
// $body .= "Content-Transfer-Encoding: base64" . $eol;
// $body .= "Content-Disposition: attachment" . $eol;
// $body .= $content . $eol;
// $body .= "--" . $separator . "--";
// //SEND Mail
// if (mail($mailto, $subject, $body, $headers)) {
//     echo "mail send ... OK"; // do what you want after sending the email
    
// } else {
//     echo "mail send ... ERROR!";
//     print_r( error_get_last() );
// }












?>
