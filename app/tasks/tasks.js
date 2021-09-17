function readTasksTemplate(data, keywords){
    var read_tasks_html=`
        <form id='search-task-form' action='#' method='post'>
            <div class='input-group pull-left w-30-pct'>
                <input type='text' value='` + keywords + `' name='keywords' class='form-control task-search-keywords' placeholder='Поиск ...' />
                <span class='input-group-btn'>
                    <button type='submit' class='btn btn-default' type='button'>
                        <span class='glyphicon glyphicon-search'></span>
                    </button>
                </span>

            </div>
        </form>
        <div id='create-task' class='btn btn-primary pull-right m-b-15px create-tag-button'>
            <span class='glyphicon glyphicon-plus'></span> Создать задачу
        </div>
        <table class='table table-bordered table-hover'>
            <tr>
                <th class='w-25-pct'>Название задачи</th>
                <th class='w-15-pct'>Тег</th>
                <th class='w-25-pct text-align-center'>Действие</th>
            </tr>`;
    $.each(data.records, function(key, val) {
        read_tasks_html+=`<tr>
            <td>` + val.name + `</td>
            <td>` + val.tag_name + `</td>
            <td>
                <button class='btn btn-primary m-r-10px read-one-task-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-eye-open'></span> Просмотр
                </button>
                <button class='btn btn-info m-r-10px update-task-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-edit'></span> Редактировать
                </button>
                <button class='btn btn-danger delete-task-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-remove'></span> Удалить
                </button>
            </td>
        </tr>`;
    });
    read_tasks_html+=`</table>`;
    $("#page-content").html(read_tasks_html);
}