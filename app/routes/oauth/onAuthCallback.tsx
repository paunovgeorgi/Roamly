import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { getExistingUser, storeUserData } from '~/appwrite/auth';
import { account } from '~/appwrite/client';

const OAuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      try {
        const user = await account.get();
        const existing = await getExistingUser(user.$id);
        if (!existing) {
          await storeUserData(); // Adds user to DB
        }
        navigate('/'); // Go to homepage
      } catch (error) {
        console.error('OAuth callback failed:', error);
        navigate('/sign-in');
      }
    };

    init();
  }, [navigate]);

  return <div className='flex w-full h-full justify-center items-center'>
      <p>Logging you in...</p>
  </div>;
};

export default OAuthCallback;