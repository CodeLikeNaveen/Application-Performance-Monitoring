# APM (Application Performance Monitoring)

## Benifits
- Customer satisfaction
- Rapid diagnosis
- Reduced operating costs
- Effective product development


## What metrics does application performance monitoring track?
- CPU usage
- Response times
- Error rates
- Transaction tracing
- Instances
- Requests
- Uptime

## for this we use [Site24x7](https://www.site24x7.in/app/client#/admin/inventory/monitors-configure/APM-Insight-Application/-/nodejs)

## Implement 
- Create a file [server](server.js) 
- Install APM
'''bash
npm i apminsight --save
'''
- Create a new file named ```apminsightnode.json``` in the same directory as your application start file. Add the below code snippet in the file:
    ```json
    {
        "licenseKey" : "<license-key>",
        "appName" : "<application-name>",
        "port" : <application-port>
    }
    ```
- Restart your application and make few transactions to view data in APM Insight client. 
- Use Custom Instrumentation to track background transactions, app parameters and handled errors.