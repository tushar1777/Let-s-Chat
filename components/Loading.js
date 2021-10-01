import {Circle} from 'better-react-spinkit';

const Loading = () => {
  return (
    <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <div>
        <img
          src='https://lh3.googleusercontent.com/proxy/CLf7cB9S_BIf4CbfNcu5gPr0jNygCvYlqZH95R9URAdsV06GS1LsItw93ZHE-2IzKYXgHgTzpwXJXpsjLEOZ7BC-ADFCGpk8Le5C2nmKjkahvttTi0LPYfdAFcx2iU6wAA_j'
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
