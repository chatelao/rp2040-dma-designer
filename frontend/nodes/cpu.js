
function CPUNode() {
    this.addInput("IRQ_IN", "IRQ");
    this.addOutput("DMA_DATA_OUT", "DMA_DATA");
    this.properties = {
        core: 0
    };
    this.title = "CPU";
}

CPUNode.title = "CPU";
CPUNode.desc = "CPU Interrupt Target";
LiteGraph.registerNodeType("irq/cpu", CPUNode);
