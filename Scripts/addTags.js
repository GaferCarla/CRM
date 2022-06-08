var general = 1;



function cambiar(id) {
    general = id;
    $tagList = $(".tagList" + general);
    $newTag = $(".newTag" + general);
    var tagList = [];
    tagList_render();
    function tagList_render() {
        $tagList.empty();
        tagList.map(function (_tag) {
            var temp = '<li>' + _tag + '<span class="rmTag">&times;</span></li>';
            $tagList.append(temp);
        });
    };
    $newTag.on('keyup', function (e) {
        if (e.keyCode == 13) {
            console.log("fdfdfdfd");
            var newTag = $(".newTag" + general).val();
            if (newTag.replace(/\s/g, '') !== '') {
                tagList.push(newTag);
                $newTag.val('');
                tagList_render();
            }
        }
    });
    $tagList.on("click", "li>span.rmTag", function () {
        var index = $(this).parent().index();
        tagList.splice(index, 1);
        tagList_render();
    });



}