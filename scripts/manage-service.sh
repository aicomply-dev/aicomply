#!/bin/bash
# Helper script to manage the AI Act Platform systemd service

SERVICE_NAME="ai-act-platform"
APP_DIR="/var/www/aicomply/ai-act-platform"

case "$1" in
    start)
        echo "Starting $SERVICE_NAME service..."
        sudo systemctl start $SERVICE_NAME
        sudo systemctl status $SERVICE_NAME --no-pager
        ;;
    stop)
        echo "Stopping $SERVICE_NAME service..."
        sudo systemctl stop $SERVICE_NAME
        ;;
    restart)
        echo "Restarting $SERVICE_NAME service..."
        sudo systemctl restart $SERVICE_NAME
        sudo systemctl status $SERVICE_NAME --no-pager
        ;;
    status)
        sudo systemctl status $SERVICE_NAME --no-pager
        ;;
    logs)
        echo "Showing logs for $SERVICE_NAME (last 50 lines)..."
        sudo journalctl -u $SERVICE_NAME -n 50 --no-pager
        ;;
    logs-follow)
        echo "Following logs for $SERVICE_NAME (Ctrl+C to exit)..."
        sudo journalctl -u $SERVICE_NAME -f
        ;;
    enable)
        echo "Enabling $SERVICE_NAME to start on boot..."
        sudo systemctl enable $SERVICE_NAME
        echo "Service enabled. Use 'start' to start it now."
        ;;
    disable)
        echo "Disabling $SERVICE_NAME from starting on boot..."
        sudo systemctl disable $SERVICE_NAME
        ;;
    rebuild)
        echo "Rebuilding the application..."
        cd $APP_DIR
        npm run build:standalone
        echo "Build complete. Restarting service..."
        sudo systemctl restart $SERVICE_NAME
        sudo systemctl status $SERVICE_NAME --no-pager
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|logs|logs-follow|enable|disable|rebuild}"
        echo ""
        echo "Commands:"
        echo "  start        - Start the service"
        echo "  stop         - Stop the service"
        echo "  restart      - Restart the service"
        echo "  status       - Show service status"
        echo "  logs         - Show last 50 log lines"
        echo "  logs-follow  - Follow logs in real-time"
        echo "  enable       - Enable service to start on boot"
        echo "  disable      - Disable service from starting on boot"
        echo "  rebuild      - Rebuild the app and restart service"
        exit 1
        ;;
esac

exit 0
