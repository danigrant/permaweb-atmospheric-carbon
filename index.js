/*
*
*  Runs every 24 hours
*  Archives the daily CO2 ppm (from NOAA ESRL) to the Arweave network
*  https://www.arweave.org/
*
*/

const fetch = require('node-fetch')
const Arweave = require('arweave/node');
const key = process.env.ARWEAVE_KEY || require('./arweave-wallet.json')
const Client = require('ftp');
const fs = require('fs');


// init Arweave
const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
});

async function main() {
  // get the file from NOAA
  await fetchFromFTP()

  // push it to the arweave network
  await pushToArweave()
}

async function fetchFromFTP() {
  let ftp = new Client();
  ftp.on('ready', function() {
    ftp.get('/products/trends/co2/co2_trend_gl.txt', function(err, stream) {
      if (err) throw err;
      stream.once('close', function() { ftp.end(); });
      stream.pipe(fs.createWriteStream('co2_ppm.txt'));
    });
  });
  ftp.connect({
    host: "aftp.cmdl.noaa.gov",
    port: 21
  });
}

async function pushToArweave() {
  // read file from fs
  let  file = fs.readFileSync('co2_ppm.txt', 'utf8');

  let buffer = Buffer.from(file, 'utf8')

  console.log(buffer)

  // create transaction
  let transaction = await arweave.createTransaction({
    data: buffer
  }, process.env.ARWEAVE_KEY);

  console.log(transaction);

  // // tag the transaction so it can be found later
  // // tag is: daily_co2_measurement, YYYY-MM-DD (developers can use date pull today's)
  // transaction.addTag('daily_co2_measurement_test', getDate())
  //
  // // sign the transaction
  // await arweave.transactions.sign(transaction, key);
  //
  // // then send it to arweave
  // const response = await arweave.transactions.post(transaction);
  //
  // // return transaction id. data will be hosted at arweave.net/transaction-id
  // let transactionId = JSON.parse(response.config.data)["id"]
  // console.log(response.status, response.data, `https://arweave.net/${transactionId}`);
  // return transactionId
}

let getDate = () => {
  let date = new Date()
  return `${date.getFullYear()}-${date.getMonth() + 1}-${('0' + date.getDate()).slice(-2)}`
}

module.exports.run = main
