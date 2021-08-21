import { Player } from '@models';
import { checkIsUserLoggedin } from '@services';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useUserAuth = () => {
  const router = useRouter();

  const [user, setUser] = useState<Player | null>(null);

  useEffect(() => {
    const user = checkIsUserLoggedin();

    if (!user) {
      router.push('/login');
    } else {
      setUser(user);
    }
  }, [router]);

  return user;
};

export { useUserAuth };
