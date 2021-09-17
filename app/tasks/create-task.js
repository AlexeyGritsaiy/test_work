jQuery(function($){
    $(document).on('click', '.create-task-button', function(){
    });

    $(document).on('submit', '#create-task-form', function(){
        var form_data=JSON.stringify($(this).serializeObject());
        $.ajax({
            url: "http://localhost:8080/api/task/create.php",
            type : "POST",
            contentType : 'application/json',
            data : form_data,
            success : function(result) {
                showTasks();
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        });
        return false;
    });
    $.getJSON("http://localhost:8080/api/tag/read.php", function(data){
        var tags_options_html=`<select name='tag_id' class='form-control'>`;
        $.each(data.records, function(key, val){
            tags_options_html+=`<option value='` + val.id + `'>` + val.name + `</option>`;
        });
        tags_options_html+=`</select>`;
        var create_task_html=`
    <div id='read-tasks' class='btn btn-primary pull-right m-b-15px read-tags-button'>
        <span class='glyphicon glyphicon-list'></span> Все задачи
    </div>
<form id='create-task-form' action='#' method='post' border='0'>
    <table class='table table-hover table-responsive table-bordered'>
        <tr>
            <td>Название задачи</td>
            <td><input type='text' name='name' class='form-control' required /></td>
        </tr>
        <tr>
            <td>Описание</td>
            <td><textarea name='description' class='form-control' required></textarea></td>
        </tr>
        <tr>
            <td>Тег</td>
            <td>` + tags_options_html + `</td>
        </tr>
        <tr>
            <td></td>
            <td>
                <button type='submit' class='btn btn-primary'>
                    <span class='glyphicon glyphicon-plus'></span> Создать задачу
                </button>
            </td>
        </tr>

    </table>
</form>`;
        $("#page-content").html(create_task_html);
        changePageTitle("Создание задачи");
    });
});