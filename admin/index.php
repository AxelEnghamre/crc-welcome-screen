<?php
    $nameValue = '';

    if(isset($_POST['name'])) {
        $name = filter_var($_POST['name'],FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        file_put_contents(__DIR__ . '/../name.txt', $name);
    }

    if(file_exists(__DIR__ . '/../name.txt')) {
        $nameValue = file_get_contents(__DIR__ . '/../name.txt');
    }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="admin/admin.css">
    <title>admin</title>
</head>
<body>
    <form action="" method="post">
        <label for="name">Namn om tom visas inget</label>
        <input type="text" name="name" id="name" placeholder="Namn..." value='<?= $nameValue?>'>
        <input type="submit" value="spara">
    </form>
</body>
</html>