
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:8000")

    # Drag and drop nodes
    page.drag_and_drop('li[data-type="dma/adc"]', '#mycanvas', target_position={'x': 100, 'y': 100})
    page.drag_and_drop('li[data-type="dma/memory"]', '#mycanvas', target_position={'x': 400, 'y': 100})

    # Connect the nodes
    page.mouse.click(120, 120) # Click on the output of the ADC node
    page.mouse.click(420, 120) # Click on the input of the Memory node

    page.screenshot(path="docs/images/adc_to_memory.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
