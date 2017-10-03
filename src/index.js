#!/usr/bin/env node
import request from 'request';
import program from 'commander';

program
  .version('1.0.0')
  .option('--webhookUrl <url>', 'Slack webhook url')
  .option('--action <action>', '(connect|disconnect)')
  .parse(process.argv);

if (!program.webhookUrl) console.error('You must provide --webhookUrl. Please check slack for your valid webhook url.');

let actionType = '';

if (program.action === 'connect') actionType = 'Connection';
else if (program.action === 'disconnect') actionType = 'Disconnection';
if (process.env.common_name) {
  request({
    method: 'POST',
    url: program.webhookUrl,
    json: { text: `Type: New ${actionType}\nCommon Name: ${process.env.common_name}\nTime Initiated: ${process.env.time_ascii}` },
  }, () => {
    process.exit();
  });
}
