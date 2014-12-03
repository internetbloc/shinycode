<?php
if(isset($_GET['s']))
    exit(highlight_file(__FILE__,1));
?>
<form action="<?= $_SERVER['PHP_SELF'] ?>" method="post">
    <input name="search" placeholder="enter url">
    <input type="submit">
</form>

<?php

$q = filter_input(INPUT_POST,'search',FILTER_SANITIZE_STRING);

if(empty($q))
    exit;

require 'db.inc.php';

$res = db()->query(
    'SELECT
        p.*
     FROM packages AS p
        LEFT JOIN urls AS u
            ON u.package_id = p.id
     WHERE
        u.url LIKE '.db()->quote("%$q%").'
     LIMIT 1');

if($res->rowCount())
{
    $pkgs = current($res->fetchAll(PDO::FETCH_ASSOC));
    $res2 = db()->query(
        'SELECT
            f.*
         FROM files AS f
            LEFT JOIN dependencies AS d
                ON d.file_id = f.id
         WHERE
            d.package_id = '.db()->quote($pkgs['id']));
    while($row = $res2->fetch(PDO::FETCH_ASSOC))
    {
        if(!isset($pkgs[$row['type']]))
            $pkgs[$row['type']] = [];
        $pkgs[$row['type']][] = [
            'name' => $row['name'],
            'src'  => $row['src']
        ];
    }
    echo '<pre>',print_r(json_encode($pkgs),1),'</pre>';
} else {
    echo '<strong>No results!</strong>';
}
