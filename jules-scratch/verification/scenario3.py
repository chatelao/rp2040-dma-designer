
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:8000")

    # Drag and drop nodes
    page.drag_and_drop('li[data-type="dma/adc"]', '#mycanvas', target_position={'x': 50, 'y': 100})
    page.drag_and_drop('li[data-type="dma/memory"]', '#mycanvas', target_position={'x': 300, 'y': 100})
    page.drag_and_drop('li[data-type="dma/spi"]', '#mycanvas', target_position={'x': 50, 'y': 250})
    page.drag_and_drop('li[data-type="dma/uart"]', '#mycanvas', target_position={'x': 300, 'y': 250})
    page.drag_and_drop('li[data-type="irq/cpu"]', '#mycanvas', target_position={'x': 550, 'y': 175})

    # Connect nodes
    page.mouse.click(70, 120) # ADC DMA to Memory DMA
    page.mouse.click(320, 120)

    page.mouse.click(70, 290) # SPI IRQ to CPU IRQ
    page.mouse.click(570, 195)

    page.mouse.click(320, 270) # UART DMA to SPI DMA
    page.mouse.click(70, 270)

    page.screenshot(path="docs/images/multi_peripheral_setup.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
