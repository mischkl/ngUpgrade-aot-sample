# Sample for ngUpgrade with AOT

## Overview

![Overview](overview.png)

## Problems

The FlightSearchComponent is not able to display the upgraded FlightCardComponent (after searching for flights from ``Graz`` to ``Hamburg``). 

The FlightCardComponent is defined with in the file ``app.module.ts`` which creates an angular1 module. The file ``app2.module.ts`` defines an ng2-based facade for it.
 
The same holds true for an component ng1 that works like the ng1-component in the test cases.

## The good message

Every other scenario displayed above already works in this sample.

## Build and Start

- Build: ``npm run build`
    - Runs ngc and webpack
- Start: ``npm start``
    - Does not created a build, so run ``npm run build`` before
    - Starts live-server
    
    