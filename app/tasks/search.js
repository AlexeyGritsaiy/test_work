jQuery(function($){
    $(document).on('submit', '#search-task-form', function(){
        var keywords = $(this).find(":input[name='keywords']").val();
        $.getJSON("http://localhost:8080/api/task/search.php?s=" + keywords, function(data){
            readTasksTemplate(data, keywords);
            changePageTitle("Поиск : " + keywords);

        });
        return false;
    });

});