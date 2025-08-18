import logging
import smtplib
from email.mime.text import MIMEText

import requests
from flask import Blueprint, jsonify, request

from ...secrets import resolve_secret

logger = logging.getLogger(__name__)

bp = Blueprint('events_notify', __name__)


@bp.route('/events/notify', methods=['POST'])
def notify():
    """Send notifications via Telegram and SMTP.

    Expects JSON payload: {"message": "..."}
    """
    payload = request.get_json(silent=True) or {}
    message = payload.get('message')
    if not message:
        return jsonify({'error': 'message is required'}), 400

    results = {}

    # Telegram notification
    bot_key = resolve_secret('TELEGRAM_BOT_KEY')
    chat_id = resolve_secret('TELEGRAM_CHAT_ID')
    if bot_key and chat_id:
        try:
            url = f"https://api.telegram.org/bot{bot_key}/sendMessage"
            resp = requests.post(url, json={'chat_id': chat_id, 'text': message}, timeout=10)
            resp.raise_for_status()
            results['telegram'] = 'sent'
        except Exception as e:
            logger.error(f'Telegram notification failed: {e}')
            results['telegram'] = 'failed'
    else:
        # Stub in environments without keys
        logger.info('Telegram credentials not provided. Skipping actual send.')
        results['telegram'] = 'skipped'

    # SMTP notification
    smtp_host = resolve_secret('SMTP_HOST')
    smtp_port = resolve_secret('SMTP_PORT')
    smtp_user = resolve_secret('SMTP_USER')
    smtp_pass = resolve_secret('SMTP_PASSWORD')
    smtp_to = resolve_secret('SMTP_TO')

    if all([smtp_host, smtp_port, smtp_user, smtp_pass, smtp_to]):
        try:
            msg = MIMEText(message)
            msg['Subject'] = 'Notification'
            msg['From'] = smtp_user
            msg['To'] = smtp_to
            with smtplib.SMTP(smtp_host, int(smtp_port)) as server:
                server.starttls()
                server.login(smtp_user, smtp_pass)
                server.sendmail(smtp_user, [smtp_to], msg.as_string())
            results['smtp'] = 'sent'
        except Exception as e:
            logger.error(f'SMTP notification failed: {e}')
            results['smtp'] = 'failed'
    else:
        logger.info('SMTP credentials not fully provided. Skipping actual send.')
        results['smtp'] = 'skipped'

    return jsonify({'status': results})
