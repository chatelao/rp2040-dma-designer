
function UARTNode() {
    this.addInput("DMA_DATA_IN", "DMA_DATA");
    this.addOutput("DMA_DATA_OUT", "DMA_DATA");
    this.addOutput("IRQ_OUT", "IRQ");
    this.properties = {
        uart: 0,
        tx_pin: 0,
        rx_pin: 1,
        baudrate: 115200
    };
    this.title = "UART";
}

UARTNode.title = "UART";
UARTNode.desc = "UART DMA Source/Destination & Interrupt Source";
LiteGraph.registerNodeType("dma/uart", UARTNode);
