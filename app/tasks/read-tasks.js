jQuery(function($){
    showTasks();
    $(document).on('click', '.read-tasks-button', function(){
        showTasks();
    });
    $.getJSON("http://localhost:8080/api/task/read.php", function(data){
    });
});
function showTasks(){
    $.getJSON("http://localhost:8080/api/task/read.php", function(data){
        readTasksTemplate(data, "");
        changePageTitle("Все задачи");

    });
}