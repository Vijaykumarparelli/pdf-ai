import { urlGenerator } from '@utls/common';
import axios from 'axios';
function checkCodeMethod(handler) {
  return async (req, res) => {
    const { code } = req.query;
    if (!code) {
      res.status(401).json({ data: 'unauthorization access found' });
    }
    if (req.method !== 'GET') {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
    return handler(req, res);
  };
}

export default checkCodeMethod(async function handler(req, res) {
  const htmlError = `
  <html>
    <body>
    <h2>unauthorization access found</h2>
      <script>
      if (window.opener != null && !window.opener.closed) {
        window.opener.postMessage({ data: 'unauthorization access found', isDone: true, isError: true });
      }
      window.close()
      </script>
    </body>
  </html>
`;

  let token = await getAccessToken(req, res);
  if (!token) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(htmlError);
    return;
  }
  let userInfo = await getUserInfo(req, res, token);
  if (!userInfo) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(htmlError);
    return;
  }
  const html = `
    <html>
      <body>
        <script>
        if (window.opener != null && !window.opener.closed) {
          window.opener.postMessage({ data: ${JSON.stringify({ ...token, ...userInfo })}, isDone: true });
        }
        window.close()
        </script>
      </body>
    </html>
  `;
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
  // res.status(200).json({ ...token, ...userInfo });
});

const getAccessToken = async (req, res) => {
  const { code } = req.query;
  const googleUri = urlGenerator('https://oauth2.googleapis.com/token', {
    code: code,
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: process.env.NEXT_PUBLIC_BASEURL + process.env.NEXT_PUBLIC_GOOGLE_CALLBACK_URL,
    grant_type: 'authorization_code',
  });
  try {
    const res = await axios.post(googleUri.href, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return res.data;
  } catch (error) {
    return false;
  }
};

const getUserInfo = async (req, res, info) => {
  try {
    const res = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + info.access_token, {
      headers: {
        Authorization: 'Bearer ' + info.access_token,
      },
    });
    return res.data;
  } catch (error) {
    return false;
  }
};
