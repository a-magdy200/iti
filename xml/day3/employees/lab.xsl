<?xml version="1.0" ?>
<?xml-stylesheet type="text/css" href="stylesheet.css"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <?xml-stylesheet type="text/css" href="stylesheet.css"?>
        <html>

            <head>
                <link rel="stylesheet" href="stylesheet.css"/>
            </head>
            <body>
                <h1>Employees List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phones</th>
                            <th>Email</th>
                            <th>Addresses</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="employees/employee">
                            <tr>
                                <td><xsl:value-of select="name"/></td>
                                <td>
                                    <xsl:for-each select="phones/phone">
                                        <div><xsl:value-of select="text()"/></div>
                                    </xsl:for-each>
                                </td>
                                <td><xsl:value-of select="email"/></td>
                                <td>
                                    <xsl:for-each select="addresses/address">
                                        <div>
                                            <span><xsl:value-of select="street"/></span>,
                                            <span><xsl:value-of select="building"/></span>,
                                            <span><xsl:value-of select="city"/></span>,
                                            <span><xsl:value-of select="country"/></span>,
                                            <span><xsl:value-of select="region"/></span>
                                        </div>
                                    </xsl:for-each>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </tbody>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
