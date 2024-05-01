import { FC, useEffect } from 'react';
import { Button } from '@components/action';
import logger from '@services/logger';
import { getApiUrl } from '@helpers/index';
import sy from './Config.scss';

const Config: FC = () => {
  const apiUrl = getApiUrl(process.env.CX_API_BASE_URL || '');
  const apiKey = process.env.CX_API_KEY || '';

  useEffect(() => {
    const fetchToken = async () => {
      const res = await fetch(`${apiUrl}/oauth/get-token`, {
        method: 'GET',
        credentials: 'include',
        headers: [['x-api-key', apiKey]],
      });

      if (res.ok) {
        const token = await res.json();
        logger.info(`Refresh Token: ${token}`);
      }
    };

    fetchToken();
  }, []);

  const handleOAuthInit = async () => {
    try {
      const res = await fetch(`${apiUrl}/oauth/google`, {
        method: 'GET',
        credentials: 'include',
        headers: [['x-api-key', apiKey]],
      });

      if (res.ok) {
        const { authUrl } = await res.json();

        // Redirect to Google's OAuth authorization URL
        window.open(authUrl, '_blank');
      } else {
        logger.error('Failed to get OAuth URL');
      }
    } catch (err) {
      logger.error('Error initiating OAuth flow:', err);
    }
  };

  return (
    <div className={sy.edge}>
      <div className={sy.main}>
        <h5>OAuth Trigger</h5>
        <br />
        <Button variant="primary" click={handleOAuthInit}>
          Initiate OAuth Flow
        </Button>
      </div>
    </div>
  );
};

export default Config;
