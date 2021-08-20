import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';

const GamePage = () => {
  const router = useRouter();

  const { name } = router.query;

  useEffect(() => {
    window.comeon.game.launch(name);
  });

  const goBack = () => {
    router.back();
  };

  return (
    <Fragment>
      <div className='grid ui centered'>
        <header className='three wide column'>
          <button
            className='ui right floated secondary button inverted'
            onClick={goBack}
          >
            <i className='left chevron icon' />
            Back
          </button>
        </header>
        <main className='ten wide column'>
          <div id='game-launch' />
        </main>
        <div className='three wide column' />
      </div>
    </Fragment>
  );
};

export default GamePage;
