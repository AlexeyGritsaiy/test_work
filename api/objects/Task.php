<?php
include_once '../config/database.php';
class Task {

    private $conn;
    private $table_name = "tasks";

    public $id;
    public $name;
    public $description;
    public $tag_id;
    public $tag_name;
    public $created;

    public function __construct($db){
        $this->conn = $db;
    }

    function read(){
        $query = "SELECT
                c.name as task_name, p.id, p.name, p.description, p.task_id, p.created
            FROM
                " . $this->table_name . " p
                LEFT JOIN
                    tasks c
                        ON p.task_id = c.id
            ORDER BY
                p.created DESC";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }
    function create(){
        $query = "INSERT INTO
                " . $this->table_name . "
            SET
                name=:name, description=:description, task_id=:task_id, created=:created";

        $stmt = $this->conn->prepare($query);

        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->description=htmlspecialchars(strip_tags($this->description));
        $this->tag_id=htmlspecialchars(strip_tags($this->tag_id));
        $this->created=htmlspecialchars(strip_tags($this->created));

        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":description", $this->description);
        $stmt->bindParam(":tag_id", $this->tag_id);
        $stmt->bindParam(":created", $this->created);

        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

    function readOne() {

        $query = "SELECT
                c.name as task_name, p.id, p.name, p.description, p.task_id, p.created
            FROM
                " . $this->table_name . " p
                LEFT JOIN
                    tasks c
                        ON p.task_id = c.id
            WHERE
                p.id = ?
            LIMIT
                0,1";

        $stmt = $this->conn->prepare( $query );

        $stmt->bindParam(1, $this->id);

        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->name = $row['name'];
        $this->description = $row['description'];
        $this->tag_id = $row['tag_id'];
        $this->tag_name = $row['tag_name'];
    }

    function update(){

        $query = "UPDATE
                " . $this->table_name . "
            SET
                name = :name,
                description = :description,
                tag_id = :tag_id
            WHERE
                id = :id";

        $stmt = $this->conn->prepare($query);

        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->description=htmlspecialchars(strip_tags($this->description));
        $this->tag_id=htmlspecialchars(strip_tags($this->tag_id));
        $this->id=htmlspecialchars(strip_tags($this->id));

        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':description', $this->description);
        $stmt->bindParam(':tag_id', $this->tag_id);
        $stmt->bindParam(':id', $this->id);

        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

    function delete(){

        $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";

        $stmt = $this->conn->prepare($query);

        $this->id=htmlspecialchars(strip_tags($this->id));

        $stmt->bindParam(1, $this->id);

        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

    function search($keywords){

        $query = "SELECT
                c.name as task_name, p.id, p.name, p.description, p.task_id, p.created
            FROM
                " . $this->table_name . " p
                LEFT JOIN
                    tasks c
                        ON p.task_id = c.id
            WHERE
                p.name LIKE ? OR p.description LIKE ? OR c.name LIKE ?
            ORDER BY
                p.created DESC";

        $stmt = $this->conn->prepare($query);

        $keywords=htmlspecialchars(strip_tags($keywords));
        $keywords = "%{$keywords}%";

        $stmt->bindParam(1, $keywords);
        $stmt->bindParam(2, $keywords);
        $stmt->bindParam(3, $keywords);

        $stmt->execute();

        return $stmt;
    }
}