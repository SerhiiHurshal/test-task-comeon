export async function getServerSideProps() {
  if (true) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const GamePage = () => (
  <div className='ingame' style={{ display: 'none' }}>
    <div className='grid ui centered'>
      <div className='three wide column'>
        <div className='ui right floated secondary button inverted'>
          <i className='left chevron icon' />
          Back
        </div>
      </div>
      <div className='ten wide column'>
        <div id='game-launch' />
      </div>
      <div className='three wide column' />
    </div>
  </div>
);

export default GamePage;
