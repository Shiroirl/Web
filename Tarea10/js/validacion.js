function Validar()
{
    let rut = parseInt(document.getElementById('rut').value);

    $valor = fValidar(rut);

    console.log(rut.length);

   function fValidar($factorValidar)
    {
        $total = 0;
        
        $i = $factorValidar.toString().length;
        console.log($i)
        $factor = 2;

        do
        {
            $i--;
            $temp = $factorValidar.toString().substr($i, 1);
            $temp2 =parseInt($temp)
            $total = $total +($temp2*$factor);
            if ($factor==7)
            {$factor=2;} 
            else
                {$factor++;}
        }
        while($i>0);

        $modulo = $total%11;
        $Validacion = 11 - $modulo;
        if($Validacion==11) $Validacion=0;
        if($Validacion==10) $Validacion=1;

        alert($Validacion);
    }
}