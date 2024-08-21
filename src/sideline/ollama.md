
1. **Install [Ollama](https://ollama.com/download)**

   ```bash
    curl -fsSL https://ollama.com/install.sh | sh
    # 启动服务
    sudo systemctl restart ollama

    sudo vim /etc/systemd/system/ollama.service

    [Unit]
    Description=Ollama Service
    After=network-online.target

    [Service]
    ExecStart=/usr/local/bin/ollama serve
    User=ollama
    Group=ollama
    Restart=always
    RestartSec=3
    Environment="PATH=/home/lucas/.local/bin:/home/lucas/anaconda3/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin"
    Environment="OLLAMA_HOST=0.0.0.0:11434"
    Environment="OLLAMA_ORIGINS=*"

    [Install]
    WantedBy=default.target
   ```

2. **Start Using [Models](https://ollama.com/library)**:
   Once installed, you can start downloading and running models, such as Llama, directly using commands like:

   ```bash
   ollama run llama3.1:8b
   ```

   The first time you run a model, it will be downloaded. Subsequent runs will use the local copy.

3.  **Running Ollama with Docker and [Open WebUI](https://github.com/open-webui/open-webui)**
   
If you prefer a GUI over the command line, you can set up **Open WebUI** to interact with your models in a browser. First, ensure Docker is installed, then run:

```bash
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```
Then, open your browser and go to `http://localhost:3000`.

