def generate_code(graph):
    code = ""
    includes = set()
    main_body = ""

    for node in graph['nodes']:
        if node['type'] == 'dma/adc':
            pin = node['properties']['pin']

            includes.add("#include <stdio.h>")
            includes.add('#include "pico/stdlib.h"')
            includes.add('#include "hardware/gpio.h"')
            includes.add('#include "hardware/adc.h"')

            main_body += f"""
    adc_init();
    adc_gpio_init({pin});
    adc_select_input({pin - 26}); // ADC_0 is GPIO 26

    while (1) {{
        const float conversion_factor = 3.3f / (1 << 12);
        uint16_t result = adc_read();
        printf("Raw value: 0x%03x, voltage: %f V\\n",
               result, result * conversion_factor);
        sleep_ms(500);
    }}
"""
        elif node['type'] == 'dma/uart':
            pin = node['properties']['rx_pin']
            baudrate = node['properties']['baudrate']

            includes.add("#include <stdio.h>")
            includes.add('#include "pico/stdlib.h"')
            includes.add('#include "hardware/pio.h"')

            # This is a placeholder for the generated PIO header
            includes.add('#include "uart_rx.pio.h"')

            main_body += f"""
    PIO pio = pio0;
    uint sm = 0;
    uint offset = pio_add_program(pio, &uart_rx_program);
    uart_rx_program_init(pio, sm, offset, {pin}, {baudrate});

    while(true) {{
        char c = uart_rx_program_getc(pio, sm);
        putchar(c);
    }}
"""
        elif node['type'] == 'dma/memory':
            address = node['properties']['address']

            # This is a conceptual representation. In a real scenario,
            # we'd write data from another node to this address.
            main_body += f"""
    // Data would be written to {address}
"""
        elif node['type'] == 'irq/cpu':
            core = node['properties']['core']

            # Conceptual representation of code that would run on the CPU.
            main_body += f"""
    // CPU Core {core} is waiting for an interrupt...
"""

    code += "\\n".join(sorted(list(includes)))
    code += "\\n\\n"
    code += "int main() {\\n"
    code += "    stdio_init_all();\\n"
    code += main_body
    code += "    return 0;\\n"
    code += "}"

    return code
