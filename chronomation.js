//<script language="JScript">

var chronomation = new Object();

chronomation.listParser = function(separator)
{
    this.separator = separator;
    this.all = new Array();
    
    this.parse = function(text)
    {
        this.all = new Array();
        if(text == null)
            return null;
        
        text = text.toString().replace(/\s+/g, " ");
        text = text.replace(
            new RegExp(" ?" + this.separator + " ?", "g"),
            this.separator
        );
        text = text.replace(/^ | $/g, "");
        return this.all = this.all.concat(text.split(this.separator));
    };
};

chronomation.collection = function()
{
    var iteratorIndex = 0;
    this.all = new Array();
    
    this.add = function(item)
    {
        if(item == null)
            return -1;
        
        if(this.contains(item) != -1)
            return -1;
        
        return (this.all.push(item) - 1);
    };
    
    this.clear = function()
    {
        this.all = new Array();
        return true;
    };
    
    this.contains = function(item)
    {
        for(var i = 0; i < this.all.length; i++)
        {
            if(this.all[i] == item)
                return i;
        }
        
        return -1;
    };
    
    this.insert = function(item, index)
    {
        if(isNaN(index))
            return false;
        
        if((index < 0) || (index > this.all.length))
            return false;
        
        if(item == null)
            return false;
        
        if(this.contains(item) != -1)
            return false;
        
        var part = this.all.splice(index, this.all.length - index, item);
        if(part.length)
            this.all = this.all.concat(part);
        
        return true;
    };
    
    this.item = function(index)
    {
        if(isNaN(index))
            return null;
        
        if((index < 0) || (index >= this.all.length))
            return null;
        
        return this.all[index];
    };
    
    this.next = function()
    {
        if(iteratorIndex >= this.all.length)
        {
            return null;
        }
        
        return this.all[iteratorIndex++];
    };
    
    this.remove = function(item)
    {
        for(var i = 0; i < this.all.length; i++)
        {
            if(this.all[i] == item)
            {
                return ((this.removeAt(i) == item) ? i : -1);
            }
        }
        
        return -1;
    };
    
    this.removeAt = function(index)
    {
        if(isNaN(index))
            return null;
        
        if((index < 0) || (index >= this.all.length))
            return null;
        
        var part = this.all.splice(index + 1, this.all.length - index - 1);
        var item = this.all.pop();
        if(part.length)
            this.all = this.all.concat(part);
        
        return item;
    };
    
    this.reset = function()
    {
        iteratorIndex = 0;
    };
    
};

chronomation.time = new Object();

chronomation.time.parseOffsetTimeValue = function(value)
{
    var values = null;
    var time = null;
    
    if(values = value.match(/^([\+\-])?((?:[0-9]+:)?[0-9]{2}:[0-9]{2}(?:\.[0-9]+)?|[0-9]+(?:\.[0-9]+)?(?:h|min|s|ms)?)$/))
        if(time = chronomation.time.parseClockValue(values[2]))
            if(values[1] == "-")
                time *= -1;
    
    return time;
};

chronomation.time.parseClockValue = function(value)
{
    var values = null;
    var time = 0;
    
    value = value.replace(/ /g, "");
    
    // Full clock value or partial clock value
    if(values = value.match(/^(?:([0-9]+):)?([0-9]{2}):([0-9]{2})(\.[0-9]+)?$/))
    {
        time += values[1] ? (parseInt(values[1], 10) * 60 * 60 * 1000) : 0;
        time += parseInt(values[2], 10) * 60 * 1000;
        time += parseInt(values[3], 10) * 1000;
        time += values[4] ? (parseFloat(values[4]) * 1000) : 0;
        
        return time;
    }
    
    // Timecount value
    if(values = value.match(/^([0-9]+)(\.[0-9]+)?(h|min|s|ms)?$/))
    {
        var mul = 1;
        switch(values[3])
        {
            case "h":
                mul *= 60;
            case "min":
                mul *= 60;
            case "s":
                mul *= 1000;
            case "ms":
                break;
            default:
                mul = 1000;
        }
        
        time += parseInt(values[1], 10);
        time += values[2].length ? parseFloat(values[2]) : 0;
        time *= mul;

        return time;
    }
    
    return null;
};
    
chronomation.time.parseWallclockSyncValue = function(value)
{
    var values = null;
    var time = 0;
    
    value = value.replace(/ /g, "");
    
    if(values = value.match(/^wallclock\((([0-9]{4})\-([0-9]{2})\-([0-9]{2})T)?([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.[0-9]+)?)?(Z|([\+\-])([0-9]{2}):([0-9]{2}))?\)$/))
    {
        var d = new Date();
        time = Date.UTC(
            (values[2] ? parseInt(values[2], 10) : d.getUTCFullYear()),
            (values[3] ? (parseInt(values[3], 10) - 1) : d.getUTCMonth()),
            (values[4] ? parseInt(values[4], 10) : d.getUTCDate()),
            parseInt(values[5], 10),
            parseInt(values[6], 10),
            (values[8] ? parseInt(values[8], 10) : 0),
            (values[9] ? (parseFloat(values[9]) * 1000) : 0)
        );
        
        if(values[10].length)
        {
            if(values[10] == "Z")
            {
                // Specified as UTC
                return time;
            }
            else
            {
                // Specified as local time and offset
                var offset = 0;
                offset += parseInt(values[12], 10) * 60 * 60 * 1000;
                offset += parseInt(values[13], 10) * 60 * 1000;
                if(values[11] == "-")
                    offset *= -1;
                time -= offset;
                    
                return time;
            }
        }
        
        // Specified as local time
        time += (new Date()).getTimezoneOffset() * 60 * 1000;
        return time;
    }
    
    return null;
};

chronomation.time.now = function()
{
    return (new Date()).getTime();
};

chronomation.time.timers = new chronomation.collection();

chronomation.time.setTimeout = function(notifyFn, msecs)
{
    if(typeof(notifyFn) != "function")
        return false;
    
    chronomation.time.timers.add(notifyFn);
    var indexStr = chronomation.time.timers.contains(notifyFn).toString();
    var expr = "chronomation.time.timers.item(";
    expr = expr.concat(indexStr, ")(", chronomation.time.now() + msecs, ");");
    
    window.setTimeout(expr, msecs);
    return true;
};

chronomation.vector = function()
{
    var formatString = new String();
    var re = /[0-9]+(\.([0-9]+))?|\.[0-9]+/g;
    
    this.values = new Array();
    
    this.format = function(values)
    {
        if(formatString.length == 0)
            return null;
        
        var parts = formatString.split("%N");
        for(var i = 0; i < (parts.length - 1); i++)
        {
            parts[i] = parts[i].concat(values[i].toString());
        }
        
        return parts.join("");
    };
    
    this.parse = function(text, updateFormat)
    {
        this.values = new Array();
        
        if(!(text = new String(text)))
            return null;
        
        var values = text.match(re);
        if(values == null)
            return null;
        
        for(var i = 0; i < values.length; i++)
        {
            values[i] = parseFloat(values[i]);
        }
        
        if(updateFormat || (formatString.length == 0))
        {
            formatString = text.replace(re, "%N");
        }
        
        return this.values = this.values.concat(values);
    };
    
    this.magnitude = function()
    {
        var mag = 0.0;
        for(var i = 0; i < this.values.length; i++)
            mag += Math.pow(this.values[i], 2);
        return Math.sqrt(mag);
    };
};

chronomation.animators = new chronomation.collection();

chronomation.animator = function(element, tickFn)
{
    var elementNode = element;
    var attributeName = null;
    var attributeType = null;
    var beginList = null;
    var endList = null;
    var dur = Infinity;
    var repeatCount = null
    var repeatDur = null;
    var restart = null;
    var cache = {begin: null, end: null};
    var docStartTime = 0;
    var simpleDurStartTime = 0;
    var simpleDurStopTime = 0;
    var active = false;
    var started = false;
    var ticker = tickFn;
    
    chronomation.animators.add(this);
    this.targetElement = this.from = this.to =
        this.by = this.values = this.calcMode = null;
    
    this.start = function(actualStart)
    {
        docStartTime = actualStart;
        readAttributes.call(this);
        
        processList(beginList, begin);
        processList(endList, end);
    };
    
    this.setValue = function(value)
    {
        var cssProp = CSSName(attributeName);
        switch(attributeType)
        {
            case "CSS":
                this.targetElement.style[cssProp] = value;
                break;
            case "XML":
                this.targetElement.setAttribute(attributeName, value);
                break;
            case "auto":
            default:
                if(this.targetElement.style[cssProp] != "undefined")
                {
                    this.targetElement.style[cssProp] = value;
                    break;
                }
                
                this.targetElement.setAttribute(attributeName, value);
                break;
        }
    };
    
    this.getValue = function()
    {
        var cssProp = CSSName(attributeName);
        switch(attributeType)
        {
            case "CSS":
                return this.targetElement.style[cssProp];
            case "XML":
                return this.targetElement.getAttribute(attributeName);
            case "auto":
            default:
                var value = null;
                if((value = this.targetElement.style[cssProp]) != "undefined")
                    return value;
                return this.targetElement.getAttribute(attributeName);
        }
    };
    
    function CSSName(name)
    {
        name = name.split("-");
        for(var i = 1; i < name.length; i++)
            if(name[i])
                name[i] = name[i].charAt(0).toUpperCase()
                    + name[i].slice(1);
        return name.join("");
                
    }
    
    function tick()
    {
        if(!active)
            return;
        
        var t = chronomation.time.now();
        var progress = (t - simpleDurStartTime) / dur;
        if((repeatDur || repeatCount) && progress >= 1)
        {
            var maxDur = Math.min(
                repeatDur ? repeatDur : Infinity,
                repeatCount ? (repeatCount * dur) : Infinity
            );
            if(((maxDur != Infinity) && (t - simpleDurStartTime < maxDur))
                || (repeatCount == Infinity) || (repeatDur == Infinity))
                progress -= Math.floor(progress);
        }
        
        
        if(progress <= 1)
            chronomation.time.setTimeout(
                tick,
                1000 / chronomation.animator.FPS_MAX
            );
        else
        {
            progress = -1;
            active = false;
        }
        
        ticker(progress);
    }
    
    function begin(actualTime)
    {
        if(active)
        {
            if(restart != "always")
                return;
        }
        
        if(started && (restart == "never"))
            return;
        
        started = true;
        active = true;
        simpleDurStartTime = actualTime;
        tick();
    }
    
    function end(actualTime)
    {
        simpleDurStopTime = actualTime;
        active = false;
    }
    
    function processList(list, fn)
    {
        for(var i = 0; i < list.length; i++)
        {
            var value = null;
            
            if(list[i] == "indefinite")
                continue;
            
            if((value = chronomation.time.parseOffsetTimeValue(list[i])) != null)
            {
                chronomation.time.setTimeout(
                    fn,
                    value - chronomation.time.now() + docStartTime
                );
                continue;
            }
            
            if((value = chronomation.time.parseWallclockSyncValue(list[i])) != null)
            {
                chronomation.time.setTimeout(
                    fn,
                    value - chronomation.time.now()
                );
                continue;
            }
        }
    }
    
    function readAttributes()
    {
        this.from = elementNode.getAttribute("from");
        this.to = elementNode.getAttribute("to");
        this.by = elementNode.getAttribute("by");
        this.values = (new chronomation.listParser(";")).parse(
            elementNode.getAttribute("values") );
        
        this.calcMode = elementNode.getAttribute("calcMode");
        if(this.calcMode = (new String(
            this.calcMode)).match(/^(discrete|linear|paced|spline)$/))
            this.calcMode = this.calcMode[0];
        else
            this.calcMode = "linear";
        elementNode.setAttribute("calcMode", this.calcMode);
        
        this.targetElement = elementNode.getAttribute("targetElement");
        if(this.targetElement)
            this.targetElement = document.getElementById(this.targetElement);
        if(!this.targetElement)
            this.targetElement = elementNode.parentNode;
        
        var begin = elementNode.getAttribute("begin");
        if(!begin)
            elementNode.setAttribute("begin", begin = "0");
        
        var end = elementNode.getAttribute("end");
        if(!end)
            elementNode.setAttribute("end", end = "indefinite");
        
        dur = elementNode.getAttribute("dur");
        if(!dur)
            elementNode.setAttribute("dur", dur = "indefinite");
        
        repeatCount = elementNode.getAttribute("repeatCount");
        repeatDur = elementNode.getAttribute("repeatDur");
        
        restart = elementNode.getAttribute("restart");
        if(restart =
            (new String(restart)).match(/^(always|whenNotActive|never)$/))
            restart = restart[0];
        else
            restart = "always";
        elementNode.setAttribute("restart", restart);
        
        attributeName = elementNode.getAttribute("attributeName");
        attributeType = elementNode.getAttribute("attributeType");
        if(attributeType =
            (new String(attributeType)).match(/^(CSS|XML|auto)$/))
            attributeType = attributeType[0];
        else
            attributeType = "auto";
        elementNode.setAttribute("attributeType", attributeType);
        
        beginList = (new chronomation.listParser(";")).parse(cache.begin = begin);
        endList = (new chronomation.listParser(";")).parse(cache.end = end);
        dur = (dur == "indefinite") ?
            Infinity : chronomation.time.parseClockValue(dur);
        
        if(isNaN(dur))
            dur = Infinity;
        if(repeatCount)
            repeatCount = (repeatCount == "indefinite") ?
                Infinity : parseFloat(repeatCount);
        if(isNaN(repeatCount))
            repeatCount = null;
        if(repeatDur)
            repeatDur = (repeatDur == "indefinite") ?
                Infinity : chronomation.time.parseClockValue(repeatDur);
    }
};

chronomation.animator.FPS_MAX = 12;

/*

chronomation.animate(document.getElementById("animateOne"));
chronomation.animate(document.getElementById("animateTwo"));
chronomation.animator.FPS_MAX = 100;
var t = chronomation.time.now();
var a = null;
while(a = chronomation.animators.next())
    a.start(t);

var as = document.getElementsByTagName("animate");
for(var i = 0; i < as.length; i++)
    chronomation.animate(as[i]);
chronomation.animator.FPS_MAX = 100;
var t = chronomation.time.now();
var a = null;
chronomation.animators.reset();
while(a = chronomation.animators.next())
    a.start(t);

*/

chronomation.animate = function(element)
{
    var elementNode = element;
    var controller = new chronomation.animator(elementNode, ticker);
    var firstVector = new chronomation.vector();
    var lastVector = new chronomation.vector();
    var currentValues = new Array();
    
    function ticker(progress)
    {
        var delta = false;
        
        if(progress == -1)
            return;
        
        if(controller.values && controller.values.length
            && controller.values[0].length)
        {
            if(controller.calcMode == "linear")
            {
                if(controller.values.length <= first + 1)
                    return;
                
                var first = Math.floor((controller.values.length - 1) * progress);
                firstVector.parse(controller.values[first], true);
                lastVector.parse(controller.values[first + 1], false);
                progress *= controller.values.length - 1;
                progress -= Math.floor(progress);
            }
            if(controller.calcMode == "paced")
            {
                var l = controller.values.length - 1;
                var range = 0;
                var distances = new Array();
                for(var i = 0; i < l; i++)
                {
                    firstVector.parse(controller.values[i], false);
                    lastVector.parse(controller.values[i + 1], false);
                    distances[i] = range += Math.abs(
                        lastVector.magnitude() - firstVector.magnitude() );
                }
                for(var i = 0; i < l; i++)
                {
                    if((distances[i] / range) >= progress)
                    {
                        firstVector.parse(controller.values[i], true);
                        lastVector.parse(controller.values[i + 1], false);
                        
                        var prevDistance = i ? distances[i - 1] : 0;
                        progress = (progress * range - prevDistance) /
                            (distances[i] - prevDistance);
                        break;
                    }
                }
                
            }
            if(controller.calcMode == "discrete")
            {
                var i = Math.round(controller.values.length * progress);
                firstVector.parse(controller.values[i], true);
                lastVector.parse(controller.values[i], false);
            }
            
            var n = firstVector.values.length;
            if(n != lastVector.values.length)
                return;
        
            for(var i = 0; i < n; i++)
            {
                currentValues[i] = firstVector.values[i] +
                    (lastVector.values[i] - firstVector.values[i]) * progress;
            }
        }
        else
        {
            firstVector.parse(
                controller.from ? controller.from : controller.getValue(),
                true
            );
        
            lastVector.parse(
                controller.to ? controller.to : (delta = true, controller.by),
                false
            );
            
            var n = firstVector.values.length;
            if(n != lastVector.values.length)
                return;
        
            if(controller.calcMode.match(/^(linear|paced)$/))
                for(var i = 0; i < n; i++)
                {
                    currentValues[i] = firstVector.values[i] +
                        (lastVector.values[i] -
                        (delta ? 0 : firstVector.values[i])) * progress;
                }
            if(controller.calcMode == "discrete")
                for(var i = 0; i < n; i++)
                {
                    currentValues[i] = Math.round(progress) ?
                        lastVector.values[i] : firstVector.values[i];
                }
        }
        
        controller.setValue(firstVector.format(currentValues));
    }
};

//</script>