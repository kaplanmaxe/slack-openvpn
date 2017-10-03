# slack-openvpn

### Installation

```
npm install -g slack-openvpn
```

### Slack Setup

In order to configure `slack-openvpn` you will need to set up an incoming webhook into your Slack team. To do this, you will need to install the `Incoming WebHooks` app. Once installed, copy the value inside `Webhook URL`. We will need to set this in the next step.

### OpenVPN config

In your OpenVPN config on your server add the following lines to your config:

```
client-connect "/usr/bin/env slack-openvpn --webhookUrl YOUR_WEBHOOK_URL --action connect"
client-disconnect "/usr/bin/env slack-openvpn --webhookUrl YOUR_WEBHOOK_URL --action disconnect"
```

Restart OpenVPN

```
sudo service openvpn restart
```

Now connect to your vpn. You now have slack notifications configured with OpenVPN!
