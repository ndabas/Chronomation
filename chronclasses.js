
//<script language="JScript">

var chronomation = new Object();

chronomation.timer = function()
{
    var delay = null;
    var delta = null;
    var fn = null;
    
    this.get_delay = function()
    {
        return delay;
    };
    
    this.put_delay = function(value)
    {
        delay = value;
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
        fn = value;
    };
    
    this.start = function()
    {
        
    };
    
    this.stop = function()
    {
        
    };
    
    this.tick = function()
    {
        
    };
    
};

chronomation.collection = function()
{
    var length = null;
    
    this.get_length = function()
    {
        return length;
    };
    
    this.add = function(item)
    {
        
    };
    
    this.clear = function()
    {
        
    };
    
    this.contains = function(item)
    {
        
    };
    
    this.insert = function(item, index)
    {
        
    };
    
    this.item = function(index)
    {
        
    };
    
    this.remove = function(item)
    {
        
    };
    
    this.removeAt = function(index)
    {
        
    };
    
};

chronomation.animate = function()
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
    
};

chronomation.animateColor = function()
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
    
};

chronomation.animateMotion = function()
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
    
};

chronomation.set = function()
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
    
};

chronomation.excl = function()
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
    
};

chronomation.priorityClass = function()
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
    
};

chronomation.par = function()
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
    
};

chronomation.seq = function()
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
    
};

chronomation.time2 = function()
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
    
};



//</script>

