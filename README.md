# CAKESHOP

<html>
<head>
    <link rel="shortcut icon" href="MRNA-723e7c1a.png">
    <title>Moderna</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="Moderna-diseño.css" />
</head>
<body>
    <style>
      
.idg{
 opacity:50%;
 transition:0.3s;
 filter:grayscale(50%);

 &:hover{ opacity:100%;  margin-top:-5px;  filter:grayscale(0%);
}
 &:active{transform:scale(0.8)}
 
}
.idc{
 opacity:50%;
 transition:0.3s;
 filter:grayscale(80%);
 
 &:hover{ opacity:100%;  margin-top:-5px;  filter:grayscale(0%);
}
 &:active{transform:scale(0.8)}
 
}


        .transparent-button {
            background: transparent;
            border: none;
            cursor: pointer;
         
        }
        .transparent2-button {
            background: transparent;
            border: none;
            cursor: pointer;
         
        }
    </style>
    <script>
      
        document.addEventListener("DOMContentLoaded", function () {
            zoomVanilla.default("img[data-action='zoom']");
        });
    </script>
   
    <script>
    
        var translations = {
            "Sobre nosotros": "About Us",
            "El poder del ARNm": "The Power of mRNA",
            "Buscar": "Search",
            "Años de progreso": "Years of Progress",
            "Productos en nuestra cartera": "Products in Our Portfolio",
            "Ensayos clinicos en curso": "Clinical Trials in Progress",
            "Presentamos a Moderna": "Introducing Moderna",
            "El objetivo de Moderna es hacer realidad la promesa de la ciencia del ARNm": "The goal of Moderna is to make the promise of mRNA science a reality",
            "CONOCE NUESTRA MISION": "LEARN ABOUT OUR MISSION",
            "Únete a Moderna y cambia el mundo de la medicina": "Join Moderna and change the world of medicine",
            "ENCUENTRA LA OPORTUNIDAD LABORAL QUE BUSCAS": "FIND THE JOB OPPORTUNITY YOU'RE LOOKING FOR",
            "¿Que es el ARNm?": "What is mRNA?",
            "El ARN mensajero (ARNm) ya existe en el organismo, lleva un \"mensaje\"": "Messenger RNA (mRNA) already exists in the body, carrying a \"message\"",
            "Otra manera de combatir las enfermedades": "Another way to fight diseases",
            "Nuevos tratamientos": "New treatments",
            "Más medicamentos, más rápido": "More medicines, faster",
            "MÁS INFORMACIÓN SOBRE EL ARNM": "MORE ABOUT mRNA",
            "Te presentamos a Juan Carlos Gil": "Introducing Juan Carlos Gil",
            "Director General de Moderna en España y Portugal": "Managing Director of Moderna in Spain and Portugal",
            "CONOCE A MÁS MIEMBROS DEL EQUIPO": "MEET MORE TEAM MEMBERS",
            "Notificación de Acontecimientos adversos": "Adverse Events Notification",
            "Notifiquenos cualquier acontecimiento adverso que haya podido presentar, a Moderna mediante el portal de notificación de Acontecimientos Adversos o llamando al 900 031 015": "Notify us of any adverse events you may have experienced to Moderna through the Adverse Events Notification portal or by calling 900 031 015",
            "Para cualquier solicitud de información médica o cualquier otra información sobre seguridad:": "For any medical information request or any other safety information:",
            "Llame al 900 031 015\n8h a 17h CET, de lunes a viernes\nCorreo electrónico EMEAMedinfo@modernatx.com": "Call 900 031 015\n8am to 5pm CET, Monday to Friday\nEmail EMEAMedinfo@modernatx.com",
            "Ponte en contacto con Moderna": "Contact Moderna",
            "Trabaja con Moderna": "Work with Moderna",
            "Principe de Vergara, 132": "Principe de Vergara, 132",
            "28002 Madrid": "28002 Madrid"
        };
        function changeToEnglish() {
           
            document.querySelectorAll('*').forEach(function(element) {
                if (element.textContent.trim() in translations) {
                    element.textContent = translations[element.textContent.trim()];
                }
            });
        }
    </script>

    <div id="encabezado">
        <div id="logo">
            <img src="Moderna_logo.svg.png" height="100%" width="50%"/>
        </div>
        <div id="menu">
            <ul id="menu1">
                <li id="menu2"> Sobre nosotros </li>
                <li id="menu2"> El poder del ARNm</li>
            </ul>
        </div>
        <div id="buscador">
            <img src="busqueda (1).png"/>
            <p> Buscar</p>
        </div>
        <div id="bandera">
    
            <img src="Bandera.png"  id="españa"/>
            <button class="transparent-button" onclick="changeToEnglish()">English</button>
           
            <img src="flecha-hacia-abajo-para-navegar.png" id="flecha"/>
        </div>

    </div>

    <div id="inicio">
        <img src="Inicio.jpg" height="100%" width="100%"/>
    </div>

    <div id="uno">
        <div id="uno_texto">
            <div> <h1>12</h1> <p>Años de progreso</p></div>
            <div> <h1>48</h1> <p>Productos en nuestra cartera</p></div>
            <div> <h1>35</h1> <p>Ensayos clinicos en curso</p></div>
            <h2>Presentamos a Moderna</h2>
            <p> El objetivo de Moderna es hacer realidad la promesa de la ciencia del ARNm</p>
            <h4>CONOCE NUESTRA MISION</h4>
            
        </div>
        <div id="uno_imagen">
            <img class="idg" src="Imagen1.jpeg"/>
            <h2 style="padding-left: 6%;"> Únete a Moderna y cambia el mundo de la medicina</h2>
            <h4 style="padding-left: 6%;"> ENCUENTRA LA OPORTUNIDAD LABORAL QUE BUSCAS</h4>
        </div>
    </div>

    <div id="titulo">
        <center>
        <h3> ¿Que es el ARNm?</h3>
        <p>El ARN mensajero (ARNm) ya existe en el organismo, lleva un "mensaje"</p>
        </center>
        </div>

    <div id="dos">
        <div id="dos_lista">
            <ul>
                <li>Otra manera de combatir las enfermedades</li>
                <li>Nuevos tratamientos</li>
                <li>Más medicamentos, más rápido</li>
            </ul>
        </div>
        <div id="dos_imagen">
            <img  class="idg" src="imagen2.jpeg"  />
        </div>
        <div id="dos_texto">
            <h2> Otra manera de combatir las enfermedades</h2>
            <p>
                Los medicamentos de ARNm combaten las enfermedades de un modo diferente al de los medicamentos convencionales, ya que se estimula al sistema inmunitario para que produzca los recursos necesarios para prevenir o combatir una enfermedad.
            </p>
            <h4>MÁS INFORMACIÓN SOBRE EL ARNM</h4>

        </div>
    </div>

    <div class="idc" id="tres">
        <div id="tres_texto">
            <h2> Te presentamos a Juan Carlos Gil</h2>
            <p>
                Director General de Moderna en España y Portugal
                <br>
                "En Moderna España y Portugal estamos creando un equipo de alto rendimiento enfocado al éxito, y guiado por los valores de la marca, atrevido, colaborativo, curioso y tenaz, para hacer realidad la promesa de la medicina de ARNm en nuestro pais".
            </p>
            <h4>CONOCE A MÁS MIEMBROS DEL EQUIPO</h4>
        </div>
        <div id="tres_imagen">
            <img  src="imagen3.jpg" />
        </div>
    </div>

    <div id="cuatro">
        <h2>Notificación de Acontecimientos adversos</h2>
        <p>
            Notifiquenos cualquier acontecimiento adverso que haya podido presentar, a Moderna mediante el portal de notificación de Acontecimientos Adversos o llamando al 900 031
            <br>
            015
            <br>
            <b>Para cualquier solicitud de información médica o cualquier otra información sobre seguridad:</b>
            <br>
            Llame al 900 031 015
            <br>
            8h a 17h CET, de lunes a viernes
            <br>
            Correo electrónico EMEAMedinfo@modernatx.com
        </p>
    </div>

    <div id="pie_pagina">
        <table>
            <tr>
                <td><b>Ponte en contacto con Moderna</b> </td>
                <td><b>Trabaja con Moderna</b></td>
            </tr>
            <tr>
                <td>Principe de Vergara, 132 </td>
                <td>Únete a nuestro equipo</td>
            </tr>
            <tr>
                <td>28002 Madrid </td>
                <td></td>
            </tr>
        </table>
          
            
                
                
    </div>
</body>

</html>
