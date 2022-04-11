const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
const app = http.createServer();
const serveStatic = (url, res) => {
  fs.readFile(__dirname + url, function (err,data) {
    if (err) {
      sendResponse(res, 404, JSON.stringify(err));
      return;
    }
    sendResponse(res, 200, data);
  });
}
const sendResponse = (res, status = 404, data = '', contentType = 'application/json') => {
  res.writeHead(status, {'Content-Type': contentType});
  res.end(data);
};
const getRequestBody = async req => {
  let data = '';
  let buffers = [];
  let params = {};
  let formData = {};
  for await (const chunk of req) {
    buffers.push(chunk);
  }
  data = Buffer.concat(buffers).toString();
  if (req.headers['content-type'] === 'application/json') {
    formData = JSON.parse(data)
  } else if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    params = new URLSearchParams(data);
    params.forEach((value, key) => {
      formData[key] = value;
    });
  }
  return formData;
}
app.on("request", async (req, res) => {
  const {method, url} = req;
  if (url.search("/api") === 0) {
    if (method === 'POST') {
      const {email, password, username = ''}  = await getRequestBody(req);
      if (!fs.existsSync("data.json")) {
        fs.writeFileSync("data.json", "{}");
      }
      const fileData = JSON.parse(fs.readFileSync("data.json").toString());
      if (email === undefined || password === undefined) {
        sendResponse(res, 500);
        return;
      }
      const current = fileData[email];
      switch(url.toLowerCase()) {
        case "/api/login":
          if (current) {
            if (current.password === password) {
              sendResponse(res, 200, JSON.stringify({"success": true, username: current.username}));
            } else {
              sendResponse(res, 403, JSON.stringify({"error": "Wrong Password"}));
            }
          } else {
            sendResponse(res, 403, JSON.stringify({"error": "Wrong Email"}));
          }
          break;
        case "/api/sign-up":
          if (current) {
            sendResponse(res, 400, JSON.stringify({error: "Email already exists"}));
          } else {
            fileData[email] = {
              password ,username
            };
            try {
              fs.writeFileSync("data.json", JSON.stringify(fileData));
              sendResponse(res, 200, JSON.stringify({"success": true, username}));
            } catch (e) {
              console.log(e);
              sendResponse(res, 500, JSON.stringify({"error": "Server Error"}));
            }
          }
          break;
        default:
          sendResponse(res, 404, JSON.stringify({error: "Not Found"}));
      }
    } else {
      sendResponse(res, 405, JSON.stringify({error: "Method not allowed"}));
    }
  } else {
    if (method === 'GET') {
      if (url === '/') {
        serveStatic('/index.html', res);
      } else if (url.search("/static") === 0) {
        serveStatic(url,res);
      } else {
        sendResponse(res, 404, JSON.stringify({error: "Not Found"}));
      }
    } else {
      sendResponse(res, 405, JSON.stringify({error: "Method not allowed"}));
    }
  }
});
app.on("error", (error) => {
  console.log(error)
})
app.listen(4000);
