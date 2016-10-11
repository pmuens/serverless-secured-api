# Serverless secured API

Serverless service which showcases how to build an API which is accessible through an API key.

## Installation

Make sure that you use Serverless v1.

1. Run `serverless install --url https://github.com/pmuens/serverless-secured-api` to install the service in your current working directory
2. Next up cd into the service with `cd serverless-secured-api`
3. Deploy with `serverless deploy`

## How to use

Simply perform a request against the exposed endpoint:

This request should return `Forbidden`:

```bash
curl https://XXXX.execute-api.region.amazonaws.com/dev/greet
```

Whereas this one should suceeds:
(you get the API key in the info output after a successfull deployment or if you run `serverless info`)

```bash
curl https://XXXX.execute-api.region.amazonaws.com/dev/greet --header "x-api-key: <api-key>"
```

## AWS services used

- Lambda
- API Gateway
