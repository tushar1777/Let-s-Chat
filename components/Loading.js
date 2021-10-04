import {Circle} from 'better-react-spinkit';

const Loading = () => {
  return (
    <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <div>
        <img
          src='https://lh3.googleusercontent.com/proxy/7MP4Kq4n9woCgz4k0x6JwzBxEU6tnY-2QTZ5QYUi4WK1a5jSHA9knCmm-OZcM8MufkFeVkXw0uOGk9lPsB6j7GGg1rCBpberFptTxDtMkF9qN3ytbx-lChe1pwsT35JkoFxs'
          alt='Loading'
          height='200'
          style={{ marginBottom: 10 }}
        />
        <Circle color='#81dff3' size={30} />
      </div>
    </center>
  );
};

export default Loading;
