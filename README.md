# Atmospheric Carbon Data on The Permaweb
Archives the daily CO2 ppm measurement from NOAA ESRL to the Arweave network

## About This Project
The [National Oceanic and Atmospheric Administration Earth System Research Laboratory](https://www.esrl.noaa.gov/) (NOAA ESRL) measures and publishes global average atmospheric carbon dioxide levels. These measurements are important for ongoing climate science and so this project aims to archive NOAA ESRL's measurements to ensure their being available for scientists in the future.

## Using This Project
This script runs daily, recording the latest published measurements from NOAA ESRL on a daily cadence. Each file contains historical NOAA ESRL measurements from January 1, 2009 until today.

All archived NOAA ESRL measurements are tagged with the key: `daily_co2_measurement` and have the value of the updated date in the format YYYY-MM-DD. You can find the archived data by searching the Arweave network using [ArQL](https://github.com/ArweaveTeam/arweave-js#arql) for the key value `daily_co2_measurement`:current date in the form YYYY-MM-DD.

The files are all txt files. [Displayed in a browser](https://as6vxxg4nrdw.arweave.net/8O-Vz0_VLFQaBcceufWAJ6J9vRR_5_jvJvidypHgNd0) they are a total mess (!) but when you [view source or download the files](view-source:https://as6vxxg4nrdw.arweave.net/8O-Vz0_VLFQaBcceufWAJ6J9vRR_5_jvJvidypHgNd0.txt) they are formatted as NOAA ESRL publishes them.

## Developer Note
To run this locally, you will need a `ARWEAVE_KEY` config file with the JSON Arweave wallet keyfile. To obtain an Arweave wallet keyfile, [follow this guide](https://docs.arweave.org/info/wallets/arweave-web-extension-wallet).
