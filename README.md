# taraxaChecker

This script is designed to track block mining on the Taraxa testnet - it makes it easy to monitor your active nodes.

**You need to install Node.js on your server!!!**
**Link for install to Ubuntu [node.js](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04-ru)**

All you need to do is add all your addresses to the db.json file and upload code to server. For example:
```
    {
      "address":[
      ["taraxa1","0x74d6e5ccaf6f2546c2d7a3cd2e5e28c8fa05c71f"],
      ["taraxa2","0xf69c28f2712ed752b0902a31ec9aff1ecd94f80d"],
      ["taraxa3","0x11111111111111111111111111111"]
      ]
    }
```
    >taraxa1 it's just a name, for example, I have 20 nodes and I need to understand which node needs to be restarted
    >next comes the address of your node - the main thing here is not to make a mistake, it must match your nod

In the send.js file, on line 20, you can change the data update time; now there is an interval of 3 hours. If you need another then calculate the time in seconds and multiply by another 1000
The result can be tracked in the rating.txt file - it is overwritten by itself, so nothing needs to be cleared
