<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

include_once '../config/database.php';
include_once '../objects/Task.php';

$database = new Database();
$db = $database->getConnection();

$task = new Task($db);

$task->id = isset($_GET['id']) ? $_GET['id'] : die();

$task->readOne();

if ($task->name!=null) {
    $task_arr = array(
        "id" =>  $task->id,
        "name" => $task->name,
        "description" => $task->description,
        "tag_id" => $task->tag_id,
        "tag_name" => $task->tag_name
    );
    http_response_code(200);
    echo json_encode($task_arr);
}else{
    http_response_code(404);
    echo json_encode(array("message" => "Задача не существует."), JSON_UNESCAPED_UNICODE);
}