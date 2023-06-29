
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>
<body>
    <h3>Rellene el formulario</h3>
    <div>
      <form action="" method="POST">
            <div>
                <label>Ingrese su rut: (sin puntos ni guion y sin digito verificador)</label>
                <input type="text" name="rut" id="rut" required>
                <button type="button" onclick="Validar()">Validar</button>
            </div>
      </form>                                                                                                                                                               
    </div>
    <div id="resultado"></div>
    <script language="javascript" src="js/validacion.js"></script>
    
</body>
</html>