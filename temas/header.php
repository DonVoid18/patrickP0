<!-- Menu principal  -->
<?php
    // echo $_SERVER["HTTP_HOST"];
    echo $_SERVER["REQUEST_URI"];
    $enlaces = ["/PortafolioWeb/menuPagVideo/pagVideo.php","menuPagSobreMi/pagSobreMi.php"];
    
?>
<link rel="stylesheet" href="http://<?php echo $_SERVER["HTTP_HOST"]?>/PortafolioWeb/style.css">
<!-- REQUEST_URI -->

<header class="header">
        <nav class="nav">
            <ul class="nav-menu">
                <?php
                foreach($enlaces as $valor){
                    ?>
                    <li class="nav-menu-item"><a href="<?php echo $valor?>" class="nav-menu-link <?php if($_SERVER["REQUEST_URI"]==$valor) echo 'nav-menu-link-active'?>">Sobre mí</a></li>
                    <?php   
                }
                ?>
                <li class="nav-menu-item"><a href="" class="nav-menu-link nav-menu-link-active">Inicio</a></li>
                
                <li class="nav-menu-item">
                    <a href="menuPagVideo/pagVideo.html" class="nav-menu-link">Video</a></li>
                <li class="nav-menu-item"><a href="menuPagSobreMi/pagSobreMi.html" class="nav-menu-link">Sobre mí</a></li>
                <li class="nav-menu-item"><a href="menuPagContactos/pagContactos.html" class="nav-menu-link">Contactos</a></li>
                <li class="nav-menu-item"><a href="creacionDeLinks/pagCreationLink.html" class="nav-menu-link">Generar links</a></li>
                <li class="nav-menu-item"><a href="gestion/indexGestion.html" class="nav-menu-link">Objetos</a></li>
                <li class="nav-menu-item"><a href="" class="nav-menu-icon"><i class="fab fa-facebook-square"></i></a></li>
                <li class="nav-menu-item"><a href="" class="nav-menu-icon"><i class="fab fa-youtube"></i></a></li>
                <li class="nav-menu-item"><a href="" class="nav-menu-icon"><i class="fab fa-twitter"></i></a></li>
            </ul>
        </nav>
</header>