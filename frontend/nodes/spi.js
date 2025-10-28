
function SPINode() {
    this.addInput("DMA_DATA_in", "DMA_DATA");
    this.addOutput("DMA_DATA_out", "DMA_DATA");
    this.addOutput("IRQ_OUT", "IRQ");
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
SPINode.desc = "SPI DMA Source/Destination & Interrupt Source";
LiteGraph.registerNodeType("dma/spi", SPINode);
