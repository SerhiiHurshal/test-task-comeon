import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useUserAuth } from 'src/hooks/use-user-auth';

const GamePage = () => {
  const user = useUserAuth();
  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    if (user) {
      window.comeon.game.launch(name as string);
    }
  });

  const goBack = () => {
    router.back();
  };

  if (!user) return null;

  return (
    <section className='grid ui centered'>
      <aside className='three wide column'>
        <button
          className='ui right floated secondary button inverted'
          onClick={goBack}
        >
          <i className='left chevron icon' />
          Back
        </button>
      </aside>
      <main className='ten wide column'>
        <div id='game-launch' />
      </main>
      <aside className='three wide column' />
    </section>
  );
};

export default GamePage;
