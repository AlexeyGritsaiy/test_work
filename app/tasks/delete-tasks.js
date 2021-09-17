jQuery(function($){
    $(document).on('click', '.delete-task-button', function(){
        var task_id = $(this).attr('data-id');
        bootbox.confirm({

            message: "<h4>Вы уверены?</h4>",
            buttons: {
                confirm: {
                    label: '<span class="glyphicon glyphicon-ok"></span> Да',
                    className: 'btn-danger'
                },
                cancel: {
                    label: '<span class="glyphicon glyphicon-remove"></span> Нет',
                    className: 'btn-primary'
                }
            },
            callback: function (result) {
                if (result==true) {
                    $.ajax({
                        url: "http://localhost:8080/api/task/delete.php",
                        type : "POST",
                        dataType : 'json',
                        data : JSON.stringify({ id: task_id }),
                        success : function(result) {
                            showTasks();
                        },
                        error: function(xhr, resp, text) {
                            console.log(xhr, resp, text);
                        }
                    });

                }
            }
        });
    });
});