//<script language="JScript">

function initDOM2Events()
{
    var elems = document.getElementsByTagName("*");
    for(var i = 0; i < elems.length; i++)
    {
        var el = elems[i];
        if(el.attachEvent)
        {
            el.addEventListener = function(type, listener, useCapture)
            {
                el.attachEvent("on" + type, listener);
            };
        }
    }
}

//</script>