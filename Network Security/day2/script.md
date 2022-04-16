sudo apt install apache2

sudo systemctl enable apache2

sudo cp 000-default.conf testserver.com.conf

sudo nano testserver.com.conf

<set ServerName=testserver.com>

sudo a2ensite testserver.com.conf

sudo systemctl reload apache2

sudo nano /etc/hosts

add <127.0.0.1 testserver.com>

sudo a2enmod ssl

sudo a2enmod rewrite

sudo nano /etc/apache2/apache2.conf

add 
```
<Directory /var/www/html>
    AllowOverride ALL
</Directory>
```
sudo mkdir /etc/apache2/certs

cd /etc/apache2/certs

sudo openssl req -new -newkey rsa:4096 -x509 -sha256 -days 365 -nodes -out apache.crt -keyout apache.key

sudo nano /etc/apache2/sites-enabled/000-default.conf

add
```
<VirtualHost *:443>
    ServerAdmin webmaster@localhost

    DocumentRoot /var/www/html

    ErrorLog ${APACHE_LOG_DIR}/error.log

    CustomLog ${APACHE_LOG_DIR}/access.log combined

    SSLEngine on

    SSLCertificateFile /etc/apache2/certs/apache.crt

    SSLCertificateKeyFile /etc/apache2/certs/apache.key

</VirtualHost>
```
edit VirtualHost on port 80 to redirect to https
```
RewriteEngine on
RewriteCond %{HTTPS} !=on
RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R=301,L]
```