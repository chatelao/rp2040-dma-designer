
function ADCNode() {
    this.addOutput("DMA_DATA_OUT", "DMA_DATA");
    this.properties = {
        pin: 26,
        frequency: 1000
    };
    this.title = "ADC";
}

ADCNode.title = "ADC";
ADCNode.desc = "ADC DMA Source";
LiteGraph.registerNodeType("dma/adc", ADCNode);
