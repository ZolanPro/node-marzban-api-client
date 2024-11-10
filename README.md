# node-marzban-api-client
NodeJS async client for accessing MarzbanAPI

------------

## Installation
Using npm:
```shell
npm install node-marzban-api-client
```

## Usage
```javascript
const client = new Marzban('http://127.0.0.1:8000/');
client.auth('login', 'password');

const user = client.user.get('username');
console.log(user);
```

## Documentation
- [API Description](https://github.com/ZolanPro/node-marzban-api-client/blob/master/docs/api.md "API Description")

### Options
- `errorHandler` - Function to handle errors
- `reAuth` - Boolean to enable auto re-authentication
- `reAuthAttempts` - Number of re-authentication attempts

## License
Distributed under the MIT License. See `LICENSE` for more information.
