
# Horsepowered Machine Learning 
eal World Problems are the best teachers. We selected a real world data set scraped from eventing results sites to attempt to discover factors that might impact fall rates among riders in the equestrian sport of eventing. 
​
​
Steps
​
1. Scrape the data
2. Decode, clean and wrangle the data,
3. Read the peer reviewed papers to identify possible factors
4. Run t-tests on a priori factors
5. build a Baysian Model to fill in missing data points
6. Build a sequential model to predict falls
​
​
Findings:
​
The Baysian model worked with a 86% accuracy. However, while this outcome is better than dropping data or  using another metric such as Median or Mean it failed to recognize impossible values. In the future we would need to adjust teh parameters and feed the model more data 
​
As was the case with the Baysian model our sequential model was also starved. It accuratly predicted fails 33% of teh time which was only slightly better than chance. After adjustments the accuracy of the model decreased to 0. We believe this is due to a starved model. We are going to continue to fine tune the model by feeding it more data. 
​
To get cleaner, more robust data we have built a web app that will enable people to enter in falls after an event as well as some other parameters such as fence width that we beilive will be relavent. 
