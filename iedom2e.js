//<script language="JScript">

function initDOM2Events()
{
    if(!document.all)
        return;
    
    var elems = document.all;
    for(var i = 0; i < elems.length; i++)
    {
        var el = elems[i];
        if(el.attachEvent)
        {
            el.addEventListener = function(type, listener, useCapture)
            {
                this.attachEvent("on" + type, listener);
            };
            el.removeEventListener = function(type, listener, useCapture)
            {
                this.detachEvent("on" + type, listener);
            };
        }
    }
}

//</script>