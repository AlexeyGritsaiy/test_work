jQuery(function($){
    $(document).on('click', '.update-task-button', function(){
        var id = $(this).attr('data-id');
        $.getJSON("http://localhost:8080/api/task/read_one.php?id=" + id, function(data){
            var name = data.name;
            var description = data.description;
            var tag_id = data.tag_id;
            var tag_name = data.tag_name;
            $.getJSON("http://localhost:8080/api/tag/read.php", function(data){
                var tags_options_html=`<select name='tag_id' class='form-control'>`;
                $.each(data.records, function(key, val){
                    if (val.id==tag_id) {
                        tags_options_html+=`<option value='` + val.id + `' selected>` + val.name + `</option>`;
                    } else {
                        tags_options_html+=`<option value='` + val.id + `'>` + val.name + `</option>`;
                    }
                });
                tags_options_html+=`</select>`;
                var update_task_html=`
    <div id='read-task' class='btn btn-primary pull-right m-b-15px read-tasks-button'>
        <span class='glyphicon glyphicon-list'></span> Все задачи
    </div>
    <form id='update-task-form' action='#' method='post' border='0'>
        <table class='table table-hover table-responsive table-bordered'>
            <tr>
                <td>Название задачи</td>
                <td><input value=\"` + name + `\" type='text' name='name' class='form-control' required /></td>
            </tr>
            <tr>
                <td>Описание</td>
                <td><textarea name='description' class='form-control' required>` + description + `</textarea></td>
            </tr>
            <tr>
                <td>Тег</td>
                <td>` + tags_options_html + `</td>
            </tr>
            <tr>
                <td><input value=\"` + id + `\" name='id' type='hidden' /></td>
                <td>
                    <button type='submit' class='btn btn-info'>
                        <span class='glyphicon glyphicon-edit'></span> Обновить задачу
                    </button>
                </td>
            </tr>

        </table>
    </form>
`;
                $("#page-content").html(update_task_html);
            });
        });
    });

    $(document).on('submit', '#update-task-form', function(){
        var form_data=JSON.stringify($(this).serializeObject());
        $.ajax({
            url: "http://localhost:8080/api/task/update.php",
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
});