<?php

header('Content-Type: application/json');
require_once "../Models/InsercionConsulta1Model.php";

$model = new Datos();
$response = ["status" => "error", "data" => [], "message" => ""];

// Si se reciben datos para insertar
if (!empty($_POST['textoInsercion1']) && !empty($_POST['textoInsercion2']) && isset($_POST['textoInsercion3'])) {
    $marca = $_POST['textoInsercion1'];
    $modelo = $_POST['textoInsercion2'];
    $autonomia = (int) $_POST['textoInsercion3'];
    
    // Inserción en la base de datos
    if ($model->insertData($marca, $modelo, $autonomia)) {
        $response["status"] = "success";
        $response["message"] = "Datos insertados correctamente.";
    } else {
        $response["message"] = "Error al insertar datos.";
    }
}

// Consultar todos los datos después de la inserción o en la carga inicial
$response["data"] = $model->getAllData();

// Formatear los datos para la respuesta
if (!empty($response["data"])) {
    $formattedData = [];
    foreach ($response["data"] as $item) {
        $formattedData[] = [
            'ide_coc' => $item['ide_coc'],
            'mar_coc' => $item['mar_coc'],
            'mod_coc' => $item['mod_coc'],
            'aut_coc' => $item['aut_coc']
        ];
    }
    $response["data"] = $formattedData; // Asignar datos formateados
} else {
    $response["data"] = []; // Asegurarse de que la data sea un array vacío si no hay resultados
}

// Devolver la respuesta en formato JSON
echo json_encode($response);

?>
