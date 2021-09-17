jQuery(function($){
    $(document).on('click', '.read-one-task-button', function(){
        var id = $(this).attr('data-id');
        $.getJSON("http://localhost:8080/api/task/read_one.php?id=" + id, function(data){
            var read_one_task_html=`
    <div id='read-tasks' class='btn btn-primary pull-right m-b-15px read-tasks-button'>
        <span class='glyphicon glyphicon-list'></span> Все задачи
    </div>
<table class='table table-bordered table-hover'>
    <tr>
        <td class='w-30-pct'>Название задачи</td>
        <td class='w-70-pct'>` + data.name + `</td>
    </tr>
    <tr>
        <td>Описание</td>
        <td>` + data.description + `</td>
    </tr>
    <tr>
        <td>Тег</td>
        <td>` + data.tag_name + `</td>
    </tr>
</table>`;
            $("#page-content").html(read_one_task_html);
            changePageTitle("Просмотр задачи");
        });
    });

});