# Phaser Game Deployment Guide

## Server Details
- VPS Provider: Hostinger
- Server IP: 147.93.97.173
- SSH Port: 22
- Server Type: Ubuntu 24.04

## Prerequisites
- Node.js and npm installed locally
- SSH client (Terminal for Linux/Mac, PowerShell/CMD for Windows)
- Game files built and ready for deployment

## Step 1: Building the Game
1. Navigate to your game directory:
```bash
cd D:\PROJECTS\pastanation
```

2. Build the game:
```bash
npm run build
```
This will create a `dist` folder containing all the optimized game files.

## Step 2: Server Access
1. Open terminal/command prompt
2. Connect to the server using SSH:
```bash
ssh root@147.93.97.173 -p 22
```
3. Enter the SSH password when prompted

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
sudo systemctl start nginx
sudo systemctl enable nginx
```

3. Create game directory:
```bash
mkdir -p /var/www/phaser-game
chmod -R 755 /var/www/phaser-game
```

4. Create Nginx configuration:
```bash
nano /etc/nginx/sites-available/phaser-game
```

5. Add this configuration:
```nginx
server {
    listen 80;
    server_name 147.93.97.173;

    root /var/www/phaser-game;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

6. Enable the site:
```bash
ln -s /etc/nginx/sites-available/phaser-game /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

## Step 4: File Upload
From a new terminal window (not SSH session), upload game files:
```bash
cd D:\PROJECTS\pastanation
scp -r dist/* root@147.93.97.173:/var/www/phaser-game/
```

## Step 5: Verification
1. Check if files are uploaded:
```bash
ls -la /var/www/phaser-game
```

2. Verify Nginx status:
```bash
systemctl status nginx
```

3. Access your game:
- Open web browser
- Visit: http://147.93.97.173

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
# Build locally
npm run build

# Upload new files
scp -r dist/* root@147.93.97.173:/var/www/phaser-game/
```

2. To restart Nginx after changes:
```bash
systemctl restart nginx
``` 