# Environment setup

conda create -n yaspathon python=3.9
pip install websocket

# How to run

python -m asyncio http.server
import asyncio
from examples.Chain import Chain
chain = Chain("ws://192.168.0.7:8765")
chain.connect(2)
await chain.set_enable(0,True)
await chain.set_torque(0, 1000)
await chain.set_speed(0, 10)
