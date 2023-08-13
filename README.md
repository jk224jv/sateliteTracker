# Satellite tracker

A "simulated" hardware controller for a satellite dish.
It will take a black and white image,
saved as a html table named signalSimulated.html and scan it for a blob of white,
returning the coordinates of the center.

## Usage

node app.js

## Notes

OBS! Assumption, there is only one white spot. OBS!

Files arranged as:

____app.js______
|               |
locator.js      sim.js

Depends on: n-readlines
