
function I2CNode() {
    this.addInput("DMA_DATA_IN", "DMA_DATA");
    this.addOutput("DMA_DATA_OUT", "DMA_DATA");
    this.properties = {
        i2c: 0,
        sda_pin: 6,
        scl_pin: 7
    };
    this.title = "I2C";
}

I2CNode.title = "I2C";
I2CNode.desc = "I2C DMA Source/Destination";
LiteGraph.registerNodeType("dma/i2c", I2CNode);
