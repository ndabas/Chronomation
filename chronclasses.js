// Requires ECMA-262 3rd Edition.
// 
// Chronomation classes working set.
//<script language="JScript">

var chronomation = new Object();

chronomation.dataTypes = new Object();

chronomation.dataTypes.integer = function(value)
{
    return (Math.round(new Number(value)))
};

chronomation.dataTypes.number = function(value)
{
    return (new Number(value));
};

chronomation.dataTypes.bool = function(value)
{
    if(typeof(value) == "boolean")
        return value;
    
    if(typeof(value) == "number")
        return new Boolean(value != 0);
    
    value = value.toString().toLowerCase();
    switch(value)
    {
        case "true":
        case "yes":
        case "on":
            return true;
        default:
            return false;
    }
};

chronomation.dataTypes.enumeration = function(value, types)
{
    value = value.toString().toLowerCase();
    for(var i = 0; i < types.length; i++)
    {
        if(types[i].toString().toLowerCase() == value)
            return types[i];
    }
    
    return null;
};

chronomation.collection = function()
{
    var all = new Array();
    var iteratorIndex = 0;
    
    this.get_length = function()
    {
        return all.length;
    };
    
    this.add = function(item)
    {
        if(item == null)
            return -1;
        
        if(this.contains(item) != -1)
            return -1;
        
        return (all.push(item) - 1);
    };
    
    this.clear = function()
    {
        all = new Array();
        return true;
    };
    
    this.contains = function(item)
    {
        for(var i = 0; i < all.length; i++)
        {
            if(all[i] == item)
                return i;
        }
        
        return -1;
    };
    
    this.insert = function(item, index)
    {
        index = chronomation.dataTypes.integer(index);
        if(isNaN(index))
            return false;
        
        if((index < 0) || (index > all.length))
            return false;
        
        if(item == null)
            return false;
        
        if(this.contains(item) != -1)
            return false;
        
        var part = all.splice(index, all.length - index, item);
        if(part.length)
            all = all.concat(part);
        
        return true;
    };
    
    this.item = function(index)
    {
        index = chronomation.dataTypes.integer(index);
        if(isNaN(index))
            return null;
        
        if((index < 0) || (index >= all.length))
            return null;
        
        return all[index];
    };
    
    this.next = function()
    {
        if(iteratorIndex >= all.length)
        {
            return null;
        }
        
        return all[iteratorIndex++];
    };
    
    this.remove = function(item)
    {
        for(var i = 0; i < all.length; i++)
        {
            if(all[i] == item)
            {
                return this.removeAt(i) == item ? i : -1;
            }
        }
        
        return -1;
    };
    
    this.removeAt = function(index)
    {
        index = chronomation.dataTypes.integer(index);
        if(isNaN(index))
            return null;
        
        if((index < 0) || (index >= all.length))
            return null;
        
        var part = all.splice(index + 1, all.length - index - 1);
        var item = all.pop();
        if(part.length)
            all = all.concat(part);
        
        return item;
    };
    
    this.reset = function()
    {
        iteratorIndex = 0;
    };
    
};

chronomation.timers = new chronomation.collection();

chronomation.timer = function(func, msecs)
{
    var delay = null;
    var delta = null;
    var fn = null;
    
    var cookie = null;
    var last = null;
    
    this.get_delay = function()
    {
        return delay;
    };
    
    this.put_delay = function(value)
    {
        delay = chronomation.dataTypes.integer(value);
    };
    
    this.get_delta = function()
    {
        return delta;
    };
    
    this.get_fn = function()
    {
        return fn;
    };
    
    this.put_fn = function(value)
    {
        fn = (typeof(value) == "function") ? value : null;
    };
    
    this.start = function()
    {
        if(fn == null || delay == null)
            return false;
        
        if(chronomation.timers.add(this) == -1)
            return false;
        
        var expr = "chronomation.timers.item(";
        expr += chronomation.timers.contains(this).toString();
        expr += ").tick();";
        
        cookie = setTimeout(expr, delay);
        last = (new Date()).getTime();
        
        return true;
    };
    
    this.stop = function()
    {
        if(cookie)
        {
            clearTimeout(cookie);
            cookie = null;
            if(chronomation.timers.remove(this) == -1)
                return false;
            
            return true;
        }
        
        return false;
    };
    
    this.tick = function()
    {
        var expr = "chronomation.timers.item(";
        expr += chronomation.timers.contains(this).toString();
        expr += ").tick();";
        
        delta = (new Date()).getTime() - last - delay;
        last = (new Date()).getTime();
        cookie = setTimeout(expr, delay - Math.round(delta / 2));
        fn();
    };
    
    this.put_fn(func);
    this.put_delay(msecs);
    
};

chronomation.animate = function(attributes)
{
    var accelerate = null;
    var accumulate = null;
    var additive = null;
    var attributeName = null;
    var autoReverse = null;
    var begin = null;
    var by = null;
    var calcMode = null;
    var decelerate = null;
    var dur = null;
    var end = null;
    var fill = null;
    var from = null;
    var keySplines = null;
    var keyTimes = null;
    var repeatCount = null;
    var repeatDur = null;
    var restart = null;
    var speed = null;
    var targetElement = null;
    var timeContainer = null;
    var timeParent = null;
    var to = null;
    var values = null;
    
    this.get_accelerate = function()
    {
        return accelerate;
    };
    
    this.put_accelerate = function(value)
    {
        accelerate = value;
    };
    
    this.get_accumulate = function()
    {
        return accumulate;
    };
    
    this.put_accumulate = function(value)
    {
        accumulate = value;
    };
    
    this.get_additive = function()
    {
        return additive;
    };
    
    this.put_additive = function(value)
    {
        additive = value;
    };
    
    this.get_attributeName = function()
    {
        return attributeName;
    };
    
    this.put_attributeName = function(value)
    {
        attributeName = value;
    };
    
    this.get_autoReverse = function()
    {
        return autoReverse;
    };
    
    this.put_autoReverse = function(value)
    {
        autoReverse = value;
    };
    
    this.get_begin = function()
    {
        return begin;
    };
    
    this.put_begin = function(value)
    {
        begin = value;
    };
    
    this.get_by = function()
    {
        return by;
    };
    
    this.put_by = function(value)
    {
        by = value;
    };
    
    this.get_calcMode = function()
    {
        return calcMode;
    };
    
    this.put_calcMode = function(value)
    {
        calcMode = value;
    };
    
    this.get_decelerate = function()
    {
        return decelerate;
    };
    
    this.put_decelerate = function(value)
    {
        decelerate = value;
    };
    
    this.get_dur = function()
    {
        return dur;
    };
    
    this.put_dur = function(value)
    {
        dur = value;
    };
    
    this.get_end = function()
    {
        return end;
    };
    
    this.put_end = function(value)
    {
        end = value;
    };
    
    this.get_fill = function()
    {
        return fill;
    };
    
    this.put_fill = function(value)
    {
        fill = value;
    };
    
    this.get_from = function()
    {
        return from;
    };
    
    this.put_from = function(value)
    {
        from = value;
    };
    
    this.get_keySplines = function()
    {
        return keySplines;
    };
    
    this.put_keySplines = function(value)
    {
        keySplines = value;
    };
    
    this.get_keyTimes = function()
    {
        return keyTimes;
    };
    
    this.put_keyTimes = function(value)
    {
        keyTimes = value;
    };
    
    this.get_repeatCount = function()
    {
        return repeatCount;
    };
    
    this.put_repeatCount = function(value)
    {
        repeatCount = value;
    };
    
    this.get_repeatDur = function()
    {
        return repeatDur;
    };
    
    this.put_repeatDur = function(value)
    {
        repeatDur = value;
    };
    
    this.get_restart = function()
    {
        return restart;
    };
    
    this.put_restart = function(value)
    {
        restart = value;
    };
    
    this.get_speed = function()
    {
        return speed;
    };
    
    this.put_speed = function(value)
    {
        speed = value;
    };
    
    this.get_targetElement = function()
    {
        return targetElement;
    };
    
    this.put_targetElement = function(value)
    {
        targetElement = value;
    };
    
    this.get_timeContainer = function()
    {
        return timeContainer;
    };
    
    this.put_timeContainer = function(value)
    {
        timeContainer = value;
    };
    
    this.get_timeParent = function()
    {
        return timeParent;
    };
    
    this.get_to = function()
    {
        return to;
    };
    
    this.put_to = function(value)
    {
        to = value;
    };
    
    this.get_values = function()
    {
        return values;
    };
    
    this.put_values = function(value)
    {
        values = value;
    };
    
    this.beginElement = function()
    {
        
    };
    
    this.beginElementAt = function(offset)
    {
        
    };
    
    this.endElement = function()
    {
        
    };
    
    this.endElementAt = function(offset)
    {
        
    };
    
    this.pauseElement = function()
    {
        
    };
    
    this.resumeElement = function()
    {
        
    };
    
    if(typeof(attributes) == "object")
    {
        for(key in attributes)
        {
            if(typeof(this["put_" + key]) == "function")
            {
                this["put_" + key](attributes[key]);
            }
        }
    }
    
};

chronomation.animateColor = function(attributes)
{
    var accelerate = null;
    var accumulate = null;
    var additive = null;
    var attributeName = null;
    var autoReverse = null;
    var begin = null;
    var by = null;
    var calcMode = null;
    var decelerate = null;
    var dur = null;
    var end = null;
    var fill = null;
    var from = null;
    var keySplines = null;
    var keyTimes = null;
    var repeatCount = null;
    var repeatDur = null;
    var restart = null;
    var speed = null;
    var targetElement = null;
    var timeContainer = null;
    var timeParent = null;
    var to = null;
    var values = null;
    
    this.get_accelerate = function()
    {
        return accelerate;
    };
    
    this.put_accelerate = function(value)
    {
        accelerate = value;
    };
    
    this.get_accumulate = function()
    {
        return accumulate;
    };
    
    this.put_accumulate = function(value)
    {
        accumulate = value;
    };
    
    this.get_additive = function()
    {
        return additive;
    };
    
    this.put_additive = function(value)
    {
        additive = value;
    };
    
    this.get_attributeName = function()
    {
        return attributeName;
    };
    
    this.put_attributeName = function(value)
    {
        attributeName = value;
    };
    
    this.get_autoReverse = function()
    {
        return autoReverse;
    };
    
    this.put_autoReverse = function(value)
    {
        autoReverse = value;
    };
    
    this.get_begin = function()
    {
        return begin;
    };
    
    this.put_begin = function(value)
    {
        begin = value;
    };
    
    this.get_by = function()
    {
        return by;
    };
    
    this.put_by = function(value)
    {
        by = value;
    };
    
    this.get_calcMode = function()
    {
        return calcMode;
    };
    
    this.put_calcMode = function(value)
    {
        calcMode = value;
    };
    
    this.get_decelerate = function()
    {
        return decelerate;
    };
    
    this.put_decelerate = function(value)
    {
        decelerate = value;
    };
    
    this.get_dur = function()
    {
        return dur;
    };
    
    this.put_dur = function(value)
    {
        dur = value;
    };
    
    this.get_end = function()
    {
        return end;
    };
    
    this.put_end = function(value)
    {
        end = value;
    };
    
    this.get_fill = function()
    {
        return fill;
    };
    
    this.put_fill = function(value)
    {
        fill = value;
    };
    
    this.get_from = function()
    {
        return from;
    };
    
    this.put_from = function(value)
    {
        from = value;
    };
    
    this.get_keySplines = function()
    {
        return keySplines;
    };
    
    this.put_keySplines = function(value)
    {
        keySplines = value;
    };
    
    this.get_keyTimes = function()
    {
        return keyTimes;
    };
    
    this.put_keyTimes = function(value)
    {
        keyTimes = value;
    };
    
    this.get_repeatCount = function()
    {
        return repeatCount;
    };
    
    this.put_repeatCount = function(value)
    {
        repeatCount = value;
    };
    
    this.get_repeatDur = function()
    {
        return repeatDur;
    };
    
    this.put_repeatDur = function(value)
    {
        repeatDur = value;
    };
    
    this.get_restart = function()
    {
        return restart;
    };
    
    this.put_restart = function(value)
    {
        restart = value;
    };
    
    this.get_speed = function()
    {
        return speed;
    };
    
    this.put_speed = function(value)
    {
        speed = value;
    };
    
    this.get_targetElement = function()
    {
        return targetElement;
    };
    
    this.put_targetElement = function(value)
    {
        targetElement = value;
    };
    
    this.get_timeContainer = function()
    {
        return timeContainer;
    };
    
    this.put_timeContainer = function(value)
    {
        timeContainer = value;
    };
    
    this.get_timeParent = function()
    {
        return timeParent;
    };
    
    this.get_to = function()
    {
        return to;
    };
    
    this.put_to = function(value)
    {
        to = value;
    };
    
    this.get_values = function()
    {
        return values;
    };
    
    this.put_values = function(value)
    {
        values = value;
    };
    
    this.beginElement = function()
    {
        
    };
    
    this.beginElementAt = function(offset)
    {
        
    };
    
    this.endElement = function()
    {
        
    };
    
    this.endElementAt = function(offset)
    {
        
    };
    
    this.pauseElement = function()
    {
        
    };
    
    this.resumeElement = function()
    {
        
    };
    
    if(typeof(attributes) == "object")
    {
        for(key in attributes)
        {
            if(typeof(this["put_" + key]) == "function")
            {
                this["put_" + key](attributes[key]);
            }
        }
    }
    
};

chronomation.animateMotion = function(attributes)
{
    var accelerate = null;
    var accumulate = null;
    var additive = null;
    var autoReverse = null;
    var begin = null;
    var by = null;
    var calcMode = null;
    var decelerate = null;
    var dur = null;
    var end = null;
    var fill = null;
    var from = null;
    var keySplines = null;
    var keyTimes = null;
    var origin = null;
    var path = null;
    var repeatCount = null;
    var repeatDur = null;
    var restart = null;
    var speed = null;
    var targetElement = null;
    var timeContainer = null;
    var timeParent = null;
    var to = null;
    var values = null;
    
    this.get_accelerate = function()
    {
        return accelerate;
    };
    
    this.put_accelerate = function(value)
    {
        accelerate = value;
    };
    
    this.get_accumulate = function()
    {
        return accumulate;
    };
    
    this.put_accumulate = function(value)
    {
        accumulate = value;
    };
    
    this.get_additive = function()
    {
        return additive;
    };
    
    this.put_additive = function(value)
    {
        additive = value;
    };
    
    this.get_autoReverse = function()
    {
        return autoReverse;
    };
    
    this.put_autoReverse = function(value)
    {
        autoReverse = value;
    };
    
    this.get_begin = function()
    {
        return begin;
    };
    
    this.put_begin = function(value)
    {
        begin = value;
    };
    
    this.get_by = function()
    {
        return by;
    };
    
    this.put_by = function(value)
    {
        by = value;
    };
    
    this.get_calcMode = function()
    {
        return calcMode;
    };
    
    this.put_calcMode = function(value)
    {
        calcMode = value;
    };
    
    this.get_decelerate = function()
    {
        return decelerate;
    };
    
    this.put_decelerate = function(value)
    {
        decelerate = value;
    };
    
    this.get_dur = function()
    {
        return dur;
    };
    
    this.put_dur = function(value)
    {
        dur = value;
    };
    
    this.get_end = function()
    {
        return end;
    };
    
    this.put_end = function(value)
    {
        end = value;
    };
    
    this.get_fill = function()
    {
        return fill;
    };
    
    this.put_fill = function(value)
    {
        fill = value;
    };
    
    this.get_from = function()
    {
        return from;
    };
    
    this.put_from = function(value)
    {
        from = value;
    };
    
    this.get_keySplines = function()
    {
        return keySplines;
    };
    
    this.put_keySplines = function(value)
    {
        keySplines = value;
    };
    
    this.get_keyTimes = function()
    {
        return keyTimes;
    };
    
    this.put_keyTimes = function(value)
    {
        keyTimes = value;
    };
    
    this.get_origin = function()
    {
        return origin;
    };
    
    this.put_origin = function(value)
    {
        origin = value;
    };
    
    this.get_path = function()
    {
        return path;
    };
    
    this.put_path = function(value)
    {
        path = value;
    };
    
    this.get_repeatCount = function()
    {
        return repeatCount;
    };
    
    this.put_repeatCount = function(value)
    {
        repeatCount = value;
    };
    
    this.get_repeatDur = function()
    {
        return repeatDur;
    };
    
    this.put_repeatDur = function(value)
    {
        repeatDur = value;
    };
    
    this.get_restart = function()
    {
        return restart;
    };
    
    this.put_restart = function(value)
    {
        restart = value;
    };
    
    this.get_speed = function()
    {
        return speed;
    };
    
    this.put_speed = function(value)
    {
        speed = value;
    };
    
    this.get_targetElement = function()
    {
        return targetElement;
    };
    
    this.put_targetElement = function(value)
    {
        targetElement = value;
    };
    
    this.get_timeContainer = function()
    {
        return timeContainer;
    };
    
    this.put_timeContainer = function(value)
    {
        timeContainer = value;
    };
    
    this.get_timeParent = function()
    {
        return timeParent;
    };
    
    this.get_to = function()
    {
        return to;
    };
    
    this.put_to = function(value)
    {
        to = value;
    };
    
    this.get_values = function()
    {
        return values;
    };
    
    this.put_values = function(value)
    {
        values = value;
    };
    
    this.beginElement = function()
    {
        
    };
    
    this.beginElementAt = function(offset)
    {
        
    };
    
    this.endElement = function()
    {
        
    };
    
    this.endElementAt = function(offset)
    {
        
    };
    
    this.pauseElement = function()
    {
        
    };
    
    this.resumeElement = function()
    {
        
    };
    
    if(typeof(attributes) == "object")
    {
        for(key in attributes)
        {
            if(typeof(this["put_" + key]) == "function")
            {
                this["put_" + key](attributes[key]);
            }
        }
    }
    
};

chronomation.set = function(attributes)
{
    var attributeName = null;
    var autoReverse = null;
    var begin = null;
    var dur = null;
    var end = null;
    var fill = null;
    var repeatDur = null;
    var restart = null;
    var targetElement = null;
    var timeContainer = null;
    var timeParent = null;
    var to = null;
    
    this.get_attributeName = function()
    {
        return attributeName;
    };
    
    this.put_attributeName = function(value)
    {
        attributeName = value;
    };
    
    this.get_autoReverse = function()
    {
        return autoReverse;
    };
    
    this.put_autoReverse = function(value)
    {
        autoReverse = value;
    };
    
    this.get_begin = function()
    {
        return begin;
    };
    
    this.put_begin = function(value)
    {
        begin = value;
    };
    
    this.get_dur = function()
    {
        return dur;
    };
    
    this.put_dur = function(value)
    {
        dur = value;
    };
    
    this.get_end = function()
    {
        return end;
    };
    
    this.put_end = function(value)
    {
        end = value;
    };
    
    this.get_fill = function()
    {
        return fill;
    };
    
    this.put_fill = function(value)
    {
        fill = value;
    };
    
    this.get_repeatDur = function()
    {
        return repeatDur;
    };
    
    this.put_repeatDur = function(value)
    {
        repeatDur = value;
    };
    
    this.get_restart = function()
    {
        return restart;
    };
    
    this.put_restart = function(value)
    {
        restart = value;
    };
    
    this.get_targetElement = function()
    {
        return targetElement;
    };
    
    this.put_targetElement = function(value)
    {
        targetElement = value;
    };
    
    this.get_timeContainer = function()
    {
        return timeContainer;
    };
    
    this.put_timeContainer = function(value)
    {
        timeContainer = value;
    };
    
    this.get_timeParent = function()
    {
        return timeParent;
    };
    
    this.get_to = function()
    {
        return to;
    };
    
    this.put_to = function(value)
    {
        to = value;
    };
    
    this.beginElement = function()
    {
        
    };
    
    this.beginElementAt = function(offset)
    {
        
    };
    
    this.endElement = function()
    {
        
    };
    
    this.endElementAt = function(offset)
    {
        
    };
    
    this.pauseElement = function()
    {
        
    };
    
    this.resumeElement = function()
    {
        
    };
    
    if(typeof(attributes) == "object")
    {
        for(key in attributes)
        {
            if(typeof(this["put_" + key]) == "function")
            {
                this["put_" + key](attributes[key]);
            }
        }
    }
    
};

chronomation.excl = function(attributes)
{
    var accelerate = null;
    var activeElements = null;
    var autoReverse = null;
    var decelerate = null;
    var dur = null;
    var endsync = null;
    var repeatDur = null;
    var syncBehavior = null;
    var syncTolerance = null;
    var timeAll = null;
    var timeChildren = null;
    
    this.get_accelerate = function()
    {
        return accelerate;
    };
    
    this.put_accelerate = function(value)
    {
        accelerate = value;
    };
    
    this.get_activeElements = function()
    {
        return activeElements;
    };
    
    this.get_autoReverse = function()
    {
        return autoReverse;
    };
    
    this.put_autoReverse = function(value)
    {
        autoReverse = value;
    };
    
    this.get_decelerate = function()
    {
        return decelerate;
    };
    
    this.put_decelerate = function(value)
    {
        decelerate = value;
    };
    
    this.get_dur = function()
    {
        return dur;
    };
    
    this.put_dur = function(value)
    {
        dur = value;
    };
    
    this.get_endsync = function()
    {
        return endsync;
    };
    
    this.put_endsync = function(value)
    {
        endsync = value;
    };
    
    this.get_repeatDur = function()
    {
        return repeatDur;
    };
    
    this.put_repeatDur = function(value)
    {
        repeatDur = value;
    };
    
    this.get_syncBehavior = function()
    {
        return syncBehavior;
    };
    
    this.put_syncBehavior = function(value)
    {
        syncBehavior = value;
    };
    
    this.get_syncTolerance = function()
    {
        return syncTolerance;
    };
    
    this.put_syncTolerance = function(value)
    {
        syncTolerance = value;
    };
    
    this.get_timeAll = function()
    {
        return timeAll;
    };
    
    this.get_timeChildren = function()
    {
        return timeChildren;
    };
    
    this.beginElement = function()
    {
        
    };
    
    this.endElement = function()
    {
        
    };
    
    if(typeof(attributes) == "object")
    {
        for(key in attributes)
        {
            if(typeof(this["put_" + key]) == "function")
            {
                this["put_" + key](attributes[key]);
            }
        }
    }
    
};

chronomation.priorityClass = function(attributes)
{
    var higher = null;
    var lower = null;
    var peers = null;
    
    this.get_higher = function()
    {
        return higher;
    };
    
    this.put_higher = function(value)
    {
        higher = value;
    };
    
    this.get_lower = function()
    {
        return lower;
    };
    
    this.put_lower = function(value)
    {
        lower = value;
    };
    
    this.get_peers = function()
    {
        return peers;
    };
    
    this.put_peers = function(value)
    {
        peers = value;
    };
    
    if(typeof(attributes) == "object")
    {
        for(key in attributes)
        {
            if(typeof(this["put_" + key]) == "function")
            {
                this["put_" + key](attributes[key]);
            }
        }
    }
    
};

chronomation.par = function(attributes)
{
    var accelerate = null;
    var activeElements = null;
    var autoReverse = null;
    var decelerate = null;
    var dur = null;
    var endsync = null;
    var fill = null;
    var repeatCount = null;
    var repeatDur = null;
    var restart = null;
    var speed = null;
    var syncBehavior = null;
    var syncTolerance = null;
    var timeAction = null;
    var timeAll = null;
    var timeChildren = null;
    var timeParent = null;
    
    this.get_accelerate = function()
    {
        return accelerate;
    };
    
    this.put_accelerate = function(value)
    {
        accelerate = value;
    };
    
    this.get_activeElements = function()
    {
        return activeElements;
    };
    
    this.get_autoReverse = function()
    {
        return autoReverse;
    };
    
    this.put_autoReverse = function(value)
    {
        autoReverse = value;
    };
    
    this.get_decelerate = function()
    {
        return decelerate;
    };
    
    this.put_decelerate = function(value)
    {
        decelerate = value;
    };
    
    this.get_dur = function()
    {
        return dur;
    };
    
    this.put_dur = function(value)
    {
        dur = value;
    };
    
    this.get_endsync = function()
    {
        return endsync;
    };
    
    this.put_endsync = function(value)
    {
        endsync = value;
    };
    
    this.get_fill = function()
    {
        return fill;
    };
    
    this.put_fill = function(value)
    {
        fill = value;
    };
    
    this.get_repeatCount = function()
    {
        return repeatCount;
    };
    
    this.put_repeatCount = function(value)
    {
        repeatCount = value;
    };
    
    this.get_repeatDur = function()
    {
        return repeatDur;
    };
    
    this.put_repeatDur = function(value)
    {
        repeatDur = value;
    };
    
    this.get_restart = function()
    {
        return restart;
    };
    
    this.put_restart = function(value)
    {
        restart = value;
    };
    
    this.get_speed = function()
    {
        return speed;
    };
    
    this.put_speed = function(value)
    {
        speed = value;
    };
    
    this.get_syncBehavior = function()
    {
        return syncBehavior;
    };
    
    this.put_syncBehavior = function(value)
    {
        syncBehavior = value;
    };
    
    this.get_syncTolerance = function()
    {
        return syncTolerance;
    };
    
    this.put_syncTolerance = function(value)
    {
        syncTolerance = value;
    };
    
    this.get_timeAction = function()
    {
        return timeAction;
    };
    
    this.put_timeAction = function(value)
    {
        timeAction = value;
    };
    
    this.get_timeAll = function()
    {
        return timeAll;
    };
    
    this.get_timeChildren = function()
    {
        return timeChildren;
    };
    
    this.get_timeParent = function()
    {
        return timeParent;
    };
    
    this.beginElement = function()
    {
        
    };
    
    this.beginElementAt = function(offset)
    {
        
    };
    
    this.endElement = function()
    {
        
    };
    
    this.endElementAt = function(offset)
    {
        
    };
    
    this.pauseElement = function()
    {
        
    };
    
    this.resumeElement = function()
    {
        
    };
    
    if(typeof(attributes) == "object")
    {
        for(key in attributes)
        {
            if(typeof(this["put_" + key]) == "function")
            {
                this["put_" + key](attributes[key]);
            }
        }
    }
    
};

chronomation.seq = function(attributes)
{
    var accelerate = null;
    var activeElements = null;
    var autoReverse = null;
    var begin = null;
    var decelerate = null;
    var dur = null;
    var end = null;
    var fill = null;
    var repeatCount = null;
    var repeatDur = null;
    var restart = null;
    var speed = null;
    var syncBehavior = null;
    var syncTolerance = null;
    var timeAction = null;
    var timeAll = null;
    var timeChildren = null;
    var timeContainer = null;
    var timeParent = null;
    
    this.get_accelerate = function()
    {
        return accelerate;
    };
    
    this.put_accelerate = function(value)
    {
        accelerate = value;
    };
    
    this.get_activeElements = function()
    {
        return activeElements;
    };
    
    this.get_autoReverse = function()
    {
        return autoReverse;
    };
    
    this.put_autoReverse = function(value)
    {
        autoReverse = value;
    };
    
    this.get_begin = function()
    {
        return begin;
    };
    
    this.put_begin = function(value)
    {
        begin = value;
    };
    
    this.get_decelerate = function()
    {
        return decelerate;
    };
    
    this.put_decelerate = function(value)
    {
        decelerate = value;
    };
    
    this.get_dur = function()
    {
        return dur;
    };
    
    this.put_dur = function(value)
    {
        dur = value;
    };
    
    this.get_end = function()
    {
        return end;
    };
    
    this.put_end = function(value)
    {
        end = value;
    };
    
    this.get_fill = function()
    {
        return fill;
    };
    
    this.put_fill = function(value)
    {
        fill = value;
    };
    
    this.get_repeatCount = function()
    {
        return repeatCount;
    };
    
    this.put_repeatCount = function(value)
    {
        repeatCount = value;
    };
    
    this.get_repeatDur = function()
    {
        return repeatDur;
    };
    
    this.put_repeatDur = function(value)
    {
        repeatDur = value;
    };
    
    this.get_restart = function()
    {
        return restart;
    };
    
    this.put_restart = function(value)
    {
        restart = value;
    };
    
    this.get_speed = function()
    {
        return speed;
    };
    
    this.put_speed = function(value)
    {
        speed = value;
    };
    
    this.get_syncBehavior = function()
    {
        return syncBehavior;
    };
    
    this.put_syncBehavior = function(value)
    {
        syncBehavior = value;
    };
    
    this.get_syncTolerance = function()
    {
        return syncTolerance;
    };
    
    this.put_syncTolerance = function(value)
    {
        syncTolerance = value;
    };
    
    this.get_timeAction = function()
    {
        return timeAction;
    };
    
    this.put_timeAction = function(value)
    {
        timeAction = value;
    };
    
    this.get_timeAll = function()
    {
        return timeAll;
    };
    
    this.get_timeChildren = function()
    {
        return timeChildren;
    };
    
    this.get_timeContainer = function()
    {
        return timeContainer;
    };
    
    this.put_timeContainer = function(value)
    {
        timeContainer = value;
    };
    
    this.get_timeParent = function()
    {
        return timeParent;
    };
    
    this.beginElement = function()
    {
        
    };
    
    this.beginElementAt = function(offset)
    {
        
    };
    
    this.endElement = function()
    {
        
    };
    
    this.endElementAt = function(offset)
    {
        
    };
    
    this.pauseElement = function()
    {
        
    };
    
    this.resumeElement = function()
    {
        
    };
    
    if(typeof(attributes) == "object")
    {
        for(key in attributes)
        {
            if(typeof(this["put_" + key]) == "function")
            {
                this["put_" + key](attributes[key]);
            }
        }
    }
    
};

chronomation.time2 = function(attributes)
{
    var accelerate = null;
    var autoReverse = null;
    var begin = null;
    var decelerate = null;
    var dur = null;
    var end = null;
    var fill = null;
    var repeatCount = null;
    var repeatDur = null;
    var restart = null;
    var speed = null;
    var syncBehavior = null;
    var syncTolerance = null;
    var timeAction = null;
    var timeContainer = null;
    var timeParent = null;
    
    this.get_accelerate = function()
    {
        return accelerate;
    };
    
    this.put_accelerate = function(value)
    {
        accelerate = value;
    };
    
    this.get_autoReverse = function()
    {
        return autoReverse;
    };
    
    this.put_autoReverse = function(value)
    {
        autoReverse = value;
    };
    
    this.get_begin = function()
    {
        return begin;
    };
    
    this.put_begin = function(value)
    {
        begin = value;
    };
    
    this.get_decelerate = function()
    {
        return decelerate;
    };
    
    this.put_decelerate = function(value)
    {
        decelerate = value;
    };
    
    this.get_dur = function()
    {
        return dur;
    };
    
    this.put_dur = function(value)
    {
        dur = value;
    };
    
    this.get_end = function()
    {
        return end;
    };
    
    this.put_end = function(value)
    {
        end = value;
    };
    
    this.get_fill = function()
    {
        return fill;
    };
    
    this.put_fill = function(value)
    {
        fill = value;
    };
    
    this.get_repeatCount = function()
    {
        return repeatCount;
    };
    
    this.put_repeatCount = function(value)
    {
        repeatCount = value;
    };
    
    this.get_repeatDur = function()
    {
        return repeatDur;
    };
    
    this.put_repeatDur = function(value)
    {
        repeatDur = value;
    };
    
    this.get_restart = function()
    {
        return restart;
    };
    
    this.put_restart = function(value)
    {
        restart = value;
    };
    
    this.get_speed = function()
    {
        return speed;
    };
    
    this.put_speed = function(value)
    {
        speed = value;
    };
    
    this.get_syncBehavior = function()
    {
        return syncBehavior;
    };
    
    this.put_syncBehavior = function(value)
    {
        syncBehavior = value;
    };
    
    this.get_syncTolerance = function()
    {
        return syncTolerance;
    };
    
    this.put_syncTolerance = function(value)
    {
        syncTolerance = value;
    };
    
    this.get_timeAction = function()
    {
        return timeAction;
    };
    
    this.put_timeAction = function(value)
    {
        timeAction = value;
    };
    
    this.get_timeContainer = function()
    {
        return timeContainer;
    };
    
    this.put_timeContainer = function(value)
    {
        timeContainer = value;
    };
    
    this.get_timeParent = function()
    {
        return timeParent;
    };
    
    this.beginElement = function()
    {
        
    };
    
    this.beginElementAt = function(offset)
    {
        
    };
    
    this.endElement = function()
    {
        
    };
    
    this.endElementAt = function(offset)
    {
        
    };
    
    this.pauseElement = function()
    {
        
    };
    
    this.resumeElement = function()
    {
        
    };
    
    if(typeof(attributes) == "object")
    {
        for(key in attributes)
        {
            if(typeof(this["put_" + key]) == "function")
            {
                this["put_" + key](attributes[key]);
            }
        }
    }
    
};

//</script>