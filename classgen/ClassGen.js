//<script language="JScript">

if(WSH.Arguments.length < 1)
{
    WSH.Echo("Usage:\r\n\tClassGen XML [lang]\r\n");
    WSH.Quit();
}

var xml = WSH.Arguments(0);
var xslt = null;
var lang = null;

if(WSH.Arguments.length > 1)
{
    lang = WSH.Arguments(1);
}

var path = WSH.ScriptFullName;
path = path.substring(0, path.lastIndexOf("\\") + 1);

var langMap = new Object();
langMap["js"] = path + "JSGen.xslt";
langMap["jscript"] = path + "JSGen.xslt";

if(lang)
{
    xslt = langMap[lang.toLowerCase()];
    if(!xslt)
    {
        xslt = langMap["js"];
    }
}
else
{
    xslt = langMap["js"];
}

var xmlDoc = new ActiveXObject("Msxml2.DOMDocument.4.0");
var xslDoc = new ActiveXObject("Msxml2.DOMDocument.4.0");

xmlDoc.async = false;
xslDoc.async = false;

xmlDoc.load(xml);
xslDoc.load(xslt);

WSH.Echo(xmlDoc.transformNode(xslDoc));

//</script>