<?php
require('php').registerExtension();
if(isset($_POST) && !empty($_POST)){
    $MatricNo = $_POST['MatricNo'];
    $password = $_POST['password'];

    if ($MatricNo == '140404101' && password == 'okay' ){
        ?>
        {
            "success": true:
            "secret": "Only the admin have access to this"
        }
        <?php
    } else {
        ?>
    }
    {
        "success": false,
        "messagse": "Invalid credentials"
    
    }
    <?php
    }
} else {
    ?>
    {
        "success": false,
        "message": "Only POST access accepted"
    }
    <?php
}
?>