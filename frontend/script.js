
window.addEventListener('DOMContentLoaded', (event) => {
    const graph = new LGraph();

    const canvas = new LGraphCanvas("#mycanvas", graph);

    graph.start();

    // Add drag and drop functionality
    const nodes = document.querySelectorAll('.node');
    nodes.forEach(node => {
        node.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.dataset.type);
        });
    });

    const editor = document.querySelector('#editor');
    editor.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    editor.addEventListener('drop', (e) => {
        e.preventDefault();
        const nodeType = e.dataTransfer.getData('text/plain');
        const node = LiteGraph.createNode(nodeType);
        node.pos = [e.clientX, e.clientY];
        graph.add(node);
    });

    const generateButton = document.querySelector('#generate-button');
    const modal = document.querySelector('#code-modal');
    const closeButton = document.querySelector('.close-button');
    const codeOutput = document.querySelector('#code-output');

    generateButton.addEventListener('click', () => {
        const data = graph.serialize();
        fetch('http://127.0.0.1:5000/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            codeOutput.textContent = data.code;
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    const propertiesContent = document.querySelector('#properties-content');

    canvas.onNodeSelected = (node) => {
        propertiesContent.innerHTML = '';
        for (const [key, value] of Object.entries(node.properties)) {
            const label = document.createElement('label');
            label.textContent = key;
            const input = document.createElement('input');
            input.value = value;
            input.addEventListener('change', (e) => {
                node.properties[key] = e.target.value;
            });
            propertiesContent.appendChild(label);
            propertiesContent.appendChild(input);
        }
    };

    const saveButton = document.querySelector('#save-button');
    const loadButton = document.querySelector('#load-button');
    const loadInput = document.querySelector('#load-input');

    saveButton.addEventListener('click', () => {
        const data = graph.serialize();
        const a = document.createElement('a');
        a.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));
        a.download = 'graph.json';
        a.click();
    });

    loadButton.addEventListener('click', () => {
        loadInput.click();
    });

    loadInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            graph.configure(JSON.parse(e.target.result));
        };
        reader.readAsText(file);
    });
});
