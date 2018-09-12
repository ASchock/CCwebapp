<?xml version="1.0" encoding="utf-8" standalone="no" ?>
<xsl:stylesheet
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xsl:version="1.0">
    <xsl:output method="xml" encoding="utf-8" indent="yes" doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" doctype-public="-//W3C//DTD XHTML 1.0 Transitional//EN" />
    <xsl:template match="/">
        <xsl:element name="html">
            <xsl:attribute name="class">no-js</xsl:attribute>
            <xsl:attribute name="lang=""">lang=""</xsl:attribute>
            <xsl:element name="head">
                <xsl:element name="meta">
                    <xsl:attribute name="charset">utf-8</xsl:attribute>
                    <xsl:element name="meta">
                        <xsl:attribute name="equiv">x-ua-compatible</xsl:attribute>
                        <xsl:attribute name="content">ie=edge</xsl:attribute>
                        <xsl:element name="title">Q1: Country Listing Project</xsl:element>
                        <xsl:element name="meta">
                            <xsl:attribute name="name">description</xsl:attribute>
                            <xsl:attribute name="content=""">content=""</xsl:attribute>
                            <xsl:element name="meta">
                                <xsl:attribute name="name">viewport</xsl:attribute>
                                <xsl:attribute name="content="width=device-width,">content="width=device-width,</xsl:attribute>
                                <xsl:attribute name="initial-scale=1,">initial-scale=1,</xsl:attribute>
                                <xsl:attribute name="shrink-to-fit=no"">shrink-to-fit=no"</xsl:attribute>
                                <xsl:element name="link">
                                    <xsl:attribute name="rel">stylesheet</xsl:attribute>
                                    <xsl:attribute name="href">/main.css</xsl:attribute>
                                </xsl:element>
                                <xsl:element name="body">
                                    <xsl:element name="div">
                                        <xsl:element name="h2">All Countries</xsl:element>
                                        <xsl:element name="div">
                                            <xsl:attribute name="style">overflow-x:auto;</xsl:attribute>
                                            <xsl:element name="table">
                                                <xsl:attribute name="id">allCountriesTable</xsl:attribute>
                                                <xsl:element name="thead">
                                                    <xsl:element name="tr">
                                                        <xsl:element name="th">Country</xsl:element>
                                                        <xsl:element name="th">No of Provinces</xsl:element>
                                                        <xsl:element name="th">Population in 2011</xsl:element>
                                                        <xsl:element name="th">Government</xsl:element>
                                                        <xsl:element name="th">No of Neighbor Countries</xsl:element>
                                                    </xsl:element>
                                                </xsl:element>
                                                <xsl:element name="tbody"></xsl:element>
                                            </xsl:element>
                                        </xsl:element>
                                    </xsl:element>
                                    <xsl:element name="script">
                                        <xsl:attribute name="src">/js/external/jquery-3.3.1.min.js</xsl:attribute>
                                    </xsl:element>
                                    <xsl:element name="script">
                                        <xsl:attribute name="src">/js/main.js</xsl:attribute>
                                    </xsl:element>
                                </xsl:element>
                            </xsl:element>
                        </xsl:template>
                    </xsl:stylesheet>