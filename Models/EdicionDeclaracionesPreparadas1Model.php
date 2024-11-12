<?php

    class Datos
    {

        private $mysqli;
        private $data;

        public function __construct()
        {
            $this->mysqli=Conex1::con1();
            $this->data=array();
        }

        // No devuelve datos de la BD (insert, update, delete con consultas preparadas)
        public function setDataPreparedStatements1($sql, $par1, $par2, $par3, $par4)
        {
            $stmt = $this->mysqli->prepare($sql);
            $stmt->bind_param("ssii", $par1, $par2, $par3, $par4); 
            if(!$stmt->execute())
            {
                $result = "La opereción no se ha podido realizar.";
                     
            }
            else
            {
                $result = ["status" => "success", "message" => "Operación realizada con éxito."];
            }
            
            $this->mysqli->close();
            return $result;
            
        }
    }

?>