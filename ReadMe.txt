
 The Chronomation animation library

 Copyright (c) 2002 Nikhil Dabas
 http://www27.brinkster.com/nikhildabas/chronomation/

Standards Status
 Based on
   Synchronized Multimedia Integration Language (SMIL 2.0)
   W3C Recommendation 07 August 2001
   http://www.w3.org/TR/2001/REC-smil20-20010807/
 
 Modules
   Animation Modules
   Timing and Synchronisation Module
   Time Manipulations Module

Rough Spec

The SMIL 2.0 Timing and Synchronization Module
  AccessKeyTiming
    This module defines the attribute value syntax for the begin
    and end attributes that allow elements to begin and end based
    upon the user actuating a designated access key. 
    
    @begin
    @end
  
  BasicInlineTiming
    This module defines the attributes that make up basic timing
    support for adding timing to XML elements. 
    
    @dur
    @begin
    @end
  
  BasicTimeContainers
    This module defines basic time container elements, attributes
    that describe an element's display behavior within a time
    container, and end conditions for time containers.
    
    par
    seq
    @fill
    @endsync
  
  EventTiming
    This module defines the attribute value syntax for begin and
    end attributes that allow elements to begin and end in response
    to an event.
    
    @begin
    @end
  
  ExclTimeContainers
    This module includes a time container that defines a mutually
    exclusive set of elements, and describes interrupt semantics
    among these elements.
    
    excl
    priorityClass
    @fill
    @endsync
  
  FillDefault
    This module defines syntax for specifying default display
    behavior for elements.
    
    @fillDefault
  
  MediaMarkerTiming
    This module defines the attribute value syntax for the begin
    and end attributes that allow elements to begin and end based
    upon markers contained in the source content.
    
    @begin
    @end
  
  MinMaxTiming
    This module defines the attributes that allow setting minimum
    and maximum bounds on element active duration.
    
    @max
    @min
  
  MultiArcTiming
    This module extends the attribute value syntax for the begin
    and end attributes to allow multiple semicolon-separated
    values. Any combination of the simple begin and end value
    types provided by the other timing modules included in the
    profile are allowed. 
    
    @begin
    @end
  
  RepeatTiming
    This module defines the attributes that allow repeating an
    element for a given duration or number of iterations.
    
    @repeatCount
    @repeatDur
  
  RepeatValueTiming
    This module defines the attribute value syntax for begin and
    end attributes that allow elements to begin and end in
    response to repeat events with a specific iteration value. 
    
    @begin
    @end
  
  RestartDefault
    This module defines syntax for specifying default restart
    semantics for elements.
    
    @restartDefault
  
  RestartTiming
    This module defines an attribute for controlling the begin
    behavior of an element that has previously begun.
    
    @restart
  
  SyncBehavior
    This module defines syntax for specifying the runtime
    synchronization behavior among elements. 
    
    @syncBehavior
    @syncTolerance
  
  SyncBehaviorDefault
    This module defines syntax for specifying default
    synchronization behavior for elements and all descendents.
    
    @syncBehaviorDefault
    @syncToleranceDefault
  
  SyncbaseTiming
    This module defines the attribute value syntax for the begin
    and end attributes that allow elements to begin and end
    relative to each other.
    
    @begin
    @end
  
  SyncMaster
    This module defines syntax for specifying the synchronization
    master for a timeline.
    
    @syncMaster
  
  TimeContainerAttributes
    This module defines attributes for adding time container
    support to any XML language elements.
    
    @timeContainer
    @timeAction
    @fill
    @endsync
  
  WallclockTiming
    This module the attribute value syntax for the begin and end
    attributes that allow elements to begin and end relative to
    real world clock time.
    
    @begin
    @end

The SMIL 2.0 Time Manipulations Module
  @accelerate
  @decelerate
  @autoReverse
  @speed

The SMIL 2.0 Animation Modules
  
  BasicAnimation
  
    Target attribute attributes
      @attributeName
      @attributeType
    
    Target element attributes
      @targetElement
    
    Simple animation function attributes
      @values
      @calcMode
    
    Animation effect function attributes
      @accumulate
      @additive
    
    From/to/by attributes for simple animation functions
      @from
      @to
      @by
    
    animate
      @attributeName
      @attributeType
      @targetElement
      @from
      @to
      @by
      @values
      @calcMode
      @accumulate
      @additive
    
    set
      @attributeName
      @attributeType
      @targetElement
      @to
    
    animateMotion
      @targetElement
      @from
      @to
      @by
      @values
      @accumulate
      @additive
      @calcMode
      @origin
    
    animateColor
      @attributeName
      @attributeType
      @targetElement
      @from
      @to
      @by
      @values
      @calcMode
      @accumulate
      @additive
  
  SplineAnimation
    
    animate
      @keyTimes
      @keySplines
      @calcMode
    
    animateMotion
      @keyTimes
      @keySplines
      @calcMode
      @path
    
    animateColor
      @keyTimes
      @keySplines
      @calcMode

values
path
from
to
by