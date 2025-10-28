
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:8000")

    # Drag and drop nodes
    page.drag_and_drop('li[data-type="dma/uart"]', '#mycanvas', target_position={'x': 100, 'y': 100})
    page.drag_and_drop('li[data-type="irq/cpu"]', '#mycanvas', target_position={'x': 400, 'y': 100})

    # Connect the nodes
    page.mouse.click(120, 140) # Click on the IRQ output of the UART node
    page.mouse.click(420, 120) # Click on the IRQ input of the CPU node

    page.screenshot(path="docs/images/uart_to_cpu_interrupt.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
