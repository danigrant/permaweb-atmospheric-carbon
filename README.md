# Atmospheric Carbon Data on The Permaweb
Archives the daily CO2 ppm measurement from NOAA ESRL to the Arweave network

## About This Project
The [National Oceanic and Atmospheric Administration Earth System Research Laboratory](https://www.esrl.noaa.gov/) (NOAA ESRL) measures and publishes global average atmospheric carbon dioxide levels. These measurements are important for ongoing climate science and so this project aims to archive NOAA ESRL's measurements to ensure their being available for scientists in the future.

## Using This Project
This script runs daily, recording the latest published measurements from NOAA ESRL on a daily cadence. Each file contains historical NOAA ESRL measurements from January 1, 2009 until today.

All archived NOAA ESRL measurements are tagged with the key: `daily_co2_measurement` and have the value of the updated date in the format YYYY-MM-DD. You can find the archived data by searching the Arweave network using [ArQL](https://github.com/ArweaveTeam/arweave-js#arql) for the key value `daily_co2_measurement`:current date in the form YYYY-MM-DD.

The files are all txt files. [Displayed in a browser](https://as6vxxg4nrdw.arweave.net/8O-Vz0_VLFQaBcceufWAJ6J9vRR_5_jvJvidypHgNd0) they are a total mess (!) but when you [view source or download the files](view-source:https://as6vxxg4nrdw.arweave.net/8O-Vz0_VLFQaBcceufWAJ6J9vRR_5_jvJvidypHgNd0.txt) they are formatted as NOAA ESRL publishes them.

```
$ curl 'https://arweave.net/ySzTDJpkbmJyTSrHL3V3_kMBuoPLC_VJfDet6PnlB2Q'

# Estimated CO2 Daily Global Seasonal Cycle and Trend (ppm).
# 
# The estimated daily global seasonal cycle and trend value for CO2 are determined
# from the daily averaged CO2 data from the four NOAA/ESRL/GMD Baseline
# observatories.  A smoothed seasonal cycle and a smoothed de-seasonalized trend
# curve are determined for each observatory record at daily intervals.  An
# estimated global seasonal cycle and trend are computed by averaging the four
# individual observatory seasonal cycle and trend curves at each daily interval.
# 
# For details on the curve fitting process see
# https://www.esrl.noaa.gov/gmd/ccgg/mbl/crvfit/crvfit.html
# 
# CO2 is expressed as a mole fraction in dry air, micromol/mol, abbreviated as ppm
# 
# NOTE: In general, the data presented for the last year are subject to change,
# depending on recalibration of the reference gas mixtures used, and other quality
# control procedures. Occasionally, earlier years may also be changed for the same
# reasons.  Usually these changes are minor.
# 
# year month   day    cycle    trend
  2009     1     1   386.86   385.64
  2009     1     2   386.88   385.65
  2009     1     3   386.90   385.65
  2009     1     4   386.92   385.66
  2009     1     5   386.94   385.66
  2009     1     6   386.96   385.66
  2009     1     7   386.98   385.67
  2009     1     8   387.00   385.67
  ...
  2019    10    30   409.92   411.03
  2019    10    31   409.98   411.04
  2019    11     1   410.03   411.04
```

## Developer Note
To run this locally, you will need a `arweave-wallet.json` file with your Arweave wallet keyfile in it. To obtain an Arweave wallet keyfile, [follow this guide](https://docs.arweave.org/info/wallets/arweave-web-extension-wallet).
