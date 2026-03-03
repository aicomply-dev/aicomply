# Systemd Service Setup for AI Act Platform

The Next.js application has been configured to run as a systemd service, allowing it to run independently of terminal sessions and automatically restart on failure.

## Service Configuration

- **Service Name**: `ai-act-platform`
- **Service File**: `/etc/systemd/system/ai-act-platform.service`
- **Working Directory**: `/var/www/aicomply/ai-act-platform`
- **Port**: Default Next.js port (3000) - can be configured via `PORT` environment variable

## Prerequisites

Before starting the service, ensure:

1. **Environment file exists**: Create `.env` file in the project root
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

2. **Required environment variables**:
   - `DATABASE_URL` - PostgreSQL connection string
   - `NEXTAUTH_SECRET` - Secret key for NextAuth
   - `NEXTAUTH_URL` - Base URL of your application

3. **Application is built**:
   ```bash
   npm run build
   ```

## Service Management

### Using the helper script (recommended):

```bash
# Start the service
./scripts/manage-service.sh start

# Stop the service
./scripts/manage-service.sh stop

# Restart the service
./scripts/manage-service.sh restart

# Check status
./scripts/manage-service.sh status

# View logs
./scripts/manage-service.sh logs

# Follow logs in real-time
./scripts/manage-service.sh logs-follow

# Enable service to start on boot
./scripts/manage-service.sh enable

# Disable service from starting on boot
./scripts/manage-service.sh disable

# Rebuild and restart
./scripts/manage-service.sh rebuild
```

### Using systemctl directly:

```bash
# Start the service
sudo systemctl start ai-act-platform

# Stop the service
sudo systemctl stop ai-act-platform

# Restart the service
sudo systemctl restart ai-act-platform

# Check status
sudo systemctl status ai-act-platform

# Enable on boot
sudo systemctl enable ai-act-platform

# Disable on boot
sudo systemctl disable ai-act-platform

# View logs
sudo journalctl -u ai-act-platform -f
```

## Service Features

- **Auto-restart**: Service automatically restarts on failure (10 second delay)
- **Dependencies**: Waits for PostgreSQL and network to be ready
- **Logging**: Logs are available via `journalctl`
- **Environment**: Loads environment variables from `.env` file
- **Production mode**: Runs with `NODE_ENV=production`

## Troubleshooting

### Service won't start

1. Check if `.env` file exists and has required variables:
   ```bash
   cat .env
   ```

2. Check service logs:
   ```bash
   sudo journalctl -u ai-act-platform -n 50
   ```

3. Verify the build exists:
   ```bash
   ls -la .next
   ```

4. Test the application manually:
   ```bash
   npm run start
   ```

### Service keeps restarting

Check the logs to identify the error:
```bash
sudo journalctl -u ai-act-platform -f
```

Common issues:
- Missing environment variables
- Database connection issues
- Port already in use
- Build errors

### Viewing logs

```bash
# Last 50 lines
sudo journalctl -u ai-act-platform -n 50

# Follow logs in real-time
sudo journalctl -u ai-act-platform -f

# Logs since boot
sudo journalctl -u ai-act-platform -b

# Logs from today
sudo journalctl -u ai-act-platform --since today
```

## Updating the Application

After making changes:

1. Rebuild the application:
   ```bash
   npm run build
   ```

2. Restart the service:
   ```bash
   sudo systemctl restart ai-act-platform
   ```

Or use the helper script:
```bash
./scripts/manage-service.sh rebuild
```

## Port Configuration

By default, Next.js runs on port 3000. To change the port:

1. Add to `.env` file:
   ```
   PORT=3001
   ```

2. Restart the service:
   ```bash
   sudo systemctl restart ai-act-platform
   ```

## Security Notes

- The service currently runs as `root`. For production, consider creating a dedicated user:
  ```bash
  sudo useradd -r -s /bin/false aiact
  sudo chown -R aiact:aiact /var/www/aicomply/ai-act-platform
  ```
  Then update the service file to use `User=aiact` and `Group=aiact`.
