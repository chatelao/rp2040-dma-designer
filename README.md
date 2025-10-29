# RP2040 DMA & Interrupt Configuration UI

This project provides a web-based UI for configuring DMA and interrupt chains for the RP2040 microcontroller. It is inspired by Node-RED and GNU Radio.

## Installation

### Backend

The backend is a Python Flask application.

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Create a virtual environment:**
    ```bash
    python -m venv venv
    ```

3.  **Activate the virtual environment:**
    *   **Windows:**
        ```bash
        venv\\Scripts\\activate
        ```
    *   **macOS & Linux:**
        ```bash
        source venv/bin/activate
        ```

4.  **Install the required dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

### Frontend

The frontend is a static website. You can serve it using a simple HTTP server.

## Running the Application

1.  **Start the backend server:**
    ```bash
    python backend/app.py
    ```
    The server will start on `http://127.0.0.1:5000`.

2.  **Serve the frontend:**
    You can use Python's built-in HTTP server to serve the frontend.

    *   **Navigate to the frontend directory:**
        ```bash
        cd frontend
        ```
    *   **Start the HTTP server:**
        ```bash
        python -m http.server
        ```
        The frontend will be available at `http://localhost:8000`.

3.  **Open the application in your browser:**
    Open your web browser and navigate to `http://localhost:8000`.
