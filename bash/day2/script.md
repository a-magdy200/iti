#Install wordpress on a remote host

Machine A (192.168.230.137)

Machine B (192.168.230.138)

Machine A 
- ssh-keygen -t rsa -b 8188

Machine B
- sudo nano /etc/ssh/sshd_config
- PermitRootLogin yes
- PasswordAuthentication yes
- systemctl restart sshd

Machine A
- ssh-copy-id -i ~/.ssh/id_rsa_pub root@192.168.230.138
- `<Enter Password>`

Machine B
- sudo nano /etc/ssh/sshd_config
- PermitRootLogin without-password
- PasswordAuthentication no
- PubkeyAuthentication yes
- AuthorizedKeyFile .ssh/authorized_keys .ssh/authorized_keys2 
- systemctl restart sshd
```
#!/bin/bash

ssh root@192.168.230.138
wget http://wordpress.org/latest.tar.gz
tar xfz latest.tar.gz
rm latest.tar.gz
mv wordpress /var/www/html/
apt update
apt install apache2
apt update
systemctl restart apache2
apt install mysql-server
mysql << EOFMYSQL
create database wpdb;
create user 'wp'@'localhost' identified by 'wp';
grant all on wpdb.* to 'wp'@'localhost' with grant option;
flush privileges
EOFMYSQL;

curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
chmod +x wp-cli.phar
mv wp-cli.phar /usr/local/bin/wp-cli
apt install php -y
cd /var/www/html/
mkdir wordpress
cd wordpress
wp-cli --allow-root core download
wp-cli --allow-root config create --dbname=wpdb --dbuser=wp --dbpass=wp --locale=en_DB
```
