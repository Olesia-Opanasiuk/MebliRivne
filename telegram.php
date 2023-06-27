
<?php
$name=$_POST['name'];
$phone=$_POST['phone'];
$email=$_POST['email'];

$token = "5855207389:AAEclSgDQ5I92lzj9AnbD5XQp80WcQ2SUns";
$chat_id = "-853902145";
$sitename = "dev3.greens.studio";

$arr = array(
    'Замовлення з сайту: '=> $sitename,
    'Iм\'я: ' => $name,
    'Телефон: ' => $phone,
    'Пошта: ' => $email
);

foreach($arr as $key => $value){
$txt .="<b>".$key."</b>".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

echo($sendToTelegram);

if ($sendToTelegram) {
        echo('Дякуємо! Ваша заявка принята. Ми зв\'яжемось з Вами в найближчий час.');
    }

else {
    echo('Щось пішло не так. Спробуйте відправити форму ще раз.');
    }
?>