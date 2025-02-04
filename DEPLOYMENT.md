# Phaser Game Deployment Guide

## Server Details

- VPS Provider: Hostinger
- Server Type: Ubuntu 24.04

## Prerequisites

- SSH client (Terminal for Linux/Mac, PowerShell/CMD for Windows)

## Step 1: Server Access

1. Open terminal/command prompt
2. Connect to the server using SSH:

```bash
ssh root@<server-ip> -p <ssh-port>
```

3. Enter the SSH password when prompted

## Step 2: Build Game

1. Update system packages:

```bash
sudo apt update
sudo apt upgrade -y
```

2. Install node & npm:

```bash
sudo apt install nodejs npm -y
node -v
npm -v
```

3. Clone repository

```bash
git clone https://github.com/thecodedose/pastanation.git
```

4. Install dependencies

```bash
cd pastanation
npm install
```

5. Build project

```bash
npm run build
```

6. Move your Phaser game build files to the web directory:

```bash
sudo cp -r dist/* /var/www/html/
```

7. Ensure the files have the right permissions:

```bash
sudo chmod -R 755 /var/www/html
sudo chown -R www-data:www-data /var/www/html
```

## Step 3: Server Setup

Once logged in, run these commands to set up the server:

1. Update system packages:

```bash
sudo apt update
sudo apt upgrade -y
```

2. Install Nginx:

```bash
sudo apt install nginx -y
```

3. Check if Nginx is running:

```bash
systemctl status nginx
```

If it’s not running, start it:

```bash
sudo systemctl start nginx
```

4. Enable it to start on boot:

```bash
sudo systemctl enable nginx
```

5. Access your game:

- Open web browser
- Visit your server IP address

## Adding a Domain Name (Optional)

1. Purchase a domain name
2. Add DNS records:

   - Type: A Record
   - Points to: 147.93.97.173
   - TTL: 3600

3. Update Nginx configuration:

```bash
nano /etc/nginx/sites-available/phaser-game
```

4. Modify server_name:

```nginx
server_name your-domain.com www.your-domain.com 147.93.97.173;
```

5. Restart Nginx:

```bash
nginx -t
systemctl restart nginx
```

## Troubleshooting

1. Check Nginx error logs:

```bash
cat /var/log/nginx/error.log
```

2. Check Nginx access logs:

```bash
cat /var/log/nginx/access.log
```

3. Verify file permissions:

```bash
ls -la /var/www/phaser-game
```

## Security Notes

- Keep your SSH password secure
- Regularly update system packages
- Consider setting up SSL/HTTPS for production
- Backup your game files regularly

## Maintenance

1. To update game files:

```bash
cd pastanation/dist
npm run build
sudo cp -r dist/* /var/www/html/
```

2. To restart Nginx after changes:

```bash
systemctl restart nginx
```
