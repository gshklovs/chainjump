# How the API Works
Creating a character and using it works by:

1. Connect to the websocket server
2. Join a lobby
3. Create a character

The websocket server will run unsecured on port 8765, so join through ws://localhost:8765 or whatever IP is required.
The platformer should show a lobby number. Once you connect, join the lobby by sending the websocket message "j<number>"

## Character Creation

You can create a character with up to 5 separate chain segments by sending a string starting with "c", followed by parameters
separated by ";".

To create a segment, send the start and end coordinates of the segment, as well as the location of that segment in space.
The parameter should be in the format `s<Center1X>,<Center1Y>,<Center2X>,<Center2Y>,<LocationX>,<LocationY>`

To create a joint between segments, send the coordinates relative to the first segment, followed by the index of the first segment,
then the coordinates of the joint relative to the second segment, followed by the index of the second segment.
The paramter should be in the format `j<Segment1Index>,<Segment1X>,<Segment1Y>,<Segment2Index>,<Segment2X>,<Segment2Y>`.

An example string to create a character of three 5 unit long segments, end to end with joints between them is:
`s0.0,0.0,5.0,0.0,0.0,0.0;s0.0,0.0,5.0,0.0,5.0,0.0;s0.0,0.0,5.0,0.0,10.0,0.0;j0,5.0,0.0,1,0.0,0.0;j1,5.0,0.0,2,0.0,0.0`

![image](https://github.com/user-attachments/assets/e188b459-9905-413e-9268-caad51b14999)
