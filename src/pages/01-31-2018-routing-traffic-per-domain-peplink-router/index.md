---
title: "Routing traffic per-domain with a Peplink Router"
path: '/routing-traffic-per-domain-peplink-router'
date: "2018-01-31T20:23:14Z"
---

There are several instances where one may want to route traffic to a specific
domain through a certain WAN connection. One use case I recently encountered is
when your country's IP is blocked for a specific site. It's a relatively simple
process, and can be a really powerful tool when managing a network. Here's the
steps:

![Step 1](images/step1.png)
Firstly, we'll open up the network preferences  

![Step 2](images/step2.png) Then, navigate to the outbound policy page. When
outbound policy is set to custom, this page will list any specific
traffic-routing rules you have set up. If it is not set to custom, go ahead and
set it now.
  
![Step 3](images/step3.png)
Scroll the whole way to the bottom of the list, then add a new rule

![Step 4](images/step4.png)
Go ahead and name the rule something recognizable so you will know what it is for in the future. To filter by domain, Adjust the "Destination" section accordingly, then enter your domain name. Wildcards are also supported. for more information, click the `?` button. Choose an appropriate algorithm for routing your traffic. Typically, enforced will be the most applicable, but [other options](https://www.peplink.com/technology/load-balancing-algorithms/) are available. 

When you are finished with the configuration, save your changes.

![Step 5](images/step5.png)
![step6](images/step6.png)
Your now rule will be placed at the top of the list. The filters will be applied from the top down, so if you want other rules to be higher-priority (for VoIP maybe?), drag your new rule down below them. 

![Step 7](images/step7.png)
Now, click the apply changes button to finalize your changes. The traffic to your specified domain should now be using the algorithm you configured. Go ahead and and give it a test!
