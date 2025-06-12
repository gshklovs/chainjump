# Chainjump

## Environment Setup

Create a Python 3.9 environment and install the websocket package:

```bash
conda create -n yaspathon python=3.9
pip install websocket
```

## How to Run

Start a local HTTP server and control the chain through the example `Chain` class:

```bash
python -m asyncio http.server
```

```python
import asyncio
from examples.Chain import Chain

chain = Chain("ws://192.168.0.7:8765")
await chain.connect(2)
await chain.set_enable(0, True)
await chain.set_torque(0, 1000)
await chain.set_speed(0, 10)
```

## Socket API

Messages exchanged over the websocket have the form `<client_id>:<payload>`.
The first client message is either `imhub` to register as the hub or `j<hub_index>`
to join a hub.

The payload begins with a single character:

- `w` – write command.
- `r` – read request.
- `R` – response or subscription update from the hub.
- `s` – subscribe to a read command.
- `u` – unsubscribe from a command.
- `c` – create a new player object.

The websocket server simply forwards these messages between players and the hub.

## Game Object API

The hub controls game objects using these commands inside `game.mjs`.

### Write Commands

- `wsped<index>,<speed>` – set motor speed of a joint.
- `wtorq<index>,<torque>` – set maximum motor torque of a joint.
- `wmtre<index>,<t|f>` – enable (`t`) or disable (`f`) a motor.

### Read Commands

- `rangl<s|j>,<index>` – read the angle of a segment (`s`) or joint (`j`).
- `rposn<index>` – read the position of a segment.

### Create Command

To spawn a player the hub sends a `c` message containing semicolon-separated
segment and joint definitions. Each definition starts with:

- `s<startX>,<startY>,<endX>,<endY>,<posX>,<posY>` – create a capsule segment.
- `j<segIndexA>,<anchorAX>,<anchorAY>,<segIndexB>,<anchorBX>,<anchorBY>` – attach
  two segments with a revolute joint.

Clients may subscribe with `s<read_cmd>` and will receive `R` responses whenever
values change.
