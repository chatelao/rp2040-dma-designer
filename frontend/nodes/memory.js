
function MemoryNode() {
    this.addInput("DMA_DATA_IN", "DMA_DATA");
    this.addOutput("DMA_DATA_OUT", "DMA_DATA");
    this.size = [180, 60];
    this.properties = {
        address: "0x20000000",
        size: 1024
    };
    this.title = "Memory";
}

MemoryNode.title = "Memory";
MemoryNode.desc = "Memory DMA Source/Destination";
LiteGraph.registerNodeType("dma/memory", MemoryNode);
