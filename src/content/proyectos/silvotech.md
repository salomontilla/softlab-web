---
autores:
    autor1:
        img_autor: default.svg
        autor: Carol Vanesa Fernandez Tafur
        programa: Ingenieria de software
        modalidad: Registro de software
        social:   
    autor2:
        img_autor: zulema.png
        autor: Zulema Yidney León Escobar
        programa: Ingeniería de sistemas
        modalidad: Registro de software
        social:
    autor3:
        img_autor: cristhian_canar.png
        autor: Cristhian Alejandro Cañar Muñoz
        programa: Ingeniería de software
        modalidad: Registro de software
        social:
            logo_lk_white: https://co.linkedin.com/in/cristhian-canar 
img_producto: silvotech.png
nombre_producto: SilvoTech
descripcion: El desarrollo del software SilvoTech busca ayudar a los pequeños productores ganaderos y campesinos, en la implementación del sistema silvopastoril en su finca, mejorar las prácticas ganaderas y promover la protección ambiental. La estructuración del código fuente en base a arquitecturas que fomenten la vida útil y mantenimiento del software
fecha: 2024-08-27
tecnologias:
    php: logo_php.svg
    laravel: logo_laravel.svg
    kotlin: logo_kotlin.svg
    mariaDb: logo_mariadb.svg

---
<p>La plataforma web de <strong>SilvoTech</strong> está desarrollada en <strong>PHP</strong> utilizando el framework <strong>Laravel 8</strong>, y emplea <strong>MariaDB</strong> como sistema de gestión de base de datos relacional. Esta configuración permite establecer un <strong>canal de comunicación con la aplicación móvil</strong>. El sistema se aloja en un <strong>hosting privado</strong> proporcionado por la empresa <strong>Hostinger</strong>.</p>

<p>El desarrollo web se basa en la arquitectura <strong>MVC (Modelo-Vista-Controlador)</strong>, tal como recomienda Laravel, y utiliza el patrón <strong>API REST</strong> para comunicarse con la app móvil. Todo esto forma parte de un <strong>único proyecto web</strong>, cuyo objetivo principal es la <strong>gestión de usuarios</strong> y la actualización de su información.</p>

<p>La aplicación móvil de SilvoTech está diseñada para dispositivos <strong>Android</strong> desde la versión <strong>5.1 (API 22)</strong> en adelante, y se desarrolla en el lenguaje <strong>Kotlin</strong>. Sigue las buenas prácticas modernas, usando <strong>Clean Architecture</strong> y el patrón <strong>MVVM</strong> para una adecuada organización y manejo de datos. Para el almacenamiento local utiliza <strong>Shared Preferences</strong>, y para la comunicación con la web emplea <strong>Retrofit2</strong>, que permite acceder a los distintos <strong>endpoints</strong> expuestos por la plataforma.</p>
