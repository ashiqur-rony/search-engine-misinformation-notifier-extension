# Search Engine Misinformation Notifier Extension (SEMiNExt)
An Google Chrome extension to filter public health related rumors on popular search engine results.

This extension traverse the content of the search results and looks for trigger keywords for misinformation. `covid`, `covid19`, `corona` etc. are few of them. If any of the trigger keyword is found, an alert is displayed on the website to redirect user to the WHO website. Currently the extension only works on `google.com`, `bing.com`, `yahoo.com`, and `duckduckgo.com` and shows the relevant alert.

## How to Install
This extension is under active development and can only be installed as an unpacked version. Follow these steps to install the extension:
1. Checkout or download the source of the extension, and save to your computer.  
2. Go to `chrome://extensions` from your Google Chrome browser.
3. Click on the `Load Unpacked` button at the top-right corner.
4. Select the directory where the downloaded extension is.

## Expected Results
Once installed, if the search result page contains any of the trigger keywords, an alert will be displayed at the bottom-right corner of the web page. The alert can be closed by clicking the cross icon on the popup.

![Google search result page](https://i.imgur.com/vTlTK25.png)

_Image: Google search result page_

![Bing search result page](https://imgur.com/EcnVeoR.png)

_Image: Bing search result page_

![Duckduckgo search result page](https://imgur.com/WMCStDR.png)

_Image: Duckduckgo search result page_

![Yahoo! search result page](https://imgur.com/eHuIcBW.png)

_Image: Yahoo! search result page_

![Privacy alert](https://imgur.com/xq2lPc0.png)

_Image: Privacy alert from the extension_
