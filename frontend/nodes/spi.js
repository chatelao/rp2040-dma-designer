
function SPINode() {
    this.addInput("DMA_DATA_IN", "DMA_DATA");
    this.addOutput("DMA_DATA_OUT", "DMA_DATA");
    this.properties = {
        spi: 0,
        tx_pin: 3,
        rx_pin: 4,
        sck_pin: 2,
        cs_pin: 5
    };
    this.title = "SPI";
}

SPINode.title = "SPI";
SPINode.desc = "SPI DMA Source/Destination";
LiteGraph.registerNodeType("dma/spi", SPINode);
