//<script language="JScript">

var chronomation = new Object();

/*

var l = new chronomation.listParser(";");
var time1 = (new Date()).getTime();
var a = l.parse(" 0 \r \n 1 9 ; \r 2 7 8\t\t;  1   9   7\t\t");
var time2 = (new Date()).getTime();
var s = "";
for(var i = 0; i < a.length; i++)
    for(var j = 0; j < a[i].length; j++)
        s += " " + a[i].charCodeAt(j);
s += "\n" + a;
s += "\nTime: " + (time2 - time1).toString();

*/

chronomation.listParser = function(separator)
{
    this.separator = separator;
    this.all = new Array();
    
    this.parse = function(text)
    {
        text = text.replace(/\s+/g, " ");
        text = text.replace(
            new RegExp(" ?" + this.separator + " ?", "g"),
            this.separator);
        text = text.replace(/^ | $/g, "");
        return this.all = text.split(this.separator);
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
    var time = 0;
    
    value = value.replace(/ /g, "");
    
    // Full clock value
    if(values = value.match(/^([\+\-]?)([0-9]+):([0-9]{2}):([0-9]{2})(\.[0-9]+)?$/))
    {
        time += parseInt(values[2], 10) * 60 * 60 * 1000;
        time += parseInt(values[3], 10) * 60 * 1000;
        time += parseInt(values[4], 10) * 1000;
        time += values[5].length ? (parseFloat(values[5]) * 1000) : 0;
        if(values[1] == "-")
            time *= -1;
        
        return time;
    }
    
    // Partial clock value
    if(values = value.match(/^([\+\-]?)([0-9]{2}):([0-9]{2})(\.[0-9]+)?$/))
    {
        time += parseInt(values[2], 10) * 60 * 1000;
        time += parseInt(values[3], 10) * 1000;
        time += values[4].length ? (parseFloat(values[4]) * 1000) : 0;
        if(values[1] == "-")
            time *= -1;
            
        return time;
    }
    
    // Timecount value
    if(values = value.match(/^([\+\-]?)([0-9]+)(\.[0-9]+)?(h|min|s|ms)?$/))
    {
        var mul = 1;
        switch(values[4])
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
        
        time += parseInt(values[2], 10);
        time += values[3].length ? parseFloat(values[3]) : 0;
        time *= mul;
        if(values[1] == "-")
            time *= -1;
        
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
            (values[2].length ? parseInt(values[2], 10) : d.getUTCFullYear()),
            (values[3].length ? (parseInt(values[3], 10) - 1) : d.getUTCMonth()),
            (values[4].length ? parseInt(values[4], 10) : d.getUTCDate()),
            parseInt(values[5], 10),
            parseInt(values[6], 10),
            (values[8].length ? parseInt(values[8], 10) : 0),
            (values[9].length ? (parseFloat(values[9]) * 1000) : 0)
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
}

/*

var t = new chronomation.timeline(notified);
t.add(1000, "1 second");
t.add(1500, "1.5 second");
t.add(2000, "2 seconds");
t.FPS = 100;
t.start();
status = "";

function notified(cookie)
{
    status += " " + (new Date()).getTime().toString() + " " + cookie;
}

*/

chronomation.timelines = new chronomation.collection();

chronomation.timeline = function(notifyFn)
{
    var absoluteTimes = new Array();
    
    this.all = new Array();
    this.fps = 12;
    this.offset = Infinity;
    this.onnotify = (typeof(notifyFn) == "function") ? notifyFn : null;
    
    var timerCookie = null;
    
    this.add = function(time, cookie)
    {
        var el = new Object();
        el["time"] = time;
        el["cookie"] = cookie;
        
        this.all.push(el);
        
        return true;
    };
    
    this.build = function(elementNode)
    {
        function processList(list, typeDesc)
        {
            for(var i = 0; i < list.length; i++)
            {
                var value = null;
                
                if(list[i].match(/^indefinite$/))
                    continue;
                
                if(value = chronomation.time.parseOffsetTimeValue(list[i]))
                {
                    this.add(value, typeDesc);
                    continue;
                }
                
                if(value = chronomation.time.parseWallclockSyncValue(list[i]))
                {
                    absoluteTimes.push({time: value, cookie: typeDesc});
                    continue;
                }
                
                unresolved.push({text: list[i], cookie: typeDesc});
            }
        }
        
        var unresolved = new Array();
        
        var begin = elementNode.getAttribute("begin");
        if(begin.length == 0)
            elementNode.setAttribute("begin", begin = "0");
        
        var end = elementNode.getAttribute("end");
        if(end.length == 0)
            elementNode.setAttribute("end", end = "indefinite");
        
        var beginList = (new chronomation.listParser(";")).parse(begin);
        processList(beginList, "begin");
        
        var endList = (new chronomation.listParser(";")).parse(end);
        processList(endList, "end");
        
        return unresolved;
    };
    
    this.clear = function()
    {
        absoluteTimes = new Array();
        this.all = new Array();
        
        return true;
    };
    
    this.next = function(cookie)
    {
        for(var i = 0; i < this.all.length; i++)
        {
            if(String(this.all[i].cookie) == cookie)
                return this.offset + this.all[i].time;
        }
        
        return null;
    };
    
    this.pause = function()
    {
        if(timerCookie == null)
            return false;
        
        clearTimeout(timerCookie);
        timerCookie = null;
    };
    
    this.resume = function()
    {
        this.all = this.all.sort(timelineSort);
        
        this.tick();
    };
    
    this.start = function()
    {
        this.all = this.all.sort(timelineSort);
        
        if(chronomation.timelines.add(this) == -1)
            return false;
        
        this.offset = (new Date()).getTime();
        var t = null;
        while(t = absoluteTimes.pop())
        {
            this.add(t.time - this.offset, t.cookie);
        }
        
        return this.tick();
    };
    
    this.stop = function()
    {
        if(timerCookie == null)
            return false;
        
        clearTimeout(timerCookie);
        chronomation.timelines.remove(this);
        timerCookie = null;
        
        return true;
    };
    
    this.tick = function()
    {
        if(typeof(this.onnotify) != "function")
            return false;
        
        var delta = 0;
        while((this.all.length > 0)
            && (delta = (new Date()).getTime() - this.all[0].time - this.offset) > 0)
            this.onnotify(this.all.shift().cookie, delta);
        
        if(this.all.length == 0)
        {
            this.stop();
            return true;
        }
        
        var expr = "chronomation.timelines.item(";
        expr += chronomation.timelines.contains(this).toString();
        expr += ").tick();";
        var delay = Math.round(1000 / this.fps);
        timerCookie = setTimeout(expr, delay);
        
        return true;
    };
    
    function timelineSort(a, b)
    {
        return (a.time - b.time);
    }
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
        
        return this.values = values;
    };
};

chronomation.attributeCache = function(elementNode, attributes)
{
    this.all = new Object();
    this.attributes = attributes;
    this.elementNode = elementNode;
    
    this.build = function()
    {
        for(var i = 0; i < this.attributes.length; i++)
        {
            this.all[this.attributes[i]] = this.elementNode.getAttrinute(this.attributes[i]);
        }
        
        return true;
    };
    
    this.check = function(attribute)
    {
        var newValue;
        if(String(newValue = this.elementNode.getAttribute(attribute))
            == this.all[attribute])
            return null;
        
        return this.all[attribute] = newValue;
    };
    
    this.clear = function()
    {
        this.all = new Object();
        return true;
    };
};

chronomation.animator = function(element, tickFn)
{
    var elementNode = element;
    var timeline = new chronomation.timeline(timeline_onnotify);
    var cache = new chronomation.attributeCache(elementNode,
        new Array("begin", "dur", "end", "repeatCount", "repeatDur"));
    cache.build();
    
    var dur = elementNode.getAttribute("dur");
    if(dur.length == 0)
        elementNode.setAttribute("dur", dur = "indefinite");
    
    
    
    this.ontick = (typeof(tickFn) == "function") ? tickFn : null;
    
    function timeline_onnotify(cookie, delta)
    {
        if(cache.check("begin") || cache.check("end") ||
            cache.check("dur") || cache.check("repeatCount") ||
            cache.check("repeatDur"))
            buildTimeline();
        
        if(cookie == "begin")
        {
            var end = null;
            var simpleDuration = (end = timeline.next("end")) ? end : Infinity;
            simpleDuration = Math.min(simpleDuration, dur);
        }
            
    }
    
    function buildTimeline()
    {
        var paused = timeline.pause();
        timeline.clear();
        var unresolved = timeline.build(elementNode);
        if(paused)
            timeline.resume();
    }
};


//</script>