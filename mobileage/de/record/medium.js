/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function () {

    var json = {
        "template": "",
        "onData": "",
        "onTemplate": ""
    };

    json.template = "\n\t\t\t\t\t\t<article class='ma-schema--pharmacy' itemscope itemtype='http:\/\/schema.org\/Pharmacy'>"
            + "\n\t\t\t\t\t\t\t<h1 itemprop='name'><%name%><\/h1>"
            + "\n\t\t\t\t\t\t\t<div class='ma - schema__logo'>"
            + "\n\t\t\t\t\t\t\t\t<img itemprop='logo' alt='Logo: <%name%>' src='<%logo%>'\/>\n\t\t\t\t\t\t\t<\/div>"
            + "\n\t\t\t\t\t\t\t<p itemprop='description'><%description%><\/p>"
            + "\n\t\t\t\t\t\t\t<dl>"
            + "\n\t\t\t\t\t\t\t\t<dt>\u00d6ffnungszeiten<\/dt>"
            + "\n\t\t\t\t\t\t\t\t<dd itemprop='openingHours'><%openingHours%><\/dd>"
            + "\n\t\t\t\t\t\t\t\t<dt>Telefon<\/dt>"
            + "\n\t\t\t\t\t\t\t\t<dd itemprop='telephone'><%telephone%><\/dd>"
            + "\n\t\t\t\t\t\t\t\t<dt>Fax<\/dt>"
            + "\n\t\t\t\t\t\t\t\t<dd itemprop='faxNumber'><%faxNumber%><\/dd>"
            + "\n\t\t\t\t\t\t\t\t<dt>E - Mail<\/dt>"
            + "\n\t\t\t\t\t\t\t\t<dd itemprop='email'><%email%><\/dd>"
            + "\n\t\t\t\t\t\t\t\t<dt>Web<\/dt>"
            + "\n\t\t\t\t\t\t\t\t<dd itemprop='url'><a href='<%url%>'><%url%><\/a><\/dd>"
            + "\n\t\t\t\t\t\t\t\t<dt>Adresse<\/dt>"
            + "\n\t\t\t\t\t\t\t\t<dd>"
            + "\n\t\t\t\t\t\t\t\t\t<address itemprop='address' itemscope itemtype='http:\/\/schema.org\/PostalAddress'>"
            + "\n\t\t\t\t\t\t\t\t\t\t<%address.streetAddress%><br\/>"
            + "\n\t\t\t\t\t\t\t\t\t\t<%address.addressCountry%> - <%address.postalCode%> <%address.addressLocality%>"
            + "\n\t\t\t\t\t\t\t\t\t<\/address>"
            + "\n\t\t\t\t\t\t\t\t<\/dd>"
            + "\n\t\t\t\t\t\t\t<\/dl>"
            + "\n\t\t\t\t\t\t\t<p>"
            + "\n\t\t\t\t\t\t\t\t<a href='https:\/\/maps.google.de\/maps?ll=<%geo.latitude%>, <%geo.longitude%>&z=15&t=m&q=<%geo.latitude%>, <%geo.longitude%>'>Auf Karte zeigen<\/a>"
            + "\n\t\t\t\t\t\t\t<\/p>"
            + "\n\t\t\t\t\t\t<\/article>";

    json.onData = "";
    json.onTemplate = "";

    return JSON.stringify(json);

}
