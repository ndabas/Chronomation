<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="text" />
    
    <xsl:template match="/objects">
//&lt;script language=&quot;JScript&quot;&gt;

var <xsl:value-of select="@ns" /> = new Object();

<xsl:apply-templates />

//&lt;/script&gt;
</xsl:template>
    
    <xsl:template match="object">
<xsl:value-of select="/objects/@ns" />.<xsl:value-of select="@name"/> = function()
{
    <xsl:apply-templates mode="propertyVariables">
        <xsl:sort select="@name" />
    </xsl:apply-templates>
    
    <xsl:apply-templates mode="propertyFunctions">
        <xsl:sort select="@name" />
    </xsl:apply-templates>
    
    <xsl:apply-templates mode="methods">
        <xsl:sort select="@name" />
    </xsl:apply-templates>
};

</xsl:template>
    
    <xsl:template match="property" mode="propertyVariables">var <xsl:value-of select="@name" /> = null;
    </xsl:template>
    
    <xsl:template match="property" mode="propertyFunctions">
    <xsl:if test="get">
    this.get_<xsl:value-of select="@name" /> = function()
    {
        return <xsl:value-of select="@name" />;
    };
    </xsl:if>
    <xsl:if test="set">
    this.put_<xsl:value-of select="@name" /> = function(value)
    {
        <xsl:value-of select="@name" /> = value;
    };
    </xsl:if>
    </xsl:template>
    
    <xsl:template match="method" mode="methods">
    this.<xsl:value-of select="@name" /> = function(<xsl:value-of select="@params" />)
    {
        
    };
    </xsl:template>
    
</xsl:stylesheet>