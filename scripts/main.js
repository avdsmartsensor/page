$(
        function () {
            var id = "#player";
            $(id).scrollToFixed(
                    {
                        bottom: 0,
                        limit: $(id).offset().top
                    }
            );
            
            $(".page").pusher({
                handler: function() {
            //      this.updateText("title");
                  this.updateHtml(".content");
                }
              }
            );

        }
);
