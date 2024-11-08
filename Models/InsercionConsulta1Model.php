<?php
require_once "../Db/Con1Db.php"; 

class Datos {
    // Método para insertar datos
    public function insertData($marca, $modelo, $autonomia) {
        // Conexión
        $mysqli = Conex1::con1();
        try {
            // Preparación de la declaración
            $stmt = $mysqli->prepare("INSERT INTO coches (mar_coc, mod_coc, aut_coc) VALUES (?, ?, ?)");
            $stmt->bind_param("ssi", $marca, $modelo, $autonomia);
            // Ejecución de la sentencia
            $stmt->execute();
            return $stmt->affected_rows > 0;
        } catch (Exception $e) {
            // Manejo de excepciones
            return false;
        } finally {
            // Liberación de la declaración y cierre de la conexión
            $stmt->close();
            $mysqli->close();
        }
    }

    // Método para obtener todos los datos
    public function getAllData() {
        $mysqli = Conex1::con1();
        $data = [];
        try {
            // Ejecución de la consulta
            $result = $mysqli->query("SELECT * FROM coches");
            // Obtención de los datos
            while ($row = $result->fetch_assoc()) {
                $data[] = [
                    'ide_coc' => $row['ide_coc'],
                    'mar_coc' => $row['mar_coc'],
                    'mod_coc' => $row['mod_coc'],
                    'aut_coc' => $row['aut_coc']
                ];
            }
        } catch (Exception $e) {
            // Manejo de excepciones
            return [];
        } finally {
            // Liberación del conjunto de resultados y cierre de la conexión
            if (isset($result)) {
                $result->free();
            }
            $mysqli->close();
        }
        return $data;
    }
}
?>
